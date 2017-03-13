import React from 'react';
import {Grid, Table} from 'react-bootstrap'
import {connect} from 'react-redux'

import FilterControls from './filter-controls'
import {setFilterName, unsetFilterName} from '../../state/items-filter-reducer'


const filters = {
  weapon_biala: weapon => weapon.weaponClass === 'Broń biała',
  weapon_zasiegowa: weapon => weapon.weaponClass === 'Broń dystansowa'
}


const WeaponList = (props) => {

  const {allWeapons, groupFilters, setFilter, unsetFilter} = props

  return (
    <Grid>
      <h3>Broń drużyny</h3>

      <FilterControls
        filters={groupFilters}
        availableFilterDefinitions={[
          {
            label: 'Broń biała',
            filterName: 'weapon_biala'
          },
          {
            label: 'Broń zasięgowa',
            filterName: 'weapon_zasiegowa'
          }
        ]}
        activateFilter={setFilter}
        deactivateFilter={unsetFilter}
      />


      <Table striped>
        <thead>
        <tr>
          <th>Rodzaj</th>
          <th>Broń</th>
          <th>Ile warta</th>
        </tr>
        </thead>


        <tbody>
        {allWeapons.filter(
          weapon => groupFilters.activeFilterNames.map(
            filterName => filters[filterName](weapon)
          ).every(
            item => item === true
          )
        ).map(
          (arg, index) => (
            <tr key={index}>
              <td>{arg.weaponClass}</td>
              <td>{arg.weapon}</td>
              <td>{arg.worth}</td>
            </tr>
          )
        )
        }
        <tr>
          <td> </td>
          <th>Łącznie</th>
          <td>{allWeapons.reduce(
            (a, b) => (a + parseInt(b.worth)), 0)}</td>
        </tr>

        </tbody>


      </Table>
    </Grid>
  )
}


export default connect(
  state => ({
    allWeapons: state.weapons.WeaponsList,
    groupFilters: state.groupFilters
  }),
  dispatch => ({
    setFilter: (filterName) => dispatch(setFilterName(filterName)),
    unsetFilter: (filterName) => dispatch(unsetFilterName(filterName))
  })
)(WeaponList)

