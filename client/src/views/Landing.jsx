import React from 'react';
import LogIn from '../components/logIn.jsx'; // i changed the file name to capitalize it, but it causes errors when i try to import, not sure why?
import SignUp from '../components/SignUp.jsx';

// create click handler for sign up button to open modal:

const Landing = () => {
    //this returns the login field
    return (
        <div>
             <LogIn></LogIn>
             <p>Don't have an account yet?</p> <button>sign up!</button>
        </div>

    )
}