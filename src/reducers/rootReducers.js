import { combineReducers } from 'redux';
import trendingFeedsReducer from './trendingFeedsReducer';
import headlinesFeedsReducer from './headlinesFeedsReducer';
import mapsReducer from './mapsReducer';
import authReducer from './authReducer';
import siteWrapperReducer from './siteWrapperReducer';

const rootReducer = combineReducers({
    trendingFeedsReducer,
    headlinesFeedsReducer,
    mapsReducer,
    authReducer,
    siteWrapperReducer
});

export default rootReducer;