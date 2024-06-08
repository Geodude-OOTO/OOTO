import React from "react";
import UserAccount from "./UserAccountContainer";
import logo from '../../assets/logo.svg';

const NavBar = () => {
    return (
        <div>
            <img src={logo}/>
            <UserAccount/>
        </div>
    )
};

export default NavBar;