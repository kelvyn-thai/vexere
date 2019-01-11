import * as React from 'react';
import { Table } from 'react-bootstrap';
import { convertTimeStampToString } from "Library/date";
import {connect  } from "react-redux";
import { actionRequestDestroyTicketBooked } from './module/actions';

class TicketsBooked extends React.Component<any, any>{

    _onDestroyTicket = async (ticket, e) => {
        e.preventDefault();
        console.log('ticket', ticket)
        await this.props.destroyTicket({ticket})
    }
    render() {
        const { ticketsBooked: tickets } = this.props;
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Hãng xe</th>
                        <th>Tuyến xe</th>
                        <th>Thời gian</th>
                        <th>Ngày mua</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map( (ticket, index) =>
                        <tr key={ticket['id']}>
                            <td>{index}</td>
                            <td>{ticket['brand'].name}</td>
                            <td>{ticket['route'].from['name']} -> {ticket['route'].to['name']}</td>
                            <td>{convertTimeStampToString(ticket['time'].time_start)} -> {convertTimeStampToString(ticket['time'].time_end)}</td>
                            <td>{convertTimeStampToString(ticket['date_created'])}</td>
                            <td>
                                <a href="#" onClick={(e)=> this._onDestroyTicket(ticket, e)}>Hủy vé</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    destroyTicket: actionRequestDestroyTicketBooked
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsBooked);