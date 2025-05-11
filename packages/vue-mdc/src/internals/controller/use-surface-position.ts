import { computed, type CSSProperties, nextTick, ref, type Ref, unref, watch } from 'vue'
import { isServer } from '../../utils'

/**
 * Declare popoverAPI functions and properties. See
 * https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
 * Without this, closure will rename these functions. Can remove once these
 * functions make it into the typescript lib.
 */
declare global {
    interface HTMLElement {
        showPopover(): void
        hidePopover(): void
        togglePopover(force: boolean): void
        popover: string | null
    }
}

export const Corner = {
    EndStart: 'end-start',
    EndEnd: 'end-end',
    StartStart: 'start-start',
    StartEnd: 'start-end',
} as const

export type TCorner = (typeof Corner)[keyof typeof Corner]

/**
 * An interface that provides a method to customize the rect from which to
 * calculate the anchor positioning. Useful for when you want a surface to
 * anchor to an element in your shadow DOM rather than the host element.
 */
export interface ISurfacePositionTarget extends HTMLElement {
    getSurfacePositionClientRect?: () => DOMRect
}

/**
 * The configurable options for the surface position controller.
 * For Vue, callbacks will be plain functions. If they need to be reactive,
 * the consumer can wrap them in ref() or ensure they are part of a reactive object.
 */
export interface ISurfacePositionControllerProperties {
    disableBlockFlip?: boolean
    disableInlineFlip?: boolean
    anchorCorner: TCorner
    surfaceCorner: TCorner
    surfaceEl: ISurfacePositionTarget | null
    anchorEl: ISurfacePositionTarget | null
    positioning?: 'absolute' | 'fixed' | 'document'
    isOpen: boolean
    xOffset?: number
    yOffset?: number
    repositionStrategy?: 'move' | 'resize'
    onOpen?: () => void
    beforeClose?: () => Promise<void>
    onClose?: () => void
}

const defaultProps: Omit<ISurfacePositionControllerProperties, 'anchorCorner' | 'surfaceCorner' | 'surfaceEl' | 'anchorEl' | 'isOpen'> = {
    disableBlockFlip: false,
    disableInlineFlip: false,
    positioning: 'absolute',
    xOffset: 0,
    yOffset: 0,
    repositionStrategy: 'move',
    onOpen: () => { },
    beforeClose: async () => { },
    onClose: () => { },
}


/**
 * Given a surface, an anchor, corners, and some options, this hook will
 * calculate the position of a surface to align the two given corners and keep
 * the surface inside the window viewport. It also provides a StyleInfo ref that
 * can be applied to the surface to handle visiblility and position.
 */
export function useSurfacePosition(
    options: Ref<ISurfacePositionControllerProperties> | ISurfacePositionControllerProperties
) {
    const surfaceStyles = ref<CSSProperties>({
        display: 'none',
    })

    // Normalize options to always get the current value, and provide defaults
    const currentOptions = computed<ISurfacePositionControllerProperties>(() => {
        const rawOpts = unref(options)
        return {
            ...defaultProps,
            ...rawOpts,
            // Ensure required fields are present, even if null to satisfy type, consumer must provide them.
            anchorCorner: rawOpts.anchorCorner,
            surfaceCorner: rawOpts.surfaceCorner,
            surfaceEl: rawOpts.surfaceEl,
            anchorEl: rawOpts.anchorEl,
            isOpen: rawOpts.isOpen,
        }
    })

    const calculateBlock = (config: {
        surfaceRect: DOMRect
        anchorRect: DOMRect
        anchorBlock: 'start' | 'end'
        surfaceBlock: 'start' | 'end'
        yOffset: number
        positioning: 'absolute' | 'fixed' | 'document'
        windowInnerHeight: number
        blockScrollbarHeight: number
    }) => {
        const {
            surfaceRect,
            anchorRect,
            anchorBlock,
            surfaceBlock,
            yOffset,
            positioning,
            windowInnerHeight,
            blockScrollbarHeight,
        } = config
        const relativeToWindow = positioning === 'fixed' || positioning === 'document' ? 1 : 0
        const relativeToDocument = positioning === 'document' ? 1 : 0
        const isSurfaceBlockStart = surfaceBlock === 'start' ? 1 : 0
        const isSurfaceBlockEnd = surfaceBlock === 'end' ? 1 : 0
        const isOneBlockEnd = anchorBlock !== surfaceBlock ? 1 : 0

        const blockAnchorOffset = isOneBlockEnd * anchorRect.height + yOffset
        const blockTopLayerOffset = isSurfaceBlockStart * anchorRect.top + isSurfaceBlockEnd * (windowInnerHeight - anchorRect.bottom - blockScrollbarHeight)
        const blockDocumentOffset = isSurfaceBlockStart * window.scrollY - isSurfaceBlockEnd * window.scrollY

        const blockOutOfBoundsCorrection = Math.abs(
            Math.min(
                0,
                windowInnerHeight -
                blockTopLayerOffset -
                blockAnchorOffset -
                surfaceRect.height,
            ),
        )

        const blockInset = relativeToWindow * blockTopLayerOffset + relativeToDocument * blockDocumentOffset + blockAnchorOffset
        const surfaceBlockProperty = surfaceBlock === 'start' ? 'inset-block-start' : 'inset-block-end'

        return {
            blockInset,
            blockOutOfBoundsCorrection,
            surfaceBlockProperty
        }
    }

    const calculateInline = (config: {
        isLTR: boolean
        surfaceInline: 'start' | 'end'
        anchorInline: 'start' | 'end'
        anchorRect: DOMRect
        surfaceRect: DOMRect
        xOffset: number
        positioning: 'absolute' | 'fixed' | 'document'
        windowInnerWidth: number
        inlineScrollbarWidth: number
    }) => {
        const {
            isLTR: isLTRBool,
            surfaceInline,
            anchorInline,
            anchorRect,
            surfaceRect,
            xOffset,
            positioning,
            windowInnerWidth,
            inlineScrollbarWidth,
        } = config
        const relativeToWindow = positioning === 'fixed' || positioning === 'document' ? 1 : 0
        const relativeToDocument = positioning === 'document' ? 1 : 0
        const isLTR = isLTRBool ? 1 : 0
        const isRTL = isLTRBool ? 0 : 1
        const isSurfaceInlineStart = surfaceInline === 'start' ? 1 : 0
        const isSurfaceInlineEnd = surfaceInline === 'end' ? 1 : 0
        const isOneInlineEnd = anchorInline !== surfaceInline ? 1 : 0

        const inlineAnchorOffset = isOneInlineEnd * anchorRect.width + xOffset
        const inlineTopLayerOffsetLTR = isSurfaceInlineStart * anchorRect.left + isSurfaceInlineEnd * (windowInnerWidth - anchorRect.right - inlineScrollbarWidth)
        const inlineTopLayerOffsetRTL = isSurfaceInlineStart * (windowInnerWidth - anchorRect.right - inlineScrollbarWidth) + isSurfaceInlineEnd * anchorRect.left
        const inlineTopLayerOffset = isLTR * inlineTopLayerOffsetLTR + isRTL * inlineTopLayerOffsetRTL

        const inlineDocumentOffsetLTR = isSurfaceInlineStart * window.scrollX - isSurfaceInlineEnd * window.scrollX
        const inlineDocumentOffsetRTL = isSurfaceInlineEnd * window.scrollX - isSurfaceInlineStart * window.scrollX
        const inlineDocumentOffset = isLTR * inlineDocumentOffsetLTR + isRTL * inlineDocumentOffsetRTL

        const inlineOutOfBoundsCorrection = Math.abs(
            Math.min(
                0,
                windowInnerWidth -
                inlineTopLayerOffset -
                inlineAnchorOffset -
                surfaceRect.width,
            ),
        )

        const inlineInset = relativeToWindow * inlineTopLayerOffset + inlineAnchorOffset + relativeToDocument * inlineDocumentOffset

        let surfaceInlineProperty = surfaceInline === 'start' ? 'inset-inline-start' : 'inset-inline-end'

        if (positioning === 'document' || positioning === 'fixed') {
            if ((surfaceInline === 'start' && isLTRBool) || (surfaceInline === 'end' && !isLTRBool)) {
                surfaceInlineProperty = 'left'
            } else {
                surfaceInlineProperty = 'right'
            }
        }

        return {
            inlineInset,
            inlineOutOfBoundsCorrection,
            surfaceInlineProperty,
        }
    }

    const openSurface = async () => {
        if (isServer()) {
            return
        }
        const props = currentOptions.value
        const {
            surfaceEl,
            anchorEl,
            anchorCorner: anchorCornerRaw,
            surfaceCorner: surfaceCornerRaw,
            positioning,
            xOffset,
            yOffset,
            disableBlockFlip,
            disableInlineFlip,
            repositionStrategy,
        } = props

        if (!surfaceEl || !anchorEl) {
            // If it was meant to be open but elements are missing, hide it.
            if (props.isOpen && surfaceStyles.value.display !== 'none') {
                surfaceStyles.value = { display: 'none' }
            }
            return
        }

        const anchorCorner = anchorCornerRaw.toLowerCase().trim()
        const surfaceCorner = surfaceCornerRaw.toLowerCase().trim()

        const windowInnerWidth = window.innerWidth
        const windowInnerHeight = window.innerHeight

        const div = document.createElement('div')
        div.style.opacity = '0'
        div.style.position = 'fixed'
        div.style.display = 'block'
        div.style.inset = '0'
        document.body.appendChild(div)
        const scrollbarTestRect = div.getBoundingClientRect()
        div.remove()

        const blockScrollbarHeight = window.innerHeight - scrollbarTestRect.bottom
        const inlineScrollbarWidth = window.innerWidth - scrollbarTestRect.right

        surfaceStyles.value = {
            display: 'block',
            opacity: '0',
            // Preserve other styles like transform if any were there
            ...surfaceStyles.value,
            // Ensure position related styles are temporary for measurement
            insetBlockStart: undefined,
            insetBlockEnd: undefined,
            insetInlineStart: undefined,
            insetInlineEnd: undefined,
            left: undefined,
            right: undefined,
            top: undefined,
            bottom: undefined,
            height: undefined,
            width: undefined,
        }

        await nextTick()

        if (surfaceEl.popover && surfaceEl.isConnected) {
            const openEvent = new Event('open', { cancelable: true })
            const preventOpen = !surfaceEl.dispatchEvent(openEvent)
            if (!preventOpen) {
                surfaceEl.showPopover()
            }
        }

        const surfaceRect = surfaceEl.getSurfacePositionClientRect ? surfaceEl.getSurfacePositionClientRect() : surfaceEl.getBoundingClientRect()
        const anchorRect = anchorEl.getSurfacePositionClientRect ? anchorEl.getSurfacePositionClientRect() : anchorEl.getBoundingClientRect()
        const [surfaceBlock, surfaceInline] = surfaceCorner.split('-') as Array<'start' | 'end'>
        const [anchorBlock, anchorInline] = anchorCorner.split('-') as Array<'start' | 'end'>

        const isLTR = getComputedStyle(surfaceEl).direction === 'ltr'

        let { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty } = calculateBlock({
            surfaceRect,
            anchorRect,
            anchorBlock,
            surfaceBlock,
            yOffset: yOffset!,
            positioning: positioning!,
            windowInnerHeight,
            blockScrollbarHeight,
        })

        if (blockOutOfBoundsCorrection && !disableBlockFlip) {
            const flippedSurfaceBlock = surfaceBlock === 'start' ? 'end' : 'start'
            const flippedAnchorBlock = anchorBlock === 'start' ? 'end' : 'start'
            const flippedBlock = calculateBlock({
                surfaceRect,
                anchorRect,
                anchorBlock: flippedAnchorBlock,
                surfaceBlock: flippedSurfaceBlock,
                yOffset: yOffset!,
                positioning: positioning!,
                windowInnerHeight,
                blockScrollbarHeight,
            })
            if (blockOutOfBoundsCorrection > flippedBlock.blockOutOfBoundsCorrection) {
                blockInset = flippedBlock.blockInset
                blockOutOfBoundsCorrection = flippedBlock.blockOutOfBoundsCorrection
                surfaceBlockProperty = flippedBlock.surfaceBlockProperty
            }
        }

        let { inlineInset, inlineOutOfBoundsCorrection, surfaceInlineProperty } = calculateInline({
            surfaceRect,
            anchorRect,
            anchorInline,
            surfaceInline,
            xOffset: xOffset!,
            positioning: positioning!,
            isLTR,
            windowInnerWidth,
            inlineScrollbarWidth,
        })

        if (inlineOutOfBoundsCorrection && !disableInlineFlip) {
            const flippedSurfaceInline = surfaceInline === 'start' ? 'end' : 'start'
            const flippedAnchorInline = anchorInline === 'start' ? 'end' : 'start'
            const flippedInline = calculateInline({
                surfaceRect,
                anchorRect,
                anchorInline: flippedAnchorInline,
                surfaceInline: flippedSurfaceInline,
                xOffset: xOffset!,
                positioning: positioning!,
                isLTR,
                windowInnerWidth,
                inlineScrollbarWidth,
            })
            if (Math.abs(inlineOutOfBoundsCorrection) > Math.abs(flippedInline.inlineOutOfBoundsCorrection)) {
                inlineInset = flippedInline.inlineInset
                inlineOutOfBoundsCorrection = flippedInline.inlineOutOfBoundsCorrection
                surfaceInlineProperty = flippedInline.surfaceInlineProperty
            }
        }

        if (repositionStrategy === 'move') {
            blockInset = blockInset - blockOutOfBoundsCorrection
            inlineInset = inlineInset - inlineOutOfBoundsCorrection
        }

        const newStyles: CSSProperties = {
            display: 'block',
            opacity: '1',
            [surfaceBlockProperty]: `${blockInset}px`,
            [surfaceInlineProperty]: `${inlineInset}px`,
        }

        if (repositionStrategy === 'resize') {
            if (blockOutOfBoundsCorrection) {
                newStyles['height'] = `${surfaceRect.height - blockOutOfBoundsCorrection}px`
            }
            if (inlineOutOfBoundsCorrection) {
                newStyles['width'] = `${surfaceRect.width - inlineOutOfBoundsCorrection}px`
            }
        }
        surfaceStyles.value = newStyles
    }

    const closeSurface = () => {
        if (isServer()) {
            return
        }
        surfaceStyles.value = { display: 'none' }
        const { surfaceEl } = currentOptions.value

        if (surfaceEl?.popover && surfaceEl?.isConnected) {
            const closeEvent = new Event('close', { cancelable: true })
            const preventClose = !surfaceEl.dispatchEvent(closeEvent)
            if (!preventClose) {
                surfaceEl.hidePopover()
            }
        }
    }

    // Watch for changes in isOpen or other properties that require action
    if (!isServer()) {
        watch(
            currentOptions, // Watch the computed options object
            async (newProps, oldProps) => {
                const { isOpen, anchorEl, surfaceEl, onOpen, beforeClose, onClose } = newProps

                if (!anchorEl || !surfaceEl) {
                    // If elements are missing, ensure it's closed if it was open
                    if (oldProps?.isOpen && surfaceStyles.value.display !== 'none') {
                        if (beforeClose) await beforeClose()
                        closeSurface()
                        if (onClose) onClose()
                    } else if (surfaceStyles.value.display !== 'none') {
                        // If it's somehow visible without elements, hide it.
                        closeSurface()
                    }
                    return
                }

                const isOpenChanged = oldProps ? newProps.isOpen !== oldProps.isOpen : true // Treat initial run as a change if isOpen

                if (isOpen) {
                    // If isOpen is true, always try to position.
                    // This covers both:
                    // 1. Transitioning from closed to open.
                    // 2. Already open, but other properties (anchor, offsets, etc.) changed.
                    await openSurface()
                    // onOpen should ideally only be called when transitioning from closed to open.
                    // The original Lit controller called onOpen after every successful `position()` if `isOpen` was true.
                    // Let's stick to the original's behavior.
                    if (onOpen) onOpen()
                } else if (isOpenChanged && !isOpen) { // Transitioning from open to closed
                    if (beforeClose) await beforeClose()
                    closeSurface()
                    if (onClose) onClose()
                }
            },
            { immediate: true, deep: true } // immediate to run on mount, deep for nested changes in options (though options is a flat object here)
        )
    }

    // Cleanup scroll listener if any were added (none in this direct translation but good practice for some hooks)
    // onUnmounted(() => { /* remove event listeners if any */ });

    return {
        surfaceStyles,
        closeSurface,
        openSurface,
    }
}

// Example Usage (Conceptual - would be in a .vue file's setup)
/*
import { ref, onMounted } from 'vue';
import { useSurfacePosition, Corner, SurfacePositionControllerProperties } from './useSurfacePosition'; // Adjust path

export default {
  setup() {
    const anchor = ref<HTMLElement | null>(null);
    const surface = ref<HTMLElement | null>(null);

    const positionOptions = ref<SurfacePositionControllerProperties>({
      surfaceEl: surface.value, // Will be null initially, then updated in onMounted
      anchorEl: anchor.value,   // Same here
      anchorCorner: Corner.END_START,
      surfaceCorner: Corner.START_START,
      isOpen: false,
      xOffset: 0,
      yOffset: 10,
      onOpen: () => console.log('Surface opened'),
      beforeClose: async () => console.log('Surface before close'),
      onClose: () => console.log('Surface closed'),
    });

    const { surfaceStyles } = useSurfacePosition(positionOptions);

    onMounted(() => {
      // Now anchor.value and surface.value should be populated by template refs
      positionOptions.value.anchorEl = anchor.value;
      positionOptions.value.surfaceEl = surface.value;
    });

    const toggleOpen = () => {
      positionOptions.value.isOpen = !positionOptions.value.isOpen;
    };

    return {
      anchor,       // for template ref: <div ref="anchor">
      surface,      // for template ref: <div ref="surface">
      surfaceStyles,
      toggleOpen,
      isOpen: computed(() => positionOptions.value.isOpen) // For convenience
    };
  }
}
*/
