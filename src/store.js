import {createStore, combineReducers} from 'redux'
import teamReducer from './state/team-reducer'
import weaponsReducer from './state/weapon-reducer'
import groupFiltersReducer from './state/group-filters'
import weaponFiltersReducer from './state/items-filter-reducer'


const AllReducers = combineReducers({
  myTeam: teamReducer,
  counterValueStore: teamReducer,
  weapons: weaponsReducer,
  weaponsFilter: weaponFiltersReducer,
  groupFilters: groupFiltersReducer
})


const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store