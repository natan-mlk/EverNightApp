import Heroes from '../data/team.json'
import Others from '../data/others.json'


const InitialState = {
  Heroes : Heroes,
  Others : Others,
  counterValue: 0
}


export default (state = InitialState, action = {}) => {
  switch (action.type) {

    default:
      return state
  }
}
