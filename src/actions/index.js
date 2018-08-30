export const addApp = app => dispatch => {
  dispatch({
    type: 'ADD_APP',
    payload: app
  });
};

export const addServer = () => dispatch => {
  dispatch({
    type: 'ADD_SERVER'
  });
};

export const subtractServer = () => dispatch => {
  dispatch({
    type: 'SUBTRACT_SERVER'
  });
};
