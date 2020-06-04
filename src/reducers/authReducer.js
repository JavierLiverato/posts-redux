import isEmpty from '../utils/isEmpty';
import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {}
};

/**
 * AuthReducer (set loggedIn user or void data)
 *
 * @export function
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns {state, boolean, user}
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}
