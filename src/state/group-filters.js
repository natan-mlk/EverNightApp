const SET_FILTER_NAME = 'group-filters/SET_FILTER_NAME'
const UNSET_FILTER_NAME = 'group-filters/UNSET_FILTER_NAME'

export const setFilterName = name => ({
  type: SET_FILTER_NAME,
  filterName: name
})

export const unsetFilterName = filterName => ({
  type: UNSET_FILTER_NAME,
  filterName
})

const initialState = {
  activeFilterNames: []
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    // Number of cases should be equal to number of action types
    case SET_FILTER_NAME:
      return {
        ...state,
        activeFilterNames: state.activeFilterNames.filter(
          filterName => {
            const prefix = action.filterName.split('_')[0]
            return !filterName.includes(prefix)
          }
        ).concat(action.filterName)
      }
    case UNSET_FILTER_NAME:
      return {
        ...state,
        activeFilterNames: state.activeFilterNames.filter(
          filterName => filterName !== action.filterName
        )
      }
    default:
      return state
  }
}