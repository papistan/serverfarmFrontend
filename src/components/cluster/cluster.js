import React from 'react';
import Node from '../node/node';
import './cluster.css';

const Cluster = props => (
  <div className="server-canvas-container">
    <h2>Server Canvas</h2>
    <div className="servers-container">
      {props.nodes.map((node, index) => (
        <Node key={index} node={node} />
      ))}
    </div>
  </div>
);

export default Cluster;

