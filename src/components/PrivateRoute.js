import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import { API_ENDPOINT } from '../config/config';
import SideNav from "./SideNav/SideNav";
import Header from "./Header/Header";
import setAuthToken from "../utils/setAuthToken";

/**
 * PrivateRoute function (Intercepts all private routes with token verification service consumption,
 * on success and valid response, return a React Fragment with component and sidenav,
 * on fail, return a login redirect, on loading return a centered spinner)
 *
 * @export function
 * @param {Component} Component
 * @param {String} roleNames
 * @param {String} location
 * @returns React.Fragment, Redirect
 */
export default function PrivateRoute(Component, roleNames, location) {
    return class extends React.Component {
        state = {
            loading: true,
            isAuthenticated: false,
        }

        async componentDidMount() {
            let headers = {'Authorization': localStorage.getItem('jwtToken')}
            if (roleNames) headers['rolenames'] = roleNames
            await axios.get(`${API_ENDPOINT}/auth/refresh`,{headers})
                .then(response => {
                    setAuthToken(response.data.result.token);
                    this.setState({
                        loading: false,
                        isAuthenticated: true,
                    });
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        isAuthenticated: false,
                    });
                });
        }

        render() {
            if (this.state.loading) {
                return (
                    <React.Fragment>
                        <div className="spinner-border cst-spinner" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </React.Fragment>
                )
            }
            if (!this.state.isAuthenticated) {
                return <Redirect to="/logout" />;
            }
            return (
                <React.Fragment>
                    <SideNav location={location} className="col" />
                    <div className="page-container">
                        <Header {...this.props} />
                        <Component {...this.props} />
                    </div>
                </React.Fragment>
            );
        }
    }
}