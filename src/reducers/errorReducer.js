import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {};


/**
 * errorReducer (get errors, send errors or clear errors)
 *
 * @export function
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...initialState,
                errors: action.payload.errors,
                hasErrors: true
            };
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}
