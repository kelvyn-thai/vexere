import * as React from 'react';
import { Alert } from 'react-bootstrap';
import './index.scss';
import withInternationalCards from './withInternationalCards';

const visaCard = require('./visa.svg');
const jcbCard = require('./jcb.svg');
const masterCard = require('./master-card.svg');

class InternationalsCard extends React.Component<any, any>{

    constructor(props) {
        super(props);
        this.state = {
            isAgreeWithPolicy: false,
            isAgreeWithRegulation: false,
            isAgreeWithSurcharge: false
        }
    }

    componentDidUpdate() {
        const { isFetched, data } = this.props.payment;

        if(isFetched) {
            alert("Thanh toán thành công!");
            this.props.history.replace('/');
        }

    }

    _onChangeConditions = (e) => this.setState({ [e.target.name]: e.target.checked })

    _onClickPayment = async (e) => {
        e.preventDefault();
        const { isAgreeWithPolicy, isAgreeWithRegulation, isAgreeWithSurcharge, } = this.state;
        if(isAgreeWithPolicy && isAgreeWithRegulation && isAgreeWithSurcharge){
            
            const {  paymentTicketsBooked, ticket } = this.props;

            const { data } = ticket;

            await paymentTicketsBooked(data['ticketBooked']);
        }
        else{ 
            alert('Vui lòng xác nhận những điều khoản');
        }
    }

    render() {
        const { isAgreeWithPolicy, isAgreeWithRegulation, isAgreeWithSurcharge, } = this.state;
        return (
            <div className="international-cards">
                <div className="international-cards-image">
                    <img src={visaCard} alt="visa" />
                    <img src={jcbCard} alt="jcb" />
                    <img src={masterCard} alt="master-card" />
                </div>
                <p>Trên thẻ của bạn phải có các ký hiệu Visa, Master hay JCB để thanh toán được bằng hình thức này</p>
                <p>1. Bạn sẽ được chuyển hướng về cổng thanh toán Cybersource để hoàn tất thanh toán.</p>
                <p>2. Nhập thông tin trên thẻ</p>
                <p>3. Sau khi thanh toán, bạn sẽ nhận được mã vé điện tử qua tin nhắn và Email thay cho vé giấy để lên xe.</p>
                <hr />
                <p><input type="checkbox" name='isAgreeWithSurcharge' checked={isAgreeWithSurcharge} onChange={this._onChangeConditions} /> Tôi đồng ý thanh toán thêm phụ thu khi có giá vé chính thức từ nhà xe.</p>
                <p><input type="checkbox" name='isAgreeWithPolicy' checked={isAgreeWithPolicy} onChange={this._onChangeConditions} /> Tôi đã đọc và đồng ý với Chính sách hủy vé khi mua vé này. Và hiểu rằng vé mua vào dịp lễ, Tết sẽ không được hủy, đổi, trả theo chính sách của nhà xe.</p>
                <p><input type="checkbox" name='isAgreeWithRegulation' checked={isAgreeWithRegulation} onChange={this._onChangeConditions} /> Tôi đồng ý với Quy chế của VeXeRe.com</p>
                <div className="finish-payment">
                    <button onClick={this._onClickPayment}>Hoàn tất</button>
                </div>
                <Alert bsStyle="warning">
                    <p>Gọi ngay hotline <b>1900 969681</b> hoặc gửi email về <b>cs@vexere.com</b> nếu bạn gặp vấn đề trong quá trình thanh toán.</p>
                </Alert>
            </div>
        )
    }
}

export default withInternationalCards(InternationalsCard);