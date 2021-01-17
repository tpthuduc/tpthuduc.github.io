import { loadApi, loadDefaultApi } from "../util/ApiUtil";


export const REQUEST_DATA_MAPS = "REQUEST_DATA_MAPS";
export const RECEIVE_DATA_MAPS = "RECEIVE_DATA_MAPS";

function requestDataMaps() {
    return {
        type: REQUEST_DATA_MAPS
    }
}

function receiveDataMaps(data = []) {
    return {
        type: RECEIVE_DATA_MAPS,
        data
    }
}



export function getDataMaps() {
    return dispatch => {
        dispatch(requestDataMaps())
        return loadDefaultApi("/api/statistics/map").then(req => dispatch(receiveDataMaps(req)));
    }
}

