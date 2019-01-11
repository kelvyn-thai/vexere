import * as React from 'react';
import { NavItem, Nav} from "react-bootstrap";
import withBaseHeaderLinks from './withBaseHeaderLinks';

class HeaderLinks extends React.Component<any, any> {

  async _handleSelect(key) {
    const { logout } = this.props;
    switch (key) {
      case 3:
        await logout();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Nav>
        </Nav>
        <Nav pullRight onSelect={key => this._handleSelect(key)}>
          <NavItem eventKey={1} href="/">
            Trang chủ
          </NavItem>
          <NavItem eventKey={1} href="/find-bus">
            Đặt vé
          </NavItem>
          <NavItem eventKey={3} href="">
            Đăng xuất
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default withBaseHeaderLinks(HeaderLinks);
