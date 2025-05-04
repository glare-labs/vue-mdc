/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * @link
 * https://github.com/material-components/material-web/blob/main/internal/events/dispatch-hooks.ts
 * 
 */

/**
 * A symbol used to access dispatch hooks on an event.
 */
const dispatchHooks = Symbol('dispatchHooks')

/**
 * An `Event` with additional symbols for dispatch hooks.
 */
interface EventWithDispatchHooks extends Event {
    [dispatchHooks]: EventTarget
}

/**
 * Add a hook for an event that is called after the event is dispatched and
 * propagates to other event listeners.
 *
 * This is useful for behaviors that need to check if an event is canceled.
 *
 * The callback is invoked synchronously, which allows for better integration
 * with synchronous platform APIs (like `<form>` or `<label>` clicking).
 *
 * Note: `setupDispatchHooks()` must be called on the element before adding any
 * other event listeners. Call it in the constructor of an element or
 * controller.
 *
 * @example
 * ```ts
 * class MyControl extends LitElement {
 *   constructor() {
 *     super();
 *     setupDispatchHooks(this, 'click');
 *     this.addEventListener('click', event => {
 *       afterDispatch(event, () => {
 *         if (event.defaultPrevented) {
 *           return
 *         }
 *
 *         // ... perform logic
 *       });
 *     });
 *   }
 * }
 * ```
 *
 * @example
 * ```ts
 * class MyController implements ReactiveController {
 *   constructor(host: ReactiveElement) {
 *     // setupDispatchHooks() may be called multiple times for the same
 *     // element and events, making it safe for multiple controllers to use it.
 *     setupDispatchHooks(host, 'click');
 *     host.addEventListener('click', event => {
 *       afterDispatch(event, () => {
 *         if (event.defaultPrevented) {
 *           return;
 *         }
 *
 *         // ... perform logic
 *       });
 *     });
 *   }
 * }
 * ```
 *
 * @param event The event to add a hook to.
 * @param callback A hook that is called after the event finishes dispatching.
 */
export function afterDispatch(event: Event, callback: () => void) {
    const hooks = (event as EventWithDispatchHooks)[dispatchHooks]
    if (!hooks) {
        throw new Error(`'${event.type}' event needs setupDispatchHooks().`)
    }

    hooks.addEventListener('after', callback)
}

/**
 * A lookup map of elements and event types that have a dispatch hook listener
 * set up. Used to ensure we don't set up multiple hook listeners on the same
 * element for the same event.
 */
const ELEMENT_DISPATCH_HOOK_TYPES = new WeakMap<Element, Set<string>>()

/**
 * Sets up an element to add dispatch hooks to given event types. This must be
 * called before adding any event listeners that need to use dispatch hooks
 * like `afterDispatch()`.
 *
 * This function is safe to call multiple times with the same element or event
 * types. Call it in the constructor of elements, mixins, and controllers to
 * ensure it is set up before external listeners.
 *
 * @example
 * ```ts
 * class MyControl extends LitElement {
 *   constructor() {
 *     super();
 *     setupDispatchHooks(this, 'click');
 *     this.addEventListener('click', this.listenerUsingAfterDispatch);
 *   }
 * }
 * ```
 *
 * @param element The element to set up event dispatch hooks for.
 * @param eventTypes The event types to add dispatch hooks to.
 */
export function setupDispatchHooks(
    element: Element,
    ...eventTypes: [string, ...string[]]
) {
    let typesAlreadySetUp = ELEMENT_DISPATCH_HOOK_TYPES.get(element)
    if (!typesAlreadySetUp) {
        typesAlreadySetUp = new Set()
        ELEMENT_DISPATCH_HOOK_TYPES.set(element, typesAlreadySetUp)
    }

    for (const eventType of eventTypes) {
        // Don't register multiple dispatch hook listeners. A second registration
        // would lead to the second listener re-dispatching a re-dispatched event,
        // which can cause an infinite loop inside the other one.
        if (typesAlreadySetUp.has(eventType)) {
            continue
        }

        // When we re-dispatch the event, it's going to immediately trigger this
        // listener again. Use a flag to ignore it.
        let isRedispatching = false
        element.addEventListener(eventType, (event: Event) => {
            if (isRedispatching) {
                return
            }

            // Do not let the event propagate to any other listener (not just
            // bubbling listeners with `stopPropagation()`).
            event.stopImmediatePropagation()
            // Make a copy.
            const eventCopy = Reflect.construct(event.constructor, [
                event.type,
                event,
            ])

            // Add hooks onto the event.
            const hooks = new EventTarget();
            (eventCopy as EventWithDispatchHooks)[dispatchHooks] = hooks

            // Re-dispatch the event. We can't reuse `redispatchEvent()` since we
            // need to add the hooks to the copy before it's dispatched.
            isRedispatching = true
            const dispatched = element.dispatchEvent(eventCopy)
            isRedispatching = false
            if (!dispatched) {
                event.preventDefault()
            }

            // Synchronously call afterDispatch() hooks.
            hooks.dispatchEvent(new Event('after'))
        }, {
            // Ensure this listener runs before other listeners.
            // `setupDispatchHooks()` should be called in constructors to also
            // ensure they run before any other externally-added capture listeners.
            capture: true,
        })

        typesAlreadySetUp.add(eventType)
    }
}
