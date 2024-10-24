/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * @link https://github.com/material-components/material-web/blob/main/internal/events/redispatch-event.ts
 */

/**
 * Re-dispatches an event from the provided element.
 *
 * This function is useful for forwarding non-composed events, such as `change`
 * events.
 *
 * @example
 * redispatchEvent(event: Event) {
 *     redispatchEvent(this, event);
 * }
 *
 * @param element The element to dispatch the event from.
 * @param event The event to re-dispatch.
 * @return Whether or not the event was dispatched (if cancelable).
 */
export function redispatchEvent(element: Element, event: Event) {
    // For bubbling events in SSR light DOM (or composed), stop their propagation
    // and dispatch the copy.
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
        event.stopPropagation()
    }

    const copy = Reflect.construct(event.constructor, [event.type, event])
    const dispatched = element.dispatchEvent(copy)
    if (!dispatched) {
        event.preventDefault()
    }

    return dispatched
}
