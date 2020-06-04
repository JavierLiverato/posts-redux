import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SimpleReactValidator from 'simple-react-validator';

import CardBody from '../../components/CardBody/CardBody';
import InputForm from '../../components/InputForm/InputForm';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

import { storeUser } from "../../actions/usersActions";
import { reactValidatorOptions } from '../../helpers/simpleReactValidator';
import { APP_NAME } from '../../config/config';

/**
 * Users Component ( full view for register new user )
 *
 * @export Class Component
 * @class Users
 * @extends {Component}
 * @returns Redux connect
 */
export class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            password: ''
        };

        this.validator = new SimpleReactValidator(reactValidatorOptions);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.usersReducer.gotPosts) {
            //alert('asdasdasdas')
        } else {
            if (!!nextProps.errorReducer && nextProps.errorReducer.hasErrors) {
                const firstKey = Object.keys(nextProps.errorReducer.errors)[0];
                if (nextProps.errorReducer.errors)
                    alert(firstKey + ': ' + nextProps.errorReducer.errors[firstKey]);
            }
        }
    }

    onChangeCustomInput = () => e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    setRegister = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const { userName, email, password } = this.state;
            let data = {
                userName,
                email,
                password
            };
            this.props.storeUser(this.props.history, data);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <CardBody>
                <div className={this.props.className}>
                    <form action="" id="login-validation"
                        className="col-12 container-sm"
                        onSubmit={this.setRegister}>
                        <h2 className={'mb-5'}>{APP_NAME}</h2>
                        <InputForm
                            id="userName"
                            type={"text"}
                            placeholder={"Nombre de usuario"}
                            className="form-control large"
                            onChange={this.onChangeCustomInput()}
                            onKeyDown={'userName'}
                            value={this.state.userName}
                            validator={this.validator}
                            validateOptions={'required|min:3'}
                        />

                        <InputForm
                            id="email"
                            type={"text"}
                            placeholder={"Email"}
                            className="form-control large"
                            onChange={this.onChangeCustomInput()}
                            onKeyDown={'email'}
                            value={this.state.email}
                            validator={this.validator}
                            validateOptions={'required'}
                        />

                        <InputForm
                            id="password"
                            type={"text"}
                            placeholder={"Constraseña"}
                            className="form-control large"
                            onChange={this.onChangeCustomInput()}
                            onKeyDown={'password'}
                            value={this.state.password}
                            validator={this.validator}
                            validateOptions={'required|min:6'}
                        />

                        <PrimaryButton
                            txtBtn={"Guardar"}
                        >
                        </PrimaryButton>
                        <a href="/">ir al inicio</a>
                    </form>
                </div>
            </CardBody>
        )
    }
}

Users.propTypes = {
    storeUser: PropTypes.func.isRequired,
    usersReducer: PropTypes.object.isRequired,
    errorReducer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    usersReducer: state.usersReducer,
    errorReducer: state.errorReducer
})

const mapDispatchToProps = {
    storeUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
