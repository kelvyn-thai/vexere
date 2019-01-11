import * as React from "react";
import Header from 'BaseComponent/BaseHeader/BaseHeader';
import Footer from 'BaseComponent/BaseFooter';
import { Tab, Row, Col, Nav, NavItem } from "react-bootstrap";
import Dashboard from "./features/Dashboard";
import Profile from "./features/Profile";
import withManager from "Shared/Route/withManager";
import './index.scss';

class Manager extends React.Component<any, any> {
  render() {
    const { data } = this.props.login;
    return (
      <div className="customer-container">
        <Header />
        <Tab.Container id="customer-body" defaultActiveKey="1" >
          <Row>
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="1">Quản lý tài khoản</NavItem>
                <NavItem eventKey="2">Thống kê</NavItem>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="1">
                  <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <Dashboard />
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

export default withManager(Manager);