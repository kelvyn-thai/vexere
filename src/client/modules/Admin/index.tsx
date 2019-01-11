import * as React from "react";
import Header from 'BaseComponent/BaseHeader/BaseHeader';
import Footer from 'BaseComponent/BaseFooter';
import { Tab, Row, Col, Nav, NavItem } from "react-bootstrap";
import Dashboard from "./features/Dashboard";
import Profile from "./features/Profile";
import withAdmin from "Shared/Route/withAdmin";
import './index.scss';
import CustomerList from "./features/CustomerList";
import ManagerList from "./features/ManagerList";
import AdminList from "./features/AdminList";

class Admin extends React.Component<any, any> {
  state = {item: "Customer"};
  customer;
  manager;
  admin;
  profile;
  dashboard;

  constructor(props) {
    super(props);
    this.customer = React.createRef();
    this.manager = React.createRef();
    this.admin = React.createRef();
    this.profile = React.createRef();
    this.dashboard = React.createRef();
  }l

  async updateChild() {
    this.customer.current.fetchData();
    this.manager.current.fetchData();
    this.admin.current.fetchData();
    //this.customer.current.fetchData();
    //this.customer.current.fetchData();
  }

  render() {
    const { data } = this.props.login;
    return (
      <div className="customer-container">
        <Header />
        <Tab.Container id="customer-body" defaultActiveKey="1" >
          <Row>
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem onClick={() => this.updateChild()} eventKey="1">Quản lý Customer</NavItem>
                <NavItem onClick={() => this.updateChild()} eventKey="2">Quản lý Manager</NavItem>
                <NavItem onClick={() => this.updateChild()} eventKey="3">Danh sách Admin</NavItem>
                <NavItem onClick={() => this.updateChild()} eventKey="4">Thông tin cá nhân</NavItem>
                <NavItem onClick={() => this.updateChild()} eventKey="5">Thống kê</NavItem>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="1">
                  <CustomerList ref={this.customer} />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <ManagerList ref={this.manager} />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <AdminList ref={this.admin} />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <Profile ref={this.profile} />
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <Dashboard ref={this.dashboard} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Footer />
      </div>
    )
  }
}

export default withAdmin(Admin);