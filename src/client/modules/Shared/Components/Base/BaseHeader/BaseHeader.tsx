import * as React from "react";
import { Navbar } from "react-bootstrap";
import HeaderLinks from "BaseComponent/BaseHeader/BaseHeaderLinks";

export default class Header extends React.Component<any ,any> {

 
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <HeaderLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
