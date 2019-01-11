import * as React from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import UserCard from "BaseComponent/BaseUserCard";
import Button from "BaseComponent/BaseCustomButton";
import withProfile from "./withProfile";
import { convertTimeStampToDate } from "Library/date";
import BaseInputEmail from 'BaseComponent/BaseInputEmailUncontrolled';
import BaseInputAddress from 'BaseComponent/BaseInputAddressUncontrolled';
import BaseInputPhone from 'BaseComponent/BaseInputPhoneUncontrolled';
import BaseInputName from 'BaseComponent/BaseInputNameUncontrolled';
import BaseInputDoB from 'BaseComponent/BaseInputDoB';
import './index.scss';


const avatar = require("Assets/img/faces/face-3.jpg");

class UserProfile extends React.Component<any, any> {

  private refInputEmail: any = React.createRef();
  private refInputName: any = React.createRef();
  private refInputAddress: any = React.createRef();
  private refInputPhone: any = React.createRef();
  private refInputDoB: any = React.createRef();

  _onUpdateInformation = async (e) => {
    e.preventDefault();
    const name = this.refInputName.current._onGetValue();
    const address = this.refInputAddress.current._onGetValue();
    const phone = this.refInputPhone.current._onGetValue();
    const dob = this.refInputDoB.current._onGetValue();

    const payload = {
      name,
      address,
      phone,
      dob
    }
    await this.props.updateInformation(payload);
  }

  componentDidUpdate(prevProps) {

    const { login } = this.props;
    const { data } = login;
    const { isError, status, payload } = data;
    if (prevProps.login['msg'] === "Request update information" && login['msg'] === "Fetched update information") {
      if (isError) {
        if (status === 400) {
          payload.map(field => {
            switch (field['param']) {
              case "name":
                this.refInputName.current.showError(field['msg']);
                break;
              case "address":
                this.refInputAddress.current.showError(field['msg']);
                break;
              case "phone":
                this.refInputPhone.current.showError(field['msg']);
                break;
              case "dob":
                this.refInputDoB.current.showError(field['msg']);
                break;
              default:
                break;
            }
          })
        }
        else if(status === 404){
          console.log('authen fail!')
        }
      }
      else {
        alert('Update success!');
      }
    }
  }


  render() {
    const { email, name, address, phone, dob } = this.props.login['data'];
    
    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <div className="profile-input">
                <BaseInputEmail ref={this.refInputEmail} defaultValue={email} isDisabled={true}/>
                <BaseInputName ref={this.refInputName} defaultValue={name}/>
                <BaseInputAddress ref={this.refInputAddress} defaultValue={address}/>
                <BaseInputPhone ref={this.refInputPhone} defaultValue={phone}/>
                <BaseInputDoB ref={this.refInputDoB} defaultValue={new Date(dob)}/>
                <div className="btn-update">
                    <button onClick={this._onUpdateInformation}>Update</button>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name={name}
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default withProfile(UserProfile);