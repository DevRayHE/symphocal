import React, { useState } from "react";
import Modal from 'react-modal';
import Student from '../components/Student';

const EnrolModal = ({
  children
}) => {

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
            {children ? children.map((eachChild) => <Student {...eachChild} key={eachChild._id}/>) : <></>}
          </div>
        </Modal>
      </div>
  )
};


export default EnrolModal;