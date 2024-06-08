import React, { useState, useCallback, useEffect } from "react";
 

const SignUp = () => {
    return (
      <div>
        <h2>Sign Up</h2>
        {/* <button onClick={handleCloseModal}>close</button> */}
        <div>This is the sign up modal</div>
        <form id="signup" action="user/register" method="POST">
            <input id="user" name="user" placeholder="user" type="text"></input>
            <br></br>
            <input id="email" name="email" placeholder="email address" type="text"></input>
            <br></br>
            <input id="pass" name="pass" placeholder="pass" type="text"></input>
            <br></br>
            <button id="submit" type="submit">Sign Up!</button>
        </form>
      </div>
    )
};

export default SignUp;
