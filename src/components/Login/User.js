import React,{Component} from 'react'
import * as firebase from 'firebase'

class User extends Component{
  constructor() {
    super();
    this.state ={
      usuario:null
    }
  }
  componentWillMount(){
    let user = firebase.auth().currentUser;
    if(user){
      this.setState({usuario:user});
    }else{
      this.setState({usuario:"stranger"});
    }
  }
  render(){
    return(
      <div>
        <h1>Hola {this.state.usuario.displayName}</h1>
        <img src={this.state.usuario.photoURL}/>
      </div>
    );
  }
}

export default User;
