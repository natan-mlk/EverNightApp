import {createStore, combineReducers} from 'redux'
import teamReducer from './state/team-reducer'
import weaponsReducer from './state/weapon-reducer'


const AllReducers = combineReducers({
  myTeam: teamReducer,
  counterValueStore: teamReducer,
  weapons: weaponsReducer
})


const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store