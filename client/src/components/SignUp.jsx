import React, { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";

const SignUpModal = () => {
    return (
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Sign Up Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign Up</h2>
        <button onClick={closeModal}>close</button>
        <div>This is the sign up modal</div>
        <form id="signup" action="/signUp" method="POST">
            <input id="user" name="user" placeholder="user" type="text"></input>
            <br></br>
            <input id="email" name="email" placeholder="email address" type="text"></input>
            <br></br>
            <input id="pass" name="pass" placeholder="pass" type="text"></input>
            <br></br>
            <button id="submit" type="submit">Sign Up!</button>
        </form>
      </Modal>
    )
};

export default SignUpModal;
