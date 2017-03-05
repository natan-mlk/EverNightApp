import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Navigation from './components/nav';
import TeamView from './components/team-view';
import Treasure from './components/treasure';


ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Navigation}>
        <Route path="team-view.js" component={TeamView} />
        <Route path="treasure.js" component={Treasure} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);