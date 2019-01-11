import * as React from 'react';
import BaseSeat from 'BaseComponent/BaseSeat';

const whiteGuide = require('./assets/white.svg');
const greenGuide = require('./assets/green.svg');
const greyGuide = require('./assets/grey.svg');


class SeatChosen extends React.Component<any, any>{

    render() {
        const { seats,busId,  onBookedTicket, onUnBookedTicket, onChangeStatusTicket } = this.props;
        return (
            <div className="bus-item-tabs-details-book-ticket-content-col-1">
                <div className="seat-guide-row">
                    <div>
                        <img src={whiteGuide} alt="white guide" style={{ border: 'solid grey 1px' }} />
                        <span> Ghế trống</span>
                    </div>
                    <div>
                        <img src={greyGuide} alt="white guide" />
                        <span>Ghế đã đặt</span>
                    </div>
                    <div>
                        <img src={greenGuide} alt="white guide" />
                        <span>Đang chọn</span>
                    </div>
                </div>
                <div className="seat-bus">
                    {seats.map(seat => <BaseSeat
                        key={seat['seat_number']}
                        ticket={seat}
                        busId={busId}
                        bookedTicket={onBookedTicket}
                        unbookedTicket={onUnBookedTicket}
                        changeStatusTicket={onChangeStatusTicket}
                    />)
                    }
                </div>
            </div>
        )
    }
}

export default SeatChosen;