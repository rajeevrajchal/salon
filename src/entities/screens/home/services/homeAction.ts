import {FacilityInterface} from "../interface/HomeInterface";
import * as actionType from "./homeType";
import {Dispatch} from "react";
const mockFacility = require('../mockFacility.json');

const getFacility = (payload: FacilityInterface[]) => {
    return {
        type: actionType.GET_FACILITY,
        facilities: payload
    }
}

export const fetchFacilityData = () => (dispatch: Dispatch<any>) => {
    const data = mockFacility
    dispatch(getFacility(data))
}
