import axios from 'axios';
import { TOKEN_PREFIX } from '../config/config'

/**
 * setAuthToken constant function (verify if token exists and set this to axios Authorization header and localStorage Token,
 * else, remove axios authorization header and localStorage Token)
 *  
 * @export constant
 * @param {*} token
 * @returns boolean
 */
const setAuthToken = token => {
    if (token) {
        axios.defaults.headers['Authorization'] = TOKEN_PREFIX+token;
        localStorage.setItem('jwtToken', TOKEN_PREFIX+token);
    } else {
        delete axios.defaults.headers['Authorization'];
        localStorage.removeItem('jwtToken');
    }
};

export default setAuthToken;
