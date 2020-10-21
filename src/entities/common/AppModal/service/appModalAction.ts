import * as actionType from './appModalType'

export interface IAppMode {
    mode?: string
}

export const openModal = (mode?:IAppMode) => {
    return {
        type: actionType.OPEN_MODAL,
        mode: mode
    }
}

export const closeModal = () => {
    return {
        type: actionType.CLOSE_MODAL
    }
}
