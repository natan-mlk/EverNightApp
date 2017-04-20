import WeaponsListJson from '../data/treasures.json'


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
