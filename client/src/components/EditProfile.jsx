import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBiography = this.onChangeBiography.bind(this);
    this.onChangeFacebook = this.onChangeFacebook.bind(this);
    this.onChangeTwitter = this.onChangeTwitter.bind(this);
    this.onChangeGoogleplus = this.onChangeGoogleplus.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      biography: "",
      facebook: "",
      twitter: "",
      googleplus: ""
    };
  }
  onChangeBiography(e) {
    this.setState({
      biography: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeFacebook(e) {
    this.setState({
      facebook: e.target.value
    });
  }
  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeGoogleplus(e) {
    this.setState({
      googleplus: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangeTwitter(e) {
    this.setState({
      twitter: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const id = this.props.profile._id;
    const serverport = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      biography: this.state.biography,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      googleplus: this.state.googleplus
    };
    const url = `http://localhost:4000/serverport/${id}/update`;
    axios.put(url, serverport).then(res => console.log(res.data));
  }
  render() {
    const { profile } = this.props;
    return (
      <Row style={{ paddingBottom: '10px' }}>
        <Col xs="12">
          <div style={{
                paddingBottom:'50px',
                fontStyle: "italic"
              }}>
            <h2
              style={{
                paddingBottom:'10px',
                fontWeight: "bold"
              }}
            >
              General
            </h2>
            <div 
            style={{
              paddingBottom:'10px',
              fontWeight: "bold",
              backgroundColor:"alice blue"
            }}>
              your profile is 75% complete
              <ProgressBar style={{
                  height: '30px',
                  borderRadius:"14px"
                }}bsStyle="success" now={75} />
            </div>
          </div>
          <h4
              style={{
                fontWeight: "bold",
                paddingBottom:'20px'
              }}
            >
              General settings
            </h4>
          <Form>
            <FormGroup row>
              <Label className='text-allign'
               for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input 
                style={{
                  backgroundColor: "aliceblue"
                }}
                
                  type="email"
                  name="email"
                  value={this.state.email}
                  id="exampleEmail"
                  placeholder={profile.email}
                  onChange={e => this.onChangeEmail(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-allign'
               for="examplefname" sm={2}>
                First name
              </Label>
              <Col sm={10}>
                <Input
                style={{
                  backgroundColor: "aliceblue"
                }}
                  type="text"
                  name="text"
                  value={this.state.firstname}
                  id="text"
                  placeholder={profile.firstname}
                  onChange={e => this.onChangeFirstName(e)}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-allign'
               for="example lname" sm={2}>
                Last name
              </Label>
              <Col sm={10}>
                <Input
                style={{
                  paddingBottom:'10px',
                  backgroundColor: "aliceblue"
                }}
                  type="text"
                  name="text"
                  value={this.state.lastname}
                  id="text"
                  placeholder={profile.lastname}
                  onChange={e => this.onChangeLastName(e)}
                />
              </Col>
            </FormGroup>
            <h4
              style={{
                paddingBottom:'20px',
                fontWeight: "bold"
              }}
            >
              About me
            </h4>

            <FormGroup row>
              <Label className='text-allign'
               for="exampleSelectMulti" sm={2}>
                Biography
              </Label>
              <Col sm={10}>
                <Input
                style={{
                  paddingBottom:'20px',
                  backgroundColor: "aliceblue",
                  height:"200px",
                  width:"440px"
                }}
                  type="textarea"
                  name="biography"
                  value={this.state.biography}
                  id="biography"
                  placeholder={profile.biography}
                  multiple
                  onChange={e => this.onChangeBiography(e)}
                />
              </Col>
            </FormGroup>
            <h4
              style={{
                fontWeight: "bold",
                paddingBottom:'20px'
              }}
            >
              Social media
            </h4>
            <FormGroup row>
              <Label className='text-allign'
               for="twitter" sm={2}>
                Twitter
              </Label>
              <Col sm={10}>
                <Input
                style={{
                  backgroundColor: "aliceblue"
                }}
                  type="text"
                  value={this.state.twitter}
                  name="text"
                  id="twitter"
                  placeholder={profile.twitter}
                  onChange={e => this.onChangeTwitter(e)}
                />
              </Col>
            </FormGroup>
            
            <FormGroup row>
              <Label className='text-allign'
               for="facebook" sm={2}>
                Facebook
              </Label>
              <Col sm={10}>
                <Input
                style={{
                  backgroundColor: "aliceblue"
                }}
                  type="text"
                  name="text"
                  value={this.state.facebook}
                  onChange={e => this.onChangeFacebook(e)}
                  id="facebook"
                  placeholder={profile.facebook}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label className='text-allign'
               for="googleplus" sm={2}>
                Google+
              </Label>
              <Col sm={10}>
                <Input
                style={{
                  backgroundColor: "aliceblue"
                }}
                  type="text"
                  name="text"
                  value={this.state.googleplus}
                  id="googleplus"
                  onChange={e => this.onChangeGoogleplus(e)}
                  placeholder={profile.googleplus}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button
                  style={{
                    position: "relative",
                    left: "368px",
                    backgroundColor: "red"
                  }}
                  onClick={e => this.onSubmit(e)}
                >
                  SAVE
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default EditProfile;
