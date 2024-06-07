import React from 'react';
import LogIn from '../components/logIn.jsx'; // i changed the file name to capitalize it, but it causes errors when i try to import, not sure why?
import SignUp from '../components/SignUp.jsx';
import ReactModal from 'react-modal';




const Landing = () => {

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
             <LogIn></LogIn>
             <p>Don't have an account yet?</p> <button onclick={signUpClickHandler}>sign up!</button>
             {modalOpen} && 
             <ReactModal isOpen={modalOpen}
                shouldCloseOnEsc={true}
                className='overlay'
                onRequestClose={handleCloseModal}
                shouldCloseOnOverlayClick={true}
                >
                </ReactModal>
        </div>

    )
};