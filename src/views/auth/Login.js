import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { loginUser } from "../../actions/authActions";

import CardBody from '../../components/CardBody/CardBody';
import InputForm from '../../components/InputForm/InputForm';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

import SimpleReactValidator from 'simple-react-validator';
import { reactValidatorOptions } from '../../helpers/simpleReactValidator';
import { Alert } from "rsuite";

/**
 * Login Component ( full view Login component, render a login
 * form and make a post request for user verification  )
 *
 * @export Class Component
 * @class Login
 * @extends {Component}
 * @returns Redux connect
 */
export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.loginValidator = new SimpleReactValidator(reactValidatorOptions);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authReducer.isAuthenticated) {
            Alert.success('Inicio de sesión exitosa', 3000);
        } else {
            if (!!nextProps.errorReducer && !!nextProps.errorReducer.msg) {
                Alert.error(nextProps.errorReducer.msg, 3000);
            }
        }
    }

    onChangeCustomInput = () => e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    setLogin = (e) => {
        e.preventDefault();
        if (this.loginValidator.allValid()) {
            const {username, password} = this.state;
            let userData = {
                email: username,
                password
            };
            this.props.loginUser(this.props.history, userData);
        } else {
            this.loginValidator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <CardBody>
                <form action="" id="login-validation"
                    className="col-md-4 col-sm-5 col-xs-11 col-lg-4  center-margin"
                    onSubmit={this.setLogin}>

                    <InputForm
                        placeholder={"Email"}
                        icon={"icon-user"}
                        type={"email"}
                        id="username"
                        onChange={this.onChangeCustomInput()}
                        value={this.state.username}
                        validator={this.loginValidator}
                        validateOptions={'required|email'}
                    />
                    <InputForm
                        placeholder={"Contraseña"}
                        icon={"email"}
                        type={"password"}
                        id="password"
                        onChange={this.onChangeCustomInput()}
                        value={this.state.password}
                        validator={this.loginValidator}
                        validateOptions={'required'}
                    />
                    <PrimaryButton
                        color={"light"}
                        txtBtn={"Ingresar"}
                        sizeWidth={"15rem"}>
                    </PrimaryButton>
                </form>
            </CardBody>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    authReducer: PropTypes.object.isRequired,
    errorReducer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
    errorReducer: state.errorReducer
})

export default connect(mapStateToProps,{loginUser})(Login)
