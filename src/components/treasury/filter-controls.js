import React from 'react'
import FilterButton from './filter-button'

const FilterControls = ({
  filters,
  availableFilterDefinitions,
  activateFilter,
  deactivateFilter
}) => (
  <div>
    {availableFilterDefinitions.map(
        (definition, index) => (
          <FilterButton key={index}
            filterName={definition.filterName}
            activeFilterNames={filters.activeFilterNames}
            activateFilter={activateFilter}
            deactivateFilter={deactivateFilter}
          >
            {definition.label}
          </FilterButton>
        )
      )
    }
  </div>
)

export default FilterControls