import React from 'react';
import './node.css';

const Node = props => (
  <div>
    {props.node.symbol && (
      <div className={props.node.symbol}>
        <p className="symbol">{props.node.symbol}</p>
        <p className="title">{props.node.title}</p>
        <p className="time">Added {props.node.time} min ago</p>
      </div>
    )}
    {props.node.symbol === 'undefined' && <div className="server-node" />}
  </div>
);

export default Node;
