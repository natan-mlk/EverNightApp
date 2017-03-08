import {createStore, combineReducers} from 'redux'
import othersReducer from './state/others-state'


const reducer = combineReducers({
  othersRed: othersReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store