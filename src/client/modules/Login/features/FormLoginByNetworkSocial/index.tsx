import * as React from 'react';
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { CLIENT_ID_GOOGLE, APP_ID_FACEBOOK } from 'Shared/Constant';


class FormLoginByNetworkSocial extends React.Component<any, any>{
    responseGoogle = (message: any) => {
        console.log(message);
    }

    responseFacebook = (message: any) => {
        console.log(message);
    }


    render() {
        return (
            <>
                <div className='btn-react-google-login'>
                    <GoogleLogin
                        clientId={CLIENT_ID_GOOGLE}
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />
                </div>
                <div className='btn-react-facebook-login'>
                    <FacebookLogin
                        appId={APP_ID_FACEBOOK}
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                    />
                </div>
            </>
        )
    }
}

export default FormLoginByNetworkSocial;