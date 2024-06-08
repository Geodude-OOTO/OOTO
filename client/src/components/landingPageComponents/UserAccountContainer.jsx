import React, { useState } from 'react';
import SignUp from './SignUp';
import Modal from 'react-modal';

const UserAccount = () => {

    //logic for opening and closing signUp modal:
const [modalOpen, setOpen] = useState(false);
function handleCloseModal() {
    setOpen(false);
  };

//click handler for sign up button to open modal:
const signUpClickHandler = (event) => {
    event.preventDefault();
    setOpen(true);
};


    return (
        <div>
            <h2>Login</h2>
            <form id="logIn" action="/user/login" method="POST">
                <input id="user" name="user" placeholder="user" type="text"></input>
                <input id="pass" name="pass" placeholder="password" type="text"></input>
                <button id="submit" type="submit">Log in!</button>
            </form>
             <p>Don't have an account yet?</p> <button onClick={signUpClickHandler}>sign up!</button>
            {modalOpen && (
                <Modal isOpen={modalOpen}
                shouldCloseOnEsc={true}
                className='overlay'
                onRequestClose={handleCloseModal}
                shouldCloseOnOverlayClick={true}
            >
                    <SignUp/>
                </Modal> 
            )}
        </div>

    )
};
export default UserAccount;