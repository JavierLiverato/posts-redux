import {combineReducers} from "redux/es/redux";
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    authReducer,
    errorReducer,
    postsReducer,
    usersReducer
});
