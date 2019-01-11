import * as React from 'react';
import BaseInputEmail from 'BaseComponent/BaseInputEmail';
import BaseInputPassword from 'BaseComponent/BaseInputPassword';
import { MSG_VALIDATE_REQUEST_FAIL, MSG_AUTHENTICATED_FAIL, MSG_LOGIN_FAIL } from 'Shared/Constant';


class FormLogin extends React.Component<any, any>{

    private refInputEmail: any = React.createRef();
    private refInputPassword: any = React.createRef();

     _onSubmitLogin = async (e) => {
        const email = this.refInputEmail.current._onGetValue();
        const password = this.refInputPassword.current._onGetValue();
        const payload = {
            email,
            password
        }
        await this.props.loginRequest(payload);
        
    }

    componentDidUpdate() {
        const { location, history, login } = this.props;
        const { isAuthenticated,  isError, status, payload} = login.data;
        const { isFetched } = login;

        if(isFetched){
            if(isAuthenticated && !isError){
                const { search } = location;
                const searchParams = new URLSearchParams(search);
                const redirectUrl = searchParams.get('redirectUrl');
                if (redirectUrl !== null && redirectUrl !== "") {
                    history.replace(redirectUrl);
                }
                else {
                    history.replace('/');
                }
            }
            else {
                if(status === 400){
                    payload.map ( field => {
                        switch (field['param']) {
                            case "email":
                                this.refInputEmail.current.showError(field['msg']);
                                break;
                            case "password":
                                this.refInputPassword.current.showError(field['msg']);
                                break;    
                            default:
                                break;
                        }
                    })
                }
                else if(status === 404){
                    alert(MSG_LOGIN_FAIL);
                }   
            }
        }
    }

    render() {
        return (
            <>
                <h1>Đăng Nhập</h1>
                <BaseInputEmail ref={this.refInputEmail} />
                <BaseInputPassword ref={this.refInputPassword} />
                <div className="btn-login">
                    <button onClick={this._onSubmitLogin}>Login</button>
                </div>
                <div className="link-register">
                    <span>Chưa có tài khoản? <a href="/register">Đăng Kí</a> ngay!</span>
                </div>
            </>
        )
    }
}

export default FormLogin;