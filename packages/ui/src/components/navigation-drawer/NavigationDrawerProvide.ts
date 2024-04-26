import { Ref } from 'vue'

export interface INavigationDrawerProvider {
    currentLabelName: Ref<string | null>
    setCurrentLabelName: (label: string) => void
    currentUrl: Ref<string | null>
    setCurrentUrl: (url: string) => void
    labels: Ref<Array<string>>
}

export const SNavigationDrawerProvideKey = Symbol('Symbol-NavigationDrawProvideKey')
