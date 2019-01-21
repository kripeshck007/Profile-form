import React, { Component } from 'react';
import EditProfile from '../components/EditProfile';
import ShowProfile from '../components/ShowProfile';
import { Button } from 'reactstrap';
import axios from 'axios';

import { Row, Col, Container } from 'reactstrap';

class Profilecontainer extends Component {
  render() {
    const { serverports, onSelectUser, profile } = this.props;

    console.log('sss', profile);
    return (
      <Container>
        <Row>
          <Col xs="3">
            {serverports.map(child => (
              <Button value={child._id} onClick={e => onSelectUser(e)}>
                {child._id}
              </Button>
            ))}
          </Col>
          <Col xs="3">
            <ShowProfile profile={profile} />
          </Col>
          <Col xs="6">
            <EditProfile profile={profile} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profilecontainer;
