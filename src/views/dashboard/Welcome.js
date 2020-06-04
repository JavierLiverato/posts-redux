import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardBody from '../../components/CardBody/CardBody';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { APP_NAME } from '../../config/config';

/**
 * Welcome Component ( full view for public homePage )
 *
 * @export Class Component
 * @class Welcome
 * @extends {Component}
 * @returns Redux connect
 */
export class Welcome extends Component {

    constructor(props) {
        super(props);
    }

    login = (e) => {
        e.preventDefault();
        this.props.history.push('/login')
    }

    register = (e) => {
        e.preventDefault();
        this.props.history.push('/register')
    }

    render() {
        return (
            <CardBody>
                <div className={"col-md-4 col-sm-5 col-xs-11 col-lg-4 container-sm"}>
                    <h2 className={'mb-5'}>{APP_NAME}</h2>
                    <PrimaryButton
                        color={"light"}
                        txtBtn={"Ingresar"}
                        sizeWidth={"100%"}
                        onPress={this.login}
                    >
                    </PrimaryButton>
                    <PrimaryButton
                        color={"light"}
                        txtBtn={"Registrarme"}
                        sizeWidth={"100%"}
                        onPress={this.register}
                    >
                    </PrimaryButton>
                </div>
            </CardBody>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
