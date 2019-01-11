import * as React from 'react';
import withBookTicket from './withBookTicket';
import SeatChosen from './features/SeatChosen';
import MethodMovement from './features/MethodMovement';
import Information from './features/Information';


class BusItemTabsBookTicket extends React.Component<any, any>{

    _onPaymentTicketsBooked = async (e) => {
        const { ticketBooked, arrival, depature } = this.props.ticket.data;

        if (ticketBooked.length <= 0) {
            alert('Vui lòng chọn ít nhất 1 vé!')
        }
        else if (depature.place === "") {
            alert('Vui lòng chọn điểm khởi hành');
        }
        else if (arrival.place === "") {
            alert('Vui lòng chọn điểm kết thúc');
        }
        else {
            const {brand, from, to, time_start, time_end} =  this.props.data;
            
            const { ticketBooked } = this.props.ticket['data'];

            const route = {from, to};

            ticketBooked.map( ticket => {
                ticket.arrival = arrival;
                ticket.depature = depature;
                ticket.brand = brand;
                ticket.route = route;
                ticket.time = {time_start, time_end};
                return ticket;
            });

            await this.props.onChangeRoute(route);
            await this.props.onChangeBrand(brand);
            await this.props.onChangeData(ticketBooked);
            this.props.history.replace('payment');
        }

    }

    render() {
        const {
            dataLogin, data, ticket,
            onChangeStatusTicket, onBookedTicket, onUnBookedTicket, onChangeDepature, onChangeArrival } = this.props;

        const { data: ticketData } = ticket;
        return (
            <div className="bus-item-tabs-details-book-ticket">
                <div className="bus-item-tabs-details-book-ticket-title">
                    <h6>1 - CHỌN CHỖ </h6>
                    <h6>2 - CHỌN ĐIỂM ĐI/ĐIỂM ĐẾN</h6>
                    <h6>3 - THÔNG TIN KHÁCH HÀNG</h6>
                </div>
                <div className="bus-item-tabs-details-book-ticket-content">
                    <SeatChosen
                        busId={data['_id']}
                        seats={data['tickets']}
                        onBookedTicket={onBookedTicket}
                        onUnBookedTicket={onUnBookedTicket}
                        onChangeStatusTicket={onChangeStatusTicket}
                    />
                    <MethodMovement
                        id={data['_id']}
                        depature={data['depature']}
                        arrival={data['arrival']}
                        ticket={ticket['data']}
                        onChangeDepature={onChangeDepature}
                        onChangeArrival={onChangeArrival}
                    />
                    <Information data={dataLogin} />
                </div>
                <div className="bus-item-tabs-details-book-ticket-footer">
                    <div className="bus-item-tabs-details-book-ticket-footer-col-1">
                        <div>
                            <span>Số ghế:</span>
                            <span style={{ fontWeight: 'bold', textAlign: 'right' }}>{ticketData['totalTicketBooked']}</span>
                        </div>
                        <div>
                            <span>Tổng tiền:</span>
                            <span style={{ fontWeight: 'bold', color: 'red', textAlign: 'right' }}>{ticketData['totalPrice']}</span>
                        </div>
                    </div>
                    <div className="bus-item-tabs-details-book-ticket-footer-col-2">
                        <div>
                            <span>Điểm đi:</span>
                            <span className="right-column">{ticketData['depature']['place']}</span>
                        </div>
                        <div>
                            <span>Điểm đến:</span>
                            <span className="right-column">{ticketData['arrival']['place']}</span>
                        </div>
                    </div>
                    <div className="bus-item-tabs-details-book-ticket-footer-col-3">
                        <button className="btn-payment" onClick={this._onPaymentTicketsBooked}>Thanh toán</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withBookTicket(BusItemTabsBookTicket);