import { GET_ERRORS, CLEAR_ERRORS } from '../../actions/types';
import errorReducer from '../../reducers/errorReducer';

describe('errors Reducer GET_ERRORS', () => {
    it('Should return a payload with a object and errors array inside this', () => {
        let errors = {
            message: 'errors found',
            code: 404,
            errors: [{
                0: 'error number 1',
                1: 'error number 2'
            }]
        };
        const received = errorReducer(undefined, {
            type: GET_ERRORS,
            payload: errors
        });
        const expected = errors;
        expect(received).toEqual(expected);
    })
})

describe('errors Reducer CLEAR_ERRORS', () => {
    it('Should return Null', () => {
        const received = errorReducer(undefined, {
            type: CLEAR_ERRORS
        });
        const expected = {};

        expect(received).toEqual(expected);
    })
})