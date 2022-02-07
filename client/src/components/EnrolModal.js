import React, { useState } from "react";
import Modal from 'react-modal';
import Student from '../components/Student';
import { useAppContext } from '../utils/GlobalState';
import { Link } from 'react-router-dom';

const EnrolModal = ({
  classId
}) => {

  // console.log(classId);

  const [ state, dispatch ] = useAppContext();
  const { user } = state;

  let userAndClassId = {user, classId}

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
        <button onClick={openModal}>Enrol</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Enrol here</h2>
          <button className="float-right" onClick={closeModal}>close</button>
          <p>Simply choose a child to enrol</p>
        <div className="grid-x grid-margin-x small-up-2 medium-up-3">
        {user.children ? user.children.map((eachChild) => 
        <Student 
          _id = {eachChild._id}
          firstName = {eachChild.firstName}
          lastName = {eachChild.lastName}
          dateOfBirth = {eachChild.dateOfBirth}
          classId = {classId}
          key={eachChild._id}/>) 
        : 
        <>
        <h5>Please login to enrol</h5>
          <Link
          className='nav-link'
          to="/Login" 
          >
          <h5>Login</h5>
          </Link>
        </>}
        {/* {userAndClassId ? userAndClassId.map((eachChild) => <Student {...eachChild} key={eachChild._id}/>) : <></>} */}
          </div>
        </Modal>
      </div>
  )
};


export default EnrolModal;