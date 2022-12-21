import NProgress from 'nprogress'; //nprogress module

export const startLoadingBar = (): void => {
    NProgress.start()
}

export const stopLoadingBar = (): void => {
    NProgress.done()
}