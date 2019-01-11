import * as React from 'react';
import FormRegisterByNetworkSocial from './features/RegisterComponent/FormRegisterByNetworkSocial';
import FormRegister from "./features/RegisterComponent/FormRegister";
import withRegister from './withRegister';
import './index.scss';
import Header from "BaseComponent/Header";
import Footer from "BaseComponent/Footer";


class RegisterComponent extends React.Component<any, any>{
    render() {
        return (
            <div className="container-fluid"> 
                <Header />
                <div className="register-frame">
                    <div className="clrd"></div>
                    <div></div>
                    <FormRegister {...this.props}/>
                    <div></div>
                    <div className="right-frame">
                        <FormRegisterByNetworkSocial />
                    </div>
                    <div className="clrd"></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRegister(RegisterComponent);