import { SUCCESS_STORE_USER } from '../actions/types';

const initialState = {

};

/**
 * SUCCESS_STORE_USER ( set server response message after succesfull store user )
 *
 * @export function
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns {state}
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SUCCESS_STORE_USER:
            return {
                ...initialState,
                savedUser: true
            };
        default:
            return state;
    }
}
