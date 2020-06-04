import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

// Actions to be tested
import { loginUser, logoutUser } from '../../actions/authActions';
import { TEST_USERNAME, TEST_PASSWORD } from '../../config/test-conf';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store;

describe('POST loginUser request action', () => {
    beforeEach( async () => {
        store = mockStore({});
    });

    afterEach(() => {
        store.clearActions()
    })

    it('Should return a logged in user', async () => {
        let userData = {
            email: TEST_USERNAME,
            password: TEST_PASSWORD
        };

        await store.dispatch(loginUser(null, userData)).then(() => {
            console.log('>>>>>>>>>>>>>>>>', store.getActions()[0], TEST_USERNAME, TEST_PASSWORD)
            //when the action haven't a middleware (is public route), the action position is 0 ( SET_CURRENT_USER in this case )
            expect(store.getActions()[0]['payload']['user']).toBeDefined()
            expect(store.getActions()[0]['payload']['exp']).toBeDefined()
        });
    })
})

describe('POST loginUser with fake data request action', () => {
    beforeEach( async () => {
        store = mockStore({});
    });

    afterEach(() => {
        store.clearActions()
    })

    it('Should return a undefined user', async () => {
        let userData = {
            email: 'fake_username',
            password: 'fake_password'
        };

        await store.dispatch(loginUser(userData)).then(() => {
            //when the action haven't a middleware (is public route), the action position is 0 ( SET_CURRENT_USER in this case )
            expect(store.getActions()[0]['payload']['success']).toEqual(false)
            expect(store.getActions()[0]['payload']['msg']).toBeDefined()
        });
    })
})

describe('POST logoutUser request action', () => {
    beforeEach( async () => {
        store = mockStore({});
    });
    
    afterEach(() => {
        store.clearActions()
    })
    
    it('Should return a success logout response', async () => {
        await store.dispatch(logoutUser()).then(() => {
            //when the action haven't a middleware (is public route), the action position is 0 ( SET_CURRENT_USER in this case )
            expect(store.getActions()[0]['payload']).toBeDefined()
            expect(store.getActions()[0]['payload']['user']).toBeUndefined()
        });
    })
})

