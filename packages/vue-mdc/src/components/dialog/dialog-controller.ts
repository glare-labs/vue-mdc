
export const SDialogController = Symbol("dialogController")

export interface IDialogControllerHost extends HTMLElement {
    [SDialogController]: IDialogController
}

export interface IDialogController {
    show: () => void
    close: () => void
}
