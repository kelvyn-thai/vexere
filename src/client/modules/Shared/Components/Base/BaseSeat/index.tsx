import * as React from 'react';
import './index.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';



const bookedSeat = require('./lying-seat-gray-2.svg');
const emptySeat = require('./lying-seat-white-2.svg');
const choosenSeat = require('./lying-seat-green-2.svg');
const driverSeat = require('./steering-wheel.svg');


function LinkWithTooltip(props) {
    const { id, children, href, tooltip, _onChangeStatus } = props;
    let status = "";
    switch (tooltip['status']) {
        case "empty":
            {
                status = "Còn trống"
                break;
            }
        case "booked":
            {
                status = "Đã đặt";
                break;
            }
        case "chosen":
            {
                status = "Đang chọn";
                break;
            }
        default:
            break;
    }

    return (
        <OverlayTrigger
            overlay={
                <Tooltip id={id}>
                    <p>Giá vé: {tooltip['price']}</p>
                    <p>Tình trạng: {status}</p>
                    <p>Số ghê: {tooltip['seat_number']}</p>
                </Tooltip>
            }
            placement="top"
            delayShow={300}
            delayHide={150}
        >
            <a href={href} onClick={_onChangeStatus}>{children}</a>
        </OverlayTrigger>
    );
}


export default class BaseSeat extends React.Component<any, any>{

    _onChangeStatus = (e) => {
        e.preventDefault();
        const { ticket, busId, changeStatusTicket, bookedTicket, unbookedTicket } = this.props;
        const { status } = ticket;

        switch (status) {
            case "empty":
                {
                    ticket.status = "chosen";
                    const payload = {
                        busId,
                        ticket
                    }
                    changeStatusTicket(payload);
                    bookedTicket(payload);
                    break;
                }
            case "chosen":
                {
                    ticket.status = "empty";
                    const payload = {
                        busId,
                        ticket
                    }
                    changeStatusTicket(payload);
                    unbookedTicket(payload);
                    break;
                }
            default:
                break;
        }


    }

    render() {
        const { status, seat_number } = this.props.ticket;
        let seat = null;
        switch (status) {
            case "booked":
                {
                    seat = <img src={bookedSeat} alt="" />;
                    break;
                }
            case "empty":
                {
                    seat = <img src={emptySeat} alt="" />;
                    break;
                }
            case "chosen":
                {
                    seat = <img src={choosenSeat} alt="" />;
                    break;
                }
            case "driver":
                {
                    seat = <img src={driverSeat} alt="" />;
                    break;
                }
            default:
                break;
        }
        return (
            <div className="seat-on-bus" id={seat_number}>
                <LinkWithTooltip _onChangeStatus={this._onChangeStatus} children={seat} tooltip={this.props.ticket} href="" id={seat_number} />
            </div>
        )
    }
}