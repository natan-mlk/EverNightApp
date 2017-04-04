import WeaponsListJson from '../data/weapons.json'


//Action creator
//none needed

const InitialState = {
  WeaponsList : WeaponsListJson,
}


export default (state = InitialState, action = {}) => {
  switch (action.type) {

    default:
      return state
  }
}
