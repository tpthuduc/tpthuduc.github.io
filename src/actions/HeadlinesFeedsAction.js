import { dispatch } from "react-redux";

import * as types from '../constants/ActionTypes';

import { apiGet } from "../util/ApiUtil";


export const REQUEST_NEWS_RELOAD = "REQUEST_NEWS_RELOAD_HEADLINES";
export const RECEIVE_NEWS_RELOAD = "RECEIVE_NEWS_RELOAD_HEADLINES";

export const REQUEST_NEWS_LOAD_MORE = "REQUEST_NEWS_LOAD_MORE_HEADLINES";
export const RECEIVE_NEWS_LOAD_MORE = "RECEIVE_NEWS_LOAD_MORE_HEADLINES";


function requestNewsListReload() {
    return {
        type: REQUEST_NEWS_RELOAD
    }
}

function requestNewsListLoadMore() {
    return {
        type: REQUEST_NEWS_LOAD_MORE
    }
}

function receiveNewsListReload(list = [], statusCode, message) {
    return {
        type: RECEIVE_NEWS_RELOAD,
        list,
        statusCode,
        message
    }
}

function receiveNewsListLoadMore(page = 1, list = [], statusCode, message) {
    return {
        type: RECEIVE_NEWS_LOAD_MORE,
        page,
        list,
        statusCode,
        message
    }
}

export function loadNewsDetail(id) {
    return {
        type: types.SHOW_NEWS_DETAIL,
        id
    }
}

async function dispatchFetchData(dispatch, page) {
    // mark as refreshing
    dispatch(requestNewsListReload());
    const isLoadMore = page && page != 0;
    page = (Number(page || 0) || 0) + 1;
    let response = await apiGet("/news/feed/similarity?page=" + page);

    // retry one more time
    if (!response.isSuccess) {
        response = await apiGet("/news/feed/similarity?page=" + page);
    }

    if (!isLoadMore) {
        dispatch(receiveNewsListReload(response.data, response.statusCode, response.message));
    } else {
        dispatch(receiveNewsListLoadMore(page, response.data, response.statusCode, response.message))
    }

}

export function fetchNewsList(page) {
    return dispatch => dispatchFetchData(dispatch, page);
}

