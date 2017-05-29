import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      open: false
    }
  }
  handleToggle = () =>this.setState({open:!this.state.open});
  handleClose = () =>this.setState({open:false});
  render(){
    return(
      <div>
        <AppBar
          title="Menú"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/">
            <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to="about">
            <MenuItem onTouchTap={this.handleClose}>Nosotros</MenuItem>
          </Link>
          <Link to="login">
            <MenuItem onTouchTap={this.handleClose}>Login</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;
