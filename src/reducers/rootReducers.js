import { combineReducers} from 'redux';
import trendingFeedsReducer from './trendingFeedsReducer';
import headlinesFeedsReducer from './headlinesFeedsReducer';

const rootReducer = combineReducers({
    trendingFeedsReducer,
    headlinesFeedsReducer,
});

export default rootReducer;