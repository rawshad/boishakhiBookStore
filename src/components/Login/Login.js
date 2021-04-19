import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation, useParams } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const {id} = useParams()
    const [error, setError] = useState('');

    let { from } = location.state || { from: { pathname: "/ " } };
    console.log(from.pathname);

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                const loggedInUser = {name: user.displayName, email: user.email, img: user.photoURL};
                console.log(loggedInUser);
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-primary m-5">Continue with Google</button>
        </div>
    );
};

export default Login;