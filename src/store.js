import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';


// export default function configureStore(initialState = {
//   servers: [{}, {}, {}, {}]
// }) {
const store = createStore(rootReducer);

export default store;
