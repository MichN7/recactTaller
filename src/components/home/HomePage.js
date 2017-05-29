import React,{Component} from 'react'
import User from '../Login/User'

class HomePage extends Component {
  render(){
    return(
      <div>
        <h1>Home</h1>
        <User />
      </div>
    );
  }
}

export default HomePage;
