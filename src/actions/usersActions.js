import axios from 'axios';
import { API_ENDPOINT, defaultResponses } from "../config/config";
import { SUCCESS_STORE_USER, GET_ERRORS } from "./types";

 /**
 * Register user
 *
 * @method POST
 * @param {*} query
 */
export const storeUser = (history, data) => async(dispatch) => {
    await axios.post(API_ENDPOINT + '/users/', data)
        .then(res => {
            const { message } = res.data.result;
            alert(message)
            dispatch({type: SUCCESS_STORE_USER});
            if (history) history.push({pathname: '/', state: {message: 'Bienvenido'}})
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

