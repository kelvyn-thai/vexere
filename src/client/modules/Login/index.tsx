import * as React from 'react';
import FormLogin from './features/FormLogin';
import FormLoginByNetworkSocial from './features/FormLoginByNetworkSocial';
import withLogin from './withLogin';
import './index.scss';

class LoginComponnent extends React.Component<any, any>{
    render() {
        return (
            <div className="login-frame">
                <div></div>
                <div className="left-frame">
                    <FormLogin {...this.props}/>
                </div>
                <div></div>
                <div className="right-frame">
                    <FormLoginByNetworkSocial {...this.props}/>
                </div>
            </div>
        )
    }
}

export default withLogin(LoginComponnent);     