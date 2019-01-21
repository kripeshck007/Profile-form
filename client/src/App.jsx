import React, { Component } from 'react';
import Profilecontainer from './containers/Profilecontainer';
import axios from 'axios';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { serverports: [], profile: [] };
  }
  componentDidMount() {
    axios
      .get('http://localhost:4000/serverport')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onSelectUser = e => {
    const ID = e.target.value;
    const url = `http://localhost:4000/serverport/${ID}`;
    console.log('SSSs', ID);
    axios.get(url).then(response => {
      this.setState({ profile: response.data });
    });
  };

  render() {
    const { serverports, profile } = this.state;
    return (
      <div>
        <Profilecontainer
          onSelectUser={this.onSelectUser}
          serverports={serverports}
          profile={profile}
        />
      </div>
    );
  }
}

export default App;
