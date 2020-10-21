import * as actionTypes from './appModalType';

export interface ModalState {
  isOpenModal?: boolean;
  mode?: string;
  type?: string;
}

const initialState = {
  isOpenModal: false,
} as ModalState;

export default (state = initialState, action: ModalState) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true,
        mode: action.mode,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false,
        mode: '',
      };
    default:
      return state;
  }
};
