import Heroes from '../data/team.json'
import Others from '../data/others.json'


//Action creator
export const change = (value) => ({
  type: 'counter/CHANGE',
  value : 20
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
        counterValue: state.counterValue + action.value
      }
    default:
      return state
  }
}
