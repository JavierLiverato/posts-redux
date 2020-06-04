import React, { Component } from "react";
import { APP_NAME } from '../../config/config';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Alert } from "rsuite";
import { Nav, Navbar, Icon } from 'rsuite';
import './header.css'

/**
 * Class Header ( component for page header, make a top navbar in application )
 *
 * @export redux connect
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
    onLogout = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
        Alert.info('Sesión finalizada exitosamente', 3000);
    };

    toggleSidenav = e => {
        this.props.toggleSidenav();
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <a href="#" className="navbar-brand logo">{ APP_NAME }</a>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav pullRight>
                        <Nav.Item icon={<Icon icon="sign-out" />} href='/' onClick={this.onLogout} className="header-logout">Salir</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        );
    }
}


Header.propTypes = {
    logoutUser: PropTypes.func.isRequired
};

export default connect(null, { logoutUser })(Header);
