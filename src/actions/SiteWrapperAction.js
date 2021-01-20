import { apiGet } from "../util/ApiUtil";


export const REQUEST_BRAND_INFO = "REQUEST_BRAND_INFO";
export const RECEIVE_BRAND_INFO = "RECEIVE_BRAND_INFO";
export const REQUEST_SITE_VISIBILITY = "REQUEST_SITE_VISIBILITY";
export const RECEIVE_SITE_VISIBILITY = "RECEIVE_SITE_VISIBILITY";

function requestBrandInfo() {
    return {
        type: REQUEST_BRAND_INFO
    }
}

function receiveBrandInfo(data = {}) {
    return {
        type: RECEIVE_BRAND_INFO,
        data
    }
}

function requestSiteVisibility() {
    return {
        type: REQUEST_SITE_VISIBILITY
    }
}

function receiveSiteVisibility(showHeader = true, showFooter = true) {
    return {
        type: RECEIVE_SITE_VISIBILITY,
        showHeader,
        showFooter
    }
}

export function getBrandInfo() {
    return dispatch => {
        dispatch(requestBrandInfo())
        return apiGet("/info").then(req => dispatch(receiveBrandInfo(req.data)));
    }
}

export function setSiteVisibility(showHeader = true, showFooter = true) {
    return dispatch => {
        return dispatch(receiveSiteVisibility(showFooter, showFooter));
    }
}