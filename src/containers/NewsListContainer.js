import React from "react";

import { connect } from "react-redux";

import { fetchNewsList } from '../actions/NewsAction';
import Home from "../components/v2/HomePage.react";


function mapStateToProps({newsReducers}) {
    return {
        list: newsReducers.list,
        page: newsReducers.page,
        hasMore: newsReducers.hasMore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchNewsList: (loadMore) => {
            dispatch(fetchNewsList(loadMore));
        }
    }
}

export const HomePage = connect(
    mapStateToProps
)(Home)