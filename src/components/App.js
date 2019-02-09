import React, { Component } from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import Button from './Button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
  };

  render() {
      let count = this.state;
    return (
        <div className={'body'}>
          <Header />
          <Sidebar />
          <Button content={"OSC"} count/>
          <Main count={this.state.count} />
        </div>
    );
  }
}

export default App;