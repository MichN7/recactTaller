import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Routes from './routes'

import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AppBar
          title="Menú"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Routes />
      </div>
    );
  }
}

export default App;
