import React from 'react';
import './modifyServerButton.css';

const ModifyServerButton = props => {
  const { callback, modification } = props;
  return (
    <div className={` ${modification}-color`}>
      <button
        className={`modify-server-button ${modification}`}
        onClick={callback}
      >
        {modification === 'add' ? '+' : '-'}
      </button>
      {modification === 'add' ? 'Add server' : 'Destroy'}
    </div>
  );
};

export default ModifyServerButton;
