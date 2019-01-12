import * as React from 'react';
import { Table } from 'react-bootstrap';
import { convertTimeStampToString } from "Library/date";

class TicketDestroyed extends React.Component<any, any>{
    render() {
        const { ticketDestroyed: tickets } = this.props;
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Hãng xe</th>
                        <th>Tuyến xe</th>
                        <th>Số ghế</th>
                        <th>Thời gian hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map( (ticket, index) =>
                        <tr key={ticket['id']}>
                            <td>{index}</td>
                            <td>{ticket['brand'].name}</td>
                            <td>{ticket['route'].from['name']} -> {ticket['route'].to['name']}</td>
                            <td>{ticket.seat_number}</td>
                            <td>{convertTimeStampToString(ticket['time_destroyed'])}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}


export default TicketDestroyed;