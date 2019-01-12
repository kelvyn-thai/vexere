import * as React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import store from "Redux/store";
import Home from 'Home/index';
import Customer from 'Customer/index';
import Admin from '../Admin/index';
import Login from 'Login/features/LoginPage';
import Register from 'Register/index';
import Bus from "Bus/index";
import Payment from 'Payment/index';
import NotFound from 'NotFound/index';
import { actionRequestAuthenticate } from 'Login/module/actions';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "Assets/css/animate.min.css";
import "Assets/sass/light-bootstrap-dashboard.scss";
import "Assets/css/demo.css";
import "Assets/css/pe-icon-7-stroke.css";


import 'Shared/Sass/reset.scss';



store.dispatch(actionRequestAuthenticate());

export default class App extends React.Component<any, any> {
    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/find-bus" component={Bus} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/customer" component={Customer} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/payment" component={Payment} />
                        <Route exact path="/*" component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}