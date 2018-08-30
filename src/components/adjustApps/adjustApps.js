import React from 'react';
import ModifyAppButton from '../modifyAppButton/modifyAppButton';

const Apps = ['Hadoop', 'Rails', 'Chronos', 'Storm', 'Spark'];

const mapApps = apps => {
  return apps.map(app => {
    return (
      <div className={`app-button ${app}`}>
        <div className="">
          <p>{app}</p>
          <ModifyAppButton modification="subtract-app" callback={null} app={''} />
          <ModifyAppButton modification="add-app" callback={null} app={app} />
        </div>
      </div>
    );
  });
};

const AdjustApps = props => {
  return <div className="apps-container">{mapApps(Apps)}</div>;
};

export default AdjustApps;
