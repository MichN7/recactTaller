import React from 'react'
import {Switch, Route} from 'react-router-dom'

import HomePage from './components/home/HomePage'
import About from './components/about/About'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/about" component={About}/>
  </Switch>
);

export default Routes;
