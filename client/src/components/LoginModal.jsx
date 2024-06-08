import React, { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";

const LogInModal = () => {
    return (
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Log-in Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Sign Up</h2>
        <button onClick={closeModal}>close</button>
        <div>This is the sign up modal</div>
        <form id="logIn" action="/logIn" method="POST">
            <input id="user" name="user" placeholder="user" type="text"></input>
            <br></br>
            <input id="pass" name="pass" placeholder="password" type="text"></input>
            <br></br>
            <button id="submit" type="submit">Log in!</button>
        </form>
      </Modal>
    )
};

export default LogInModal;