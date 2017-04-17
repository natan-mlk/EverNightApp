import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './components/css/styles.css'

import App from './components/app'
import HomeView from './components/home-view'
import Missions from './components/missions'
import TeamView from './components/team-view'
import Treasure from './components/treasury/treasury'

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeView}/>
          <Route path="team-view.js" component={TeamView}/>
          <Route path="missions.js" component={Missions}/>
          <Route path="treasury.js" component={Treasure}/>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);

