import React from 'react'
import Navigation from './nav'

const App = (props) => (
  <div>
    <Navigation/>
    {props.children}
  </div>
)
export default App
