import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { API_ENDPOINT, defaultResponses } from "../config/config";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";

export /**
 * AuthAction loginUser ( set user credentials to server for login attempt )
 *
 * @method POST
 * @param {*} userData
 */
const loginUser = (history, userData) => async(dispatch) => {
    await axios.post(API_ENDPOINT + '/auth/login', userData)
        .then(res => {
            const { token } = res.data.result;
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            if (history) history.push({pathname: '/home', state: {message: 'Bienvenido'}})
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

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export /**
 * AuthAction logoutUser ( set token for close session, use history param for redirect to login page  )
 *
 * @method GET
 * @param {history} history
 */
const logoutUser = (history) => async (dispatch) => {
    await axios.get(API_ENDPOINT + '/auth/logout')
        .then(res => {
            console.log('ok')
        })
        .catch(err => {
            console.log(err)
        });
        setAuthToken(false);
        dispatch(setCurrentUser({}));
        if (history) history.push({pathname: '/login', state: {message: 'Sesión finalizada exitosamente'}})
};

