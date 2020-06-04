import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logoutUser } from "../../actions/authActions";

import { Alert } from "rsuite";

/**
 * Logout Component (calls to server to request logout, 
 * after this, set tokens, user data, and headers to null,
 * finally, redirect to login page)
 *
 * @export Class Component
 * @class Logout
 * @extends {Component}
 * @return Redux connect
 */
export class Logout extends Component {

    constructor(props) {
        super(props);

        this.setLogout()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (!!nextProps.errorReducer && !!nextProps.errorReducer.message) {
            Alert.error(nextProps.errorReducer.message, 3000);
        }else if (nextProps.authReducer.isAuthenticated === false) {
            Alert.success('Desconectado', 3000);
        }
    }

    setLogout = () => {
        this.props.logoutUser(this.props.history);
    };

    render() {
        return (
            <div>
                Signing out ...
            </div>
        )
    }
}

Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    authReducer: PropTypes.object.isRequired,
    errorReducer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
    errorReducer: state.errorReducer
})

export default connect(mapStateToProps, {logoutUser})(Logout)
