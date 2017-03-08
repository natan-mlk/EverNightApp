import OtherPeople from '../data/others.json'

const initialState = {
  moviesData: movies,
  tagsList: tagsList,
  customTags: [],
  query: ''
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'movies/tags/CUSTOM':
      return {
        ...state,
        customTags: [...state.customTags, action.value]
      }
    case 'movies/tags/RESET':
      return {
        ...state,
        customTags: initialState.customTags
      }
    case 'movies/search/QUERY':
      return {
        ...state,
        query: action.value,
        moviesData: initialState.moviesData
      }
    case 'movies/search/EXECUTE':
      return {
        ...state,
        moviesData: action.value
      }
    default:
      return state
  }
}

export default reducer