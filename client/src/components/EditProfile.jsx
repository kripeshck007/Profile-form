import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';
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
      firstname: '',
      lastname: '',
      email: '',
      biography: '',
      facebook: '',
      twitter: '',
      googleplus: ''
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
      <Row>
        <Col xs="12">
          <div>
            <ProgressBar primary now={75} />
          </div>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
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
              <Label for="examplePassword" sm={2}>
                first name
              </Label>
              <Col sm={10}>
                <Input
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
              <Label for="examplePassword" sm={2}>
                last name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="text"
                  value={this.state.lastname}
                  id="text"
                  placeholder={profile.lastname}
                  onChange={e => this.onChangeLastName(e)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleSelectMulti" sm={2}>
                Biography
              </Label>
              <Col sm={10}>
                <Input
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
            <FormGroup row>
              <Label for="twitter" sm={2}>
                twitter
              </Label>
              <Col sm={10}>
                <Input
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
              <Label for="facebook" sm={2}>
                facebook
              </Label>
              <Col sm={10}>
                <Input
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
              <Label for="googleplus" sm={2}>
                google plus
              </Label>
              <Col sm={10}>
                <Input
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
                    position: 'relative',
                    left: '368px',
                    backgroundColor: 'red'
                  }}
                  onClick={e => this.onSubmit(e)}>
                  Save
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
