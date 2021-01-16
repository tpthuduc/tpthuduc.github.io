import { combineReducers } from 'redux';
import trendingFeedsReducer from './trendingFeedsReducer';
import headlinesFeedsReducer from './headlinesFeedsReducer';
import mapsReducer from './mapsReducer';
import authReducers from './authReducers';

const rootReducer = combineReducers({
    trendingFeedsReducer,
    headlinesFeedsReducer,
    mapsReducer,
    authReducers
});

export default rootReducer;