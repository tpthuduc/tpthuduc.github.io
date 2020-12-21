// @flow

import { connect } from "react-redux";

import { fetchNewsList } from '../actions/HeadlinesFeedsAction';
import HeadlinesFeedsPage from "../pages/HeadlinesFeedsPage";


function mapStateToProps({headlinesFeedsReducer, authReducers}) {
    return {
        list: headlinesFeedsReducer.list,
        page: headlinesFeedsReducer.page,
        hasMore: headlinesFeedsReducer.hasMore,
        ...authReducers
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