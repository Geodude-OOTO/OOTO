import React, { useState } from 'react';
import SignUp from './SignUp';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {

    const navigate = useNavigate();
    // STATE
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = {
            username,
            password
        };

        console.log('THIS IS THE FORM DATA FROM SUBMISSION ON SIGN UP', formData);

        // FORM SUBMISSION LOGIC
        fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form submission failed');
                }
                return response.json();
            })
            .then((data) => {
                if (data.success) {

                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 1000);
                } else {
                    console.error('Form submission failed:', data.message);
                }
            })
            .catch((error) => {
                console.error('Error during form submission:', error);
            });
    };

    // Logic for opening and closing signUp modal:
    const [modalOpen, setOpen] = useState(false);
    function handleCloseModal() {
        setOpen(false);
    };

    // Click handler for sign up button to open modal:
    const signUpClickHandler = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    return (
        <div>
            <h2>Login</h2>
            <form id="logIn" onSubmit={handleFormSubmit}>
                <input id="email" name="email" placeholder="email" type="text" onChange={(e) => setUsername(e.target.value)} />
                <input id="password" name="password" placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <button id="submit" type="submit">Log in!</button>
            </form>
            <p>Don't have an account yet? <button onClick={signUpClickHandler}>sign up!</button></p>
            {modalOpen && (
                <Modal isOpen={modalOpen}
                    shouldCloseOnEsc={true}
                    className='overlay'
                    onRequestClose={handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <SignUp />
                </Modal>
            )}
        </div>
    )
};

export default UserAccount;
