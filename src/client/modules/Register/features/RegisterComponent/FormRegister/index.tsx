import * as React from 'react';
import BaseInputEmail from 'BaseComponent/BaseInputEmail';
import BaseInputPassword from 'BaseComponent/BaseInputPassword';
import BaseInputAddress from 'BaseComponent/BaseInputAddress';
import BaseInputPhone from 'BaseComponent/BaseInputPhone';
import BaseInputDoB from 'BaseComponent/BaseInputDoB';
import BaseInputName from 'BaseComponent/BaseInputName';



class FormRegister extends React.Component<any, any>{


    private refInputEmail: any = React.createRef();
    private refInputPassword: any = React.createRef();
    private refInputName: any = React.createRef();
    private refInputAddress: any = React.createRef();
    private refInputPhone: any = React.createRef();
    private refInputDoB: any = React.createRef();

    _onSubmitRegister = async (e) => {

        const email = this.refInputEmail.current._onGetValue();
        const password = this.refInputPassword.current._onGetValue();
        const name = this.refInputName.current._onGetValue();
        const address = this.refInputAddress.current._onGetValue();
        const phone = this.refInputPhone.current._onGetValue();
        const dob = this.refInputDoB.current._onGetValue();

        const payload = {
            email,
            password,
            name,
            address,
            phone,
            dob
        }
        await this.props.registerRequest(payload);
    }

    componentDidUpdate() {

        const { location, history, register } = this.props;
        const { isFetched, data } = register;
        const { isError, status, payload } = data;
        if (isFetched) {
            if (isError) {
                if (status === 400) {
                    payload.map(field => {
                        switch (field['param']) {
                            case "email":
                                this.refInputEmail.current.showError(field['msg']);
                                break;
                            case "password":
                                this.refInputPassword.current.showError(field['msg']);
                                break;
                            case "name":
                                this.refInputName.current.showError(field['msg']);
                                break;
                            case "address":
                                this.refInputAddress.current.showError(field['msg']);
                                break;
                            case "phone":
                                this.refInputPhone.current.showError(field['msg']);
                                break;
                            case "dob":
                                this.refInputDoB.current.showError(field['msg']);
                                break;
                            default:
                                break;
                        }
                    })
                }
            }
            else {
                const { search } = location;
                const searchParams = new URLSearchParams(search);
                const redirectUrl = searchParams.get('redirectUrl');
                if (redirectUrl !== null && redirectUrl !== "") {
                    history.replace(redirectUrl);
                }
                else {
                    history.replace('/login');
                }
            }
        }
    }


    render() {
        return (
            <div className="left-frame">
                <h1>Đăng Ký</h1>
                <BaseInputEmail ref={this.refInputEmail} />
                <BaseInputPassword ref={this.refInputPassword} />
                <BaseInputName ref={this.refInputName} />
                <BaseInputAddress ref={this.refInputAddress} />
                <BaseInputPhone ref={this.refInputPhone} />
                <BaseInputDoB ref={this.refInputDoB} />
                <div className="btn-register">
                    <button onClick={this._onSubmitRegister}>Register</button>
                </div>
                <div className="link-login">
                    <span>Đã có tài khoản? <a href="/login">Đăng Nhập</a> ngay!</span>
                </div>
            </div>
        )
    }
}

export default FormRegister;