import React, { useState, useCallback, useEffect } from "react";

const SignUp = () => {
    return (
      <div>
        <h2>Sign Up</h2>
        {/* <button onClick={handleCloseModal}>close</button> */}
        <div>This is the sign up modal</div>
        <form id="signup" action="/api/user/register" method="POST">
            <input id="name" name="name" placeholder="name" type="text"></input>
            <br></br>
            <input id="email" name="email" placeholder="email address" type="text"></input>
            <br></br>
            <input id="password" name="password" placeholder="password" type="text"></input>
            <br></br>
            <button id="submit" type="submit">Sign Up!</button>
        </form>
      </div>
    )
};

export default SignUp;
