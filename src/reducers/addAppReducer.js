const data = {
  servers: [
    {},
    {
      app1: { symbol: 'Hd', title: 'Hadoop', started: Date.now },
      app2: { symbol: 'Ch', title: 'Chronos', started: Date.now }
    },
    {},
    {
      app1: { symbol: 'Hd', title: 'Hadoop', started: Date.now },
      app2: { symbol: 'Ch', title: 'Chronos', started: Date.now }
    },
    {
      app1: { symbol: 'Hd', title: 'Hadoop', started: Date.now },
      app2: { symbol: 'Ch', title: 'Chronos', started: Date.now }
    },
    {},
    {
      app1: { symbol: 'Hd', title: 'Hadoop', started: Date.now },
      app2: { symbol: 'Ch', title: 'Chronos', started: Date.now }
    },
    {
      app1: { symbol: 'Hd', title: 'Hadoop', started: Date.now },
      app2: { symbol: 'Ch', title: 'Chronos', started: Date.now }
    }
  ]
};

export default (state = data, action) => {
  switch (action.type) {
    case 'ADD_APP':
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
