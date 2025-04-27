import { AttachableController } from '../../internals'
import { isServer } from '../../utils'
import { FocusRingEvents } from './focus-ring-events'

const SHandleByFocusRing = Symbol('handleByFocusRing')
interface IFocusRingEvent extends Event {
    [SHandleByFocusRing]: true
}

export class FocusRingController extends AttachableController {

    private _visible = false
    public get visible() {
        return this._visible
    }
    public set visible(value: boolean) {
        if (value === this._visible) {
            return
        }
        this._visible = value
        if (value) {
            this.host.setAttribute('visible', ``)
        } else {
            this.host.removeAttribute('visible')
        }
    }

    constructor(_host: HTMLElement) {
        super(_host, (prev: HTMLElement | null, next: HTMLElement | null) => {
            if (isServer()) {
                return
            }
            for (const event of FocusRingEvents) {
                prev?.removeEventListener(event, this.handleEvent)
                next?.addEventListener(event, this.handleEvent)
            }
        })
    }

    private readonly handleEvent = (e: Event) => {
        const event = e as IFocusRingEvent
        if (event[SHandleByFocusRing]) {
            return
        }
        switch (event.type) {
            case 'focusin':
                this.visible = this.control?.matches(':focus-visible') ?? false
                break
            case 'focusout':
            case 'pointerdown':
                this.visible = false
                break
            default:
                break
        }

        event[SHandleByFocusRing] = true
    }
}
