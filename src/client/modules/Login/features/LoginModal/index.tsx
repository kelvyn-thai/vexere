import * as  React from 'react';
import { Button, Modal } from 'react-bootstrap';
import LoginComponent from "Login/index";


export default class BaseModalLogin extends React.Component<any ,any> {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
  
      return (
        <div>
          
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>

          </Button>

          <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="modal-login-container">
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginComponent />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
