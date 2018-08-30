import React from 'react';
import AdjustServers from '../adjustServers/adjustServers';
import AdjustApps from '../adjustApps/adjustApps';
import './controlPanel.css';

const ControlPanel = () => (
  <div className="control-panel-container">
    <AdjustServers />
    <AdjustApps />
  </div>
);

export default ControlPanel;
