import Heroes from '../data/team.json'
import Others from '../data/others.json'


//Action creator
export const change = (val) => ({
  type: 'counter/CHANGE',
  val : 20
})

const InitialState = {
  Heroes : Heroes,
  Others : Others,
  counterValue: 0
}


export default (state = InitialState, action = {}) => {
  switch (action.type) {
    case 'counter/CHANGE':
      return {
        ...state,
        counterValue: state.counterValue + action.val
      }
    default:
      return state
  }
}
