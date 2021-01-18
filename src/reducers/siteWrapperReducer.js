import { RECEIVE_BRAND_INFO, RECEIVE_SITE_VISIBILITY } from "actions/SiteWrapperAction";

const initalState = {
    showFooter: true,
    showHeader: true,
    brandLogo: null,
    brandName: "Tin địa phương",
    subBrandName: "Quận 9",
    isFetching: false
}

export default function siteWrapperReducer(state = initalState, action) {

    switch (action.type) {
        case RECEIVE_BRAND_INFO:
            return {
                ...state,
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