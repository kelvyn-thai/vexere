import * as React from 'react';
import { Table } from 'react-bootstrap';
import Axios from "axios";
import { URL_SERVER_STATIC, AXIOS_CONFIG } from "Shared/Constant";

class ManagerList extends React.Component<any, any>{
    state = {users: []};

    async fetchData() {
        let self = this;
        Axios.post(`${URL_SERVER_STATIC}/api/user/find-user`, {conditions: { role: "manager"}}, AXIOS_CONFIG).then(function(res) {
            self.setState({users: res.data.payload});
        });
    }
    
    async makeCustomer(uid) {
        let self = this;
        Axios.post(`${URL_SERVER_STATIC}/api/user/change-role`, { _id: uid, role: 'customer'}, AXIOS_CONFIG).then((res) => {
            self.fetchData();
        });
    }
    
    async makeAdmin(uid) {
        let self = this;
        Axios.post(`${URL_SERVER_STATIC}/api/user/change-role`, { _id: uid, role: 'admin'}, AXIOS_CONFIG).then((res) => {
            self.fetchData();
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, index) => 
                        <tr key={user._id}>
                            <td>{index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td><button onClick={() => this.makeCustomer(user._id)}>Make Customer</button></td>
                            <td><button onClick={() => this.makeAdmin(user._id)}>Make Admin</button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ManagerList;