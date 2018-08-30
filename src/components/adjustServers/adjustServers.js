import React from 'react';
import { connect } from 'react-redux';
import ModifyServerButton from '../modifyServerButton/modifyServerButton';
import { addServer, subtractServer } from '../../actions';
import './adjustServers.css';

const AdjustServers = props => (
  <div className="adjust-server-container">
    <ModifyServerButton modification="add" callback={props.addServer} />
    <ModifyServerButton
      modification="subtract"
      callback={props.subtractServer}
    />
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    addServer: () => dispatch(addServer()),
    subtractServer: () => dispatch(subtractServer())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdjustServers);
