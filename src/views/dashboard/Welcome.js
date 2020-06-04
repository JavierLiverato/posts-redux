import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardBody from '../../components/CardBody/CardBody';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

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
                <h4>TEST APP</h4>
                <hr></hr>
                <PrimaryButton
                    color={"light"}
                    txtBtn={"Login"}
                    sizeWidth={"15rem"}
                    onPress={this.login}
                >
                </PrimaryButton>

                <PrimaryButton
                    color={"light"}
                    txtBtn={"Registro"}
                    sizeWidth={"15rem"}
                    onPress={this.register}
                >
                </PrimaryButton>
            </CardBody>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
