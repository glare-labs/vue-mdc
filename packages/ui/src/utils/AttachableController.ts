/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * An object that can host Reactive Controllers and call their lifecycle
 * callbacks.
 */
export interface ReactiveControllerHost {
    /**
     * Adds a controller to the host, which sets up the controller's lifecycle
     * methods to be called with the host's lifecycle.
     */
    addController(controller: ReactiveController): void

    /**
     * Removes a controller from the host.
     */
    removeController(controller: ReactiveController): void

    /**
     * Requests a host update which is processed asynchronously. The update can
     * be waited on via the `updateComplete` property.
     */
    requestUpdate(): void

    /**
     * Returns a Promise that resolves when the host has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * @return A promise of a boolean that indicates if the update resolved
     *     without triggering another update.
     */
    readonly updateComplete: Promise<boolean>
}

/**
 * A Reactive Controller is an object that enables sub-component code
 * organization and reuse by aggregating the state, behavior, and lifecycle
 * hooks related to a single feature.
 *
 * Controllers are added to a host component, or other object that implements
 * the `ReactiveControllerHost` interface, via the `addController()` method.
 * They can hook their host components's lifecycle by implementing one or more
 * of the lifecycle callbacks, or initiate an update of the host component by
 * calling `requestUpdate()` on the host.
 */
export interface ReactiveController {
    /**
     * Called when the host is connected to the component tree. For custom
     * element hosts, this corresponds to the `connectedCallback()` lifecycle,
     * which is only called when the component is connected to the document.
     */
    hostConnected?(): void

    /**
     * Called when the host is disconnected from the component tree. For custom
     * element hosts, this corresponds to the `disconnectedCallback()` lifecycle,
     * which is called the host or an ancestor component is disconnected from the
     * document.
     */
    hostDisconnected?(): void

    /**
     * Called during the client-side host update, just before the host calls
     * its own update.
     *
     * Code in `update()` can depend on the DOM as it is not called in
     * server-side rendering.
     */
    hostUpdate?(): void

    /**
     * Called after a host update, just before the host calls firstUpdated and
     * updated. It is not called in server-side rendering.
     *
     */
    hostUpdated?(): void
}

/**
 * An element that can be attached to an associated controlling element.
 */
export interface Attachable {
    /**
     * Reflects the value of the `for` attribute, which is the ID of the element's
     * associated control.
     *
     * Use this when the elements's associated control is not its parent.
     *
     * To manually control an element, set its `for` attribute to `""`.
     *
     * @example
     * ```html
     * <div class="container">
     *   <md-attachable for="interactive"></md-attachable>
     *   <button id="interactive">Action</button>
     * </div>
     * ```
     *
     * @example
     * ```html
     * <button class="manually-controlled">
     *   <md-attachable for=""></md-attachable>
     * </button>
     * ```
     */
    htmlFor: string | null

    /**
     * Gets or sets the element that controls the visibility of the attachable
     * element. It is one of:
     *
     * - The control referenced by the `for` attribute.
     * - The control provided to `element.attach(control)`
     * - The element's parent.
     * - `null` if the element is not controlled.
     */
    control: HTMLElement | null

    /**
     * Attaches the element to an interactive control.
     *
     * @param control The element that controls the attachable element.
     */
    attach(control: HTMLElement): void

    /**
     * Detaches the element from its current control.
     */
    detach(): void
}

/**
 * A key to retrieve an `Attachable` element's `AttachableController` from a
 * global `MutationObserver`.
 */
export const AttachableControllerSymbol = Symbol('attachableController')

/**
 * The host of an `AttachableController`. The controller will add itself to
 * the host so it can be retrieved in a global `MutationObserver`.
 */
export interface AttachableControllerHost extends HTMLElement {
    [AttachableControllerSymbol]?: AttachableController
}

let FOR_ATTRIBUTE_OBSERVER: MutationObserver | undefined

if (typeof window !== 'undefined') {
    /**
     * A global `MutationObserver` that reacts to `for` attribute changes on
     * `Attachable` elements. If the `for` attribute changes, the controller will
     * re-attach to the new referenced element.
     */
    FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
        for (const record of records) {
            // When a control's `for` attribute changes, inform its
            // `AttachableController` to update to a new control.
            (record.target as AttachableControllerHost)[
                AttachableControllerSymbol
            ]?.hostConnected()
        }
    })
}

/**
 * A controller that provides an implementation for `Attachable` elements.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement implements Attachable {
 *   get control() { return this.attachableController.control; }
 *
 *   private readonly attachableController = new AttachableController(
 *     this,
 *     (previousControl, newControl) => {
 *       previousControl?.removeEventListener('click', this.handleClick);
 *       newControl?.addEventListener('click', this.handleClick);
 *     }
 *   );
 *
 *   // Implement remaining `Attachable` properties/methods that call the
 *   // controller's properties/methods.
 * }
 * ```
 */
export class AttachableController implements ReactiveController, Attachable {
    get htmlFor() {
        return this._host.getAttribute('for')
    }

    set htmlFor(htmlFor: string | null) {
        if (htmlFor === null) {
            this._host.removeAttribute('for')
        } else {
            this._host.setAttribute('for', htmlFor)
        }
    }

    get control() {
        if (this._host.hasAttribute('for')) {
            if (!this.htmlFor || !this._host.isConnected) {
                return null
            }

            return (
                this._host.getRootNode() as Document | ShadowRoot
            ).querySelector<HTMLElement>(`#${this.htmlFor}`)
        }

        return this.currentControl || this._host.parentElement
    }
    set control(control: HTMLElement | null) {
        if (control) {
            this.attach(control)
        } else {
            this.detach()
        }
    }

    get host() {
        return this._host
    }

    private currentControl: HTMLElement | null = null;

    /**
     * Creates a new controller for an `Attachable` element.
     *
     * @param _host The `Attachable` element.
     * @param onControlChange A callback with two parameters for the previous and
     *     next control. An `Attachable` element may perform setup or teardown
     *     logic whenever the control changes.
     */
    constructor(
        protected readonly _host: AttachableControllerHost,
        private readonly onControlChange: (
            prev: HTMLElement | null,
            next: HTMLElement | null,
        ) => void,
    ) {
        _host[AttachableControllerSymbol] = this
        FOR_ATTRIBUTE_OBSERVER?.observe(_host, { attributeFilter: ['for'] })
    }

    attach(control: HTMLElement) {
        if (control === this.currentControl) {
            return
        }

        this.setCurrentControl(control)
        // When imperatively attaching, remove the `for` attribute so
        // that the attached control is used instead of a referenced one.
        this._host.removeAttribute('for')
    }

    detach() {
        this.setCurrentControl(null)
        // When imperatively detaching, add an empty `for=""` attribute. This will
        // ensure the control is `null` rather than the `parentElement`.
        this._host.setAttribute('for', '')
    }

    /** @private */
    hostConnected() {
        this.setCurrentControl(this.control)
    }

    /** @private */
    hostDisconnected() {
        this.setCurrentControl(null)
    }

    private setCurrentControl(control: HTMLElement | null) {
        this.onControlChange(this.currentControl, control)
        this.currentControl = control
    }
}
