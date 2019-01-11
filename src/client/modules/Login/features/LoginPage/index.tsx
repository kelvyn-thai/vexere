import * as React from "react";
import Header from "BaseComponent/Header";
import Footer from "BaseComponent/Footer";
import LoginComponent from 'Login/index';

export default class LoginPage extends React.Component<any, any>{
    render() {
        return (
            <div className="login-page">
                <div className="container-fluid">
                    <Header />
                    <LoginComponent />
                    <Footer />
                </div>
            </div>)
    }
}