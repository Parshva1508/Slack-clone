import React, { Component } from 'react';
import { Sidebar, Maincontainer } from './';

class Slack extends Component {
  render() {
    return (
      <div id="slack">
        <Sidebar />
        <Maincontainer />
      </div>
    );
  }
}

export default Slack;
