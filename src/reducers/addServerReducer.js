export default (state, action) => {
  switch (action.type) {
    case 'ADD_SERVER':
      return {
        ...state,
        servers: [
          ...state.servers,
          { }
        ]
      };
    case 'SUBTRACT_SERVER':
      return {
        servers: action.payload
      };
    default:
      return state;
  }
};
