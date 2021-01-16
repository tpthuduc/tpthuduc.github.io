// @flow

import { connect } from "react-redux";

import { fetchNewsList } from '../actions/HeadlinesFeedsAction';
import HeadlinesFeedsPage from "../pages/HeadlinesFeedsPage";


function mapStateToProps({ headlinesFeedsReducer, authReducers }) {
    return {
        headlines: headlinesFeedsReducer,
        auth: authReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchNewsList: (loadMore) => {
            dispatch(fetchNewsList(loadMore));
        }
    }
}

export const HeadlinesFeeds = connect(
    mapStateToProps
)(HeadlinesFeedsPage)