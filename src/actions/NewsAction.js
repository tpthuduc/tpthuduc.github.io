import * as types from '../constants/ActionTypes'
export function showNewsDetail(id) {
    return {
        types: types.SHOW_NEWS_DETAIL,
        id
    }
}