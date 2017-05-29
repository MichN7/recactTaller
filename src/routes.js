import React from 'react'
import {Switch, Route} from 'react-router-dom'

import HomePage from './components/home/HomePage'
import About from './components/about/About'
import Login from './components/Login/Login'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
  </Switch>
);

export default Routes;
