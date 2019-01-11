import * as React from 'react';
import { Table } from 'react-bootstrap';


export default class BusItemCancelPolicy extends React.Component<any ,any> {
    render() {
        const {cancellation_policy} = this.props;
        if(typeof cancellation_policy !== "undefined" && cancellation_policy.length > 0)
        {
            return (
                <div className="bus-items-cancel-policy">
                    <Table>
                        <thead>
                            <tr>
                                <td><b>Thời gian hủy</b></td>
                                <td><b>Phí hủy</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {cancellation_policy.map( (item, index) => 
                                <tr key={index}>
                                    <td>{item['time']}</td>
                                    <td>{item['fee']}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            )
        }
        return null;
    }
}