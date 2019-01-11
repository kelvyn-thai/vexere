import * as React from 'react';
import { Table } from 'react-bootstrap';

class WishBuses extends React.Component<any, any> {
    render() {
        const { wishBuses: buses } = this.props;
        return (
            <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                {buses.map( (bus, index) =>
                    <tr key={bus['id']}>
                        <td>{index}</td>
                        <td>{bus['id']}</td>
                    </tr>
                )}
            </tbody>
        </Table>
        )
    }
}


export default WishBuses;