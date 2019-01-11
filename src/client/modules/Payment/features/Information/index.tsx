import * as React from 'react';
import { convertTimeStampToString } from "Shared/Library/date";

class Information extends React.Component<any, any>{

    render() {
        const { ticketData: ticket, loginData: user } = this.props;
        return (
            <div className="payment-information">
                <span>
                    <p><strong>Họ tên:</strong> {user['name']}</p>
                </span>
                <span>
                    <p><strong>Điện thoại:</strong> {user['phone']}</p>
                </span>
                <span>
                    <p><strong>Email:</strong> {user['email']}</p>
                </span>
                <hr />
                <span>
                    <p><strong>Hãng xe:</strong> {ticket['brand'].name}</p>
                </span>
                <span>
                    <p><strong>Tuyến đường:</strong> {ticket['route'].from.name} đến {ticket['route'].to.name}</p>
                </span>
                <span>
                    <p><strong>Điểm đón:</strong> {ticket['depature'].place}</p>
                </span>
                <span>
                    <p><strong>Điểm trả:</strong> {ticket['arrival'].place}</p>
                </span>
                <span>
                    <p><strong>Giờ khởi hành:</strong> {convertTimeStampToString(ticket['depature'].time)}</p>
                </span>
                <span>
                    <p><strong>Số ghế:</strong> {ticket['ticketBooked'].map((ticket, index, arr) => index < arr.length - 1 ? `${ticket['seat_number']}, ` : `${ticket['seat_number']}`)}</p>
                </span>
                <span>
                    <p><strong>Số lượng chỗ:</strong> {ticket['totalTicketBooked']}</p>
                </span>
                <span>
                    <p><strong>Bạn có mã giảm giá? </strong></p>
                </span>
                <span className="total-price">
                    <h6><strong>Tổng tiền: </strong> {ticket['totalPrice']}</h6>
                </span>
            </div>
        )
    }
}

export default Information;