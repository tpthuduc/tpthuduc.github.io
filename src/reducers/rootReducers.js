import { combineReducers} from 'redux';
import newsReducers from './newsReducers';
import authReducers from './authReducers';

const rootReducer = combineReducers({
    newsReducers,
    authReducers
});

export default rootReducer;