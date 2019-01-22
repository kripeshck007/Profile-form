import React, { Component } from 'react';
import { Row, Col, Card, Container } from 'reactstrap';
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import './profile.css';
class ShowProfile extends Component {
  render() {
    const { profile } = this.props;
    console.log('SSSSSSSS', profile);
    return (
      <Row>
        <Col xs="12">
          <Row style={{ paddingBottom: '10px' }}>
            <Col xs="12">
              <Card>
                <Container style={{ textAlign: 'center' }}>
                  <img
                    style={{ padding: '10px' }}
                    src={profile.profileImageUrl}
                    height="100px"
                    width="100px"
                  />
                </Container>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12" style={{ paddingBottom: '10px' }}>
              <Card
                style={{
                  backgroundColor: 'aliceblue',
                  height: '135px',
                  padding: '17px'
                }}>
                <Container
                  style={{
                    backgroundColor: 'aliceblue',
                    height: '135px',
                    padding: '17px'
                  }}>
                  <span> level:5</span>
                  <span className="level-xp"> 500 xp</span>
                </Container>
                <ProgressBar now={10} />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card
                style={{
                  backgroundColor: 'aliceblue',
                  height: '200px'
                }}>
                <h4>About {profile.firstname}</h4>

                <p> {profile.biography}</p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card
                style={{
                  backgroundColor: 'aliceblue',
                  height: '150px'
                }}>
                <h4>Facts</h4>

                <p style=
                {{fontSize:16}}>
                registration :April 19 2013<br></br>
                Last seen    :june12 2014<br></br> 
                Rank         :Administrator</p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className="fa fa-save" />
            </Col>
            <Col />
            <Col />
            <Col />
          </Row>
        </Col>
      </Row>
      
    );
  }
}

export default ShowProfile;
