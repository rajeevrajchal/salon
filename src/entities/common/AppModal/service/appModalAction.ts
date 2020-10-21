import * as actionType from './appModalType';

export interface IAppMode {
  mode?: string;
  type?: string;
}

export const openModal = (mode?: string): IAppMode => {
  return {
    type: actionType.OPEN_MODAL,
    mode: mode,
  };
};

export const closeModal = (): IAppMode => {
  return {
    type: actionType.CLOSE_MODAL,
  };
};
