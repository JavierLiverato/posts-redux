import { GET_POSTS, SUCCESS_STORE_POST, SUCCESS_DELETE_POST } from '../actions/types';

const initialState = {
    posts: []
};

/**
 * GET_POSTS ( set server response message after succesfull get posts )
 *
 * @export function
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns {state, Posts array}
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...initialState,
                posts: action.payload,
                gotPosts: true
            };
        case SUCCESS_STORE_POST:
            return {
                ...initialState,
                savedPost: true
            };
        case SUCCESS_DELETE_POST:
            return {
                ...initialState,
                deletedPost: true
            };
        default:
            return state;
    }
}
