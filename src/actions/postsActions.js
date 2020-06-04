import axios from 'axios';
import { API_ENDPOINT, defaultResponses } from "../config/config";
import { GET_POSTS, SUCCESS_STORE_POST, SUCCESS_DELETE_POST, GET_ERRORS } from "./types";

 /**
 * Get all or query filtered user posts
 *
 * @method GET
 * @param {*} query
 */
export const getPosts = (query = null) => async(dispatch) => {
    const url = `${API_ENDPOINT}/posts/` + (query ? `?${query}` : ``);
    await axios.get(url)
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data.result.posts
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: !!err.response
                ? err.response.data.result
                : {message: defaultResponses.noResponseFromApi}
            })
        });
};


 /**
 * Store user post
 *
 * @method POST
 * @param {*} query
 */
export const storePost = (history, data) => async(dispatch) => {
    await axios.post(API_ENDPOINT + '/posts/', data)
        .then(res => {
            const { message } = res.data.result;
            alert(message)
            dispatch({type: SUCCESS_STORE_POST});
            if (history) history.push({pathname: '/posts', state: {message: 'Bienvenido'}})
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: !!err.response
                ? err.response.data.result
                : {message: defaultResponses.noResponseFromApi}
            })
        });
};

 /**
 * delete user post
 *
 * @method DELETE
 * @param {*} query
 */
export const deletePost = (id) => async(dispatch) => {
    await axios.delete(API_ENDPOINT + '/posts/' + id)
        .then(res => {
            const { message } = res.data.result;
            alert(message)
            dispatch({type: SUCCESS_DELETE_POST});
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: !!err.response
                ? err.response.data.result
                : {message: defaultResponses.noResponseFromApi}
            })
        });
};

