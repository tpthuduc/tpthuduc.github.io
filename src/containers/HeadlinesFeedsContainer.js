// @flow


import React from "react";

import { connect } from "react-redux";

import { fetchNewsList } from '../actions/HeadlinesFeedsAction';
import HeadlinesFeedsPage from "../pages/HeadlinesFeedsPage";


function mapStateToProps({headlinesFeedsReducer}) {
    return {
        list: headlinesFeedsReducer.list,
        page: headlinesFeedsReducer.page,
        hasMore: headlinesFeedsReducer.hasMore
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