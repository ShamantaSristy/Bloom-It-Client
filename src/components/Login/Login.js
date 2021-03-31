import firebase from "firebase/app";
import "firebase/auth";
import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import firebaseConfig from "./firebase.config";
import { UserContext } from "../Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './Login';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div>
            <Button onClick={handleGoogleSignIn} variant="contained"><FontAwesomeIcon className="icon" icon={faGoogle} /> Continue with Google</Button>
        </div>
    );
};

export default Login;