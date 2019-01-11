import * as React from 'react';
import { Table } from 'react-bootstrap';
import { convertTimeStampToHours } from "Library/date";


export default class BusItemPlan extends React.Component<any ,any> {
    render() {
        const { plan } = this.props;
        if(typeof plan !== "undefined" && plan.length > 0){
            return (
                <div className="bus-items-plan">
                     <Table>
                        <thead>
                            <tr>
                                <td><b>Thời gian đi (đến)</b></td>
                                <td><b>Điểm đi (đến)</b></td>
                                <td><b>Địa chỉ</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {plan.map( (item, index) => 
                                <tr key={index}>
                                    <td>{convertTimeStampToHours(item['time'])}</td>
                                    <td>{item['place']}</td>
                                    <td>{item['address']}</td>
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