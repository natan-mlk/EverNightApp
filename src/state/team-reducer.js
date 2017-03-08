import Heroes from '../data/team.json'
import Others from '../data/others.json'


const InitialState = {
  Heroes : Heroes,
  Others : Others
}


export default (state = InitialState, action = {}) => {
  switch (action.type) {

    default:
      return state
  }
}
