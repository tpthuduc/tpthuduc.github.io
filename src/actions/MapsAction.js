import { apiGet } from "../util/ApiUtil";


export const REQUEST_DATA_MAPS = "REQUEST_DATA_MAPS";
export const RECEIVE_DATA_MAPS = "RECEIVE_DATA_MAPS";
export const SET_DATA_MARKERS = "SET_DATA_MARKERS";

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
        return apiGet("/api/statistics/map").then(req => dispatch(receiveDataMaps(req.data)));
    }
}

export function setMarkers(markers) {
    return dispatch => {
        dispatch(requestDataMaps());
        return dispatch(receiveDataMaps(markers));
    }
}

