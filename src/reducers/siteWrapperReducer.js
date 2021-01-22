import { RECEIVE_BRAND_INFO, RECEIVE_SITE_VISIBILITY } from "actions/SiteWrapperAction";

const initalState = {
    showFooter: true,
    showHeader: true,
    brandLogo: null,
    branding: process.env.LOCAL_BRANDING,
    subBranding: process.env.LOCAL_SUB_BRANDING,
    shouldFetchRemoteInfo : process.env.FETCH_REMOTE_BRANDING,
    isFetching: false
}

export default function siteWrapperReducer(state = initalState, action) {
    const data = action.data;
    switch (action.type) {
        case RECEIVE_BRAND_INFO:
            return {
                ...state,
                branding: data && data.branding ? data.branding : state.branding,
                subBranding: data && data.subBranding? data.subBranding : state.subBranding
            }
        case RECEIVE_SITE_VISIBILITY:
            return {
                ...state,
                showHeader: action.showHeader || state.showHeader,
                showFooter: action.showFooter || state.showFooter,
            }

        default:
            return state;

    }
}