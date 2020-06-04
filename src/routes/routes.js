import React from 'react';

import { BrowserRouter, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Login from "../views/auth/Login";
import Logout from "../views/auth/Logout";

import Home from '../views/dashboard/Home';
import Welcome from '../views/dashboard/Welcome';

import Posts from '../views/posts/Index';
import NewPost from '../views/posts/Create';

import NewUser from '../views/users/Create';

import PrivateRoute from "../components/PrivateRoute";

let history = createBrowserHistory();

/**
 * Browser Router (export a browser router with respective routes,
 * PrivateRoute middleware params(param1: Component, param2: 'accepted roles separated with colon eg. "Admin, Guest"')
 * can you send "" in param2 for accept all loggedIn users)
 *
 * @export class
 * @class Routes
 * @extends {React.Component}
 */
export default class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Router history = {history}>
                    <Route path = "/" component = {Welcome} exact></Route>
                    <Route path = "/login" component = {Login} exact></Route>
                    <Route path = "/logout" component = {Logout} exact></Route>
                    <Route path = "/register" component = {NewUser} exact></Route>

                    <Route path = "/home" component = {PrivateRoute(Home)} exact></Route>
                    <Route path = "/posts" component = {PrivateRoute(Posts)} exact></Route>
                    <Route path = "/posts/new" component = {PrivateRoute(NewPost)} exact></Route>
                </Router>
            </BrowserRouter>
        )
    }
}
