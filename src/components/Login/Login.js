import React, {Component} from 'react'
import * as firebase from 'firebase'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Login extends Component {
 constructor(props){
   super(props);
 }
  loginGoogle = () => {
    const {history} = this.props;
    var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        history.push('/');
    // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render(){
    return(
      <div>
        <Paper style={style} zDepth={1} rounded={false}>
         <RaisedButton secondary={true} label="Login with Google" fullWidth={true} onClick={this.loginGoogle}/>
         <RaisedButton primary={true} label="Login with FB" fullWidth={true} />
        </Paper>
      </div>
    );
  }
}

var config = {
    apiKey: "AIzaSyBHf2eaX8xkk8bRRSYEI4pQROrHA7f4ylo",
    authDomain: "nevermind-e24fa.firebaseapp.com",
    databaseURL: "https://nevermind-e24fa.firebaseio.com",
    projectId: "nevermind-e24fa",
    storageBucket: "nevermind-e24fa.appspot.com",
    messagingSenderId: "578302107410"
  };

const firebaseApp = firebase.initializeApp(config);

export default Login;
