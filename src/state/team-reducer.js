import Heroes from '../data/team.json'
import Others from '../data/others.json'


const InitialState = {
  Heroes : Heroes,
  Others : Others,
  counterValue: 10
}

//Action creator
export const change = () => ({
  type: 'counter/CHANGE',
  kkk : 40
})

export default (state = InitialState, action = {}) => {
  switch (action.type) {
    case 'counter/CHANGE':
      return {
        ...state,
        counterValue: state.counterValue + action.kkk
      }
    default:
      return state
  }
}
