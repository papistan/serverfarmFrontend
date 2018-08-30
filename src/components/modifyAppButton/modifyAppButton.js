import React from 'react';
import './modifyAppButton.css';

const ModifyAppButton = props => {
  const { callback, modification, app } = props;
  return (
    <button
      className={`modify-app-button ${modification} ${app}`}
      onClick={callback}
    >
      {modification === 'add-app' ? '+' : '-'}
    </button>
  );
};

export default ModifyAppButton;
