import { combineReducers } from 'redux';
import trendingFeedsReducer from './trendingFeedsReducer';
import headlinesFeedsReducer from './headlinesFeedsReducer';
import authReducers from './authReducers';

const rootReducer = combineReducers({
    trendingFeedsReducer,
    headlinesFeedsReducer,
    authReducers
});

export default rootReducer;