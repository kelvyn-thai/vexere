import * as React from 'react';
import { Table } from 'react-bootstrap';
import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";

class AdminList extends React.Component<any, any>{
    state = {users: []};

    async fetchData() {
        let self = this;
        Axios.post(`${URL_SERVER_STATIC}/api/user/find-user`, {conditions: { role: "admin"}}, AXIOS_CONFIG).then(function(res) {
            self.setState({users: res.data.payload});
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, index) => 
                        <tr key={user._id}>
                            <td>{index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}

export default AdminList;