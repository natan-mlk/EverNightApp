import React from 'react'
import { Button } from 'react-bootstrap'

const FilterButton = ({
  filterName,
  activeFilterNames,
  activateFilter,
  deactivateFilter,
  children
}) => (
  <Button bsStyle={activeFilterNames.includes(filterName) ? 'success' : 'default'}
    onClick={activeFilterNames.includes(filterName) ? () => deactivateFilter(filterName) : () => activateFilter(filterName)}>
    {children}
  </Button>
);

export default FilterButton