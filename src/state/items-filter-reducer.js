// ACTION TYPES (there may be more than one)
const SET_FILTER_NAME = 'item-filters/SET_FILTER_NAME'
const UNSET_FILTER_NAME = 'item-filters/UNSET_FILTER_NAME'

// ACTION CREATORS (there may be more than one; one for each action type)
export const setFilterName = name => ({
  type: SET_FILTER_NAME,
  filterName: name
})

export const unsetFilterName = filterName => ({
  type: UNSET_FILTER_NAME,
  filterName
})

// INITIAL VALUE
const initialState = {
  activeFilterNames: []
}

// REDUCER

export default (state = initialState, action = {}) => {
  switch(action.type) {
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