import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cluster from './components/cluster/cluster';
import ControlPanel from './components/controlPanel/controlPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlPanel />
        <Cluster nodes={this.props.servers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    servers: state.addAppReducer.servers
  };
};

export default connect(mapStateToProps)(App);
