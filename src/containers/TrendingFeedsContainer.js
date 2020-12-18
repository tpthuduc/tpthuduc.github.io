// @flow

import React from "react";

import { connect } from "react-redux";

import { fetchNewsList } from '../actions/TrendingFeedsAction';
import TrendingFeedsPage from "../pages/TrendingFeedsPage";


function mapStateToProps({trendingFeedsReducer, authReducers}) {
    return {
        list: trendingFeedsReducer.list,
        page: trendingFeedsReducer.page,
        hasMore: trendingFeedsReducer.hasMore,
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

export const TrendingFeeds = connect(
    mapStateToProps
)(TrendingFeedsPage)