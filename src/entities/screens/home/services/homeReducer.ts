import * as actionTypes from './homeType'
import { HomeStateInterface, FacilityInterface} from "../interface/HomeInterface";

const initialState = {} as FacilityInterface

export default (state = initialState, action:HomeStateInterface) => {
    const { type, facilities } = action;
    switch (type) {
        case actionTypes.GET_FACILITY:
            return {
                ...state,
                facilities: facilities
            };
        default:
            return state
    }
}
