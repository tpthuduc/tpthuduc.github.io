import {SHOW_NEWS_DETAIL} from '../constants/ActionTypes'

const initalState = [{
    text: 'Ali App',
    marked: false,
    id: 0
}]

export default function reduceNews(state = initalState, action) {
    switch(action.type) {
        case SHOW_NEWS_DETAIL:
            default:
                return state;
    }
}