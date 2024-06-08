import React from 'react';

const LogIn = () => {
    return (
        <div>
            <h2>Login</h2>
            <form id="logIn" action="/logIn" method="POST">
                <input id="user" name="user" placeholder="user" type="text"></input>
                <input id="pass" name="pass" placeholder="password" type="text"></input>
                <button id="submit" type="submit">Log in!</button>
            </form>
        </div>
    );
};

export default LogInModal;