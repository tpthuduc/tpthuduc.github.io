import { dispatch} from "react-redux";

import * as types from '../constants/ActionTypes';

import { loadApi, loadDefaultApi } from "../util/ApiUtil";


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

function receiveNewsListReload(list = []) {
    return {
        type: RECEIVE_NEWS_RELOAD,
        list
    }
}

function receiveNewsListLoadMore(list = [], page = 1) {
    return {
        type: RECEIVE_NEWS_LOAD_MORE,
        list,
        page
    }
}

export function loadNewsDetail(id) {
    return {
        type: types.SHOW_NEWS_DETAIL,
        id
    }
}

export function fetchNewsList(page) {
    if (!page|| page == 0) {
        return dispatch => {
            dispatch(requestNewsListReload())
            return loadDefaultApi("/news/feed/similarity").then(req => dispatch(receiveNewsListReload(req)));
        }
    } else {
        return dispatch => {
            dispatch(requestNewsListLoadMore())
            return loadDefaultApi("/news/feed/similarity?page="+(page+1)).then(req => dispatch(receiveNewsListLoadMore(req, page+1)));
        }
    }
}

