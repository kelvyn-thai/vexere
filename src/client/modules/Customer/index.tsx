import * as React from "react";
import Header from 'BaseComponent/BaseHeader/BaseHeader';
import Footer from 'BaseComponent/BaseFooter';
import { Tab, Row, Col, Nav, NavItem } from "react-bootstrap";
import Dashboard from "./features/Dashboard";
import Profile from "./features/Profile";
import withAuthenticated from "Shared/Route/withAuthenticated";
import './index.scss';
import TicketsBooked from "./features/TicketsBooked";
import WishBuses from "./features/WishBuses";
import TicketDestroyed from "./features/TicketsDestroyed";

class Customer extends React.Component<any, any> {
  render() {
    const { data } = this.props.login;
    return (
      <div className="customer-container">
        <Header />
        <Tab.Container id="customer-body" defaultActiveKey="1" >
          <Row>
            <Col sm={2}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="1">Bảng điều khiển</NavItem>
                <NavItem eventKey="2">Hồ sơ</NavItem>
                <NavItem eventKey="3">Danh sách vé đã đặt</NavItem>
                <NavItem eventKey="4">Danh sách vé đã hủy</NavItem>
                <NavItem eventKey="5">Danh sách tuyến yêu thích</NavItem>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="1">
                  <Dashboard />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <TicketsBooked ticketsBooked={data['tickets_booked']} />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <TicketDestroyed ticketDestroyed={data['tickets_destroyed']}/>
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <WishBuses wishBuses={data['wish_bus']}/>
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

export default withAuthenticated(Customer);