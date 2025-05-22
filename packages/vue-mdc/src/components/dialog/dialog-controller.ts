/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

export const SDialogController = Symbol("dialogController")

export interface IDialogControllerHost extends HTMLElement {
    [SDialogController]: IDialogController
}

export interface IDialogController {
    show: () => void
    close: () => void
}
