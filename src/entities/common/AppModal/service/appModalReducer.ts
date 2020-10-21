import * as actionTypes from './appModalType'
import {IAppMode} from "./appModalAction";

export interface ModalState {
    isOpenModal?: boolean
    mode?: IAppMode
}

const initialState:ModalState = {
    isOpenModal:false,
    mode:{}
}

export default (state = initialState, action:any)=>{
    switch(action.type){
        case actionTypes.OPEN_MODAL:
            return{
                ...state,
                isOpenModal:true,
                mode: action.mode
            };
        case actionTypes.CLOSE_MODAL:
            return initialState
        default:
            return state
    }
}
