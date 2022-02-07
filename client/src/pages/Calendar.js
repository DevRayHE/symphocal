import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_ALL_CLASSES, QUERY_STUDENT, QUERY_USER } from '../utils/queries';
import { UPDATE_CLASS_STATE, UPDATE_USER_STATE } from '../utils/actions';
import { useAppContext } from '../utils/GlobalState';
import Class from '../components/Class';
import EnrolModal from '../components/EnrolModal';
import Student from '../components/Student';
import Modal from 'react-modal';
import moment from 'moment';

const Calendar = () => {

  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //   },
  // };
  
  // Modal.setAppElement('#root');
  
  // let subtitle;
  // const [modalIsOpen, setIsOpen] = useState(false);
  
  // function openModal() {
  //   setIsOpen(true);
  // }
  
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }
  
  // function closeModal() {
  //   setIsOpen(false);
  // }

  const [ state, dispatch ] = useAppContext();

  const { classes, user } = state;

  // console.log("state classes:" + state.classes)
  console.log(classes);
  console.log(user);
  // console.log("user:" + user.firstName);

  const { loading, data: classData} = useQuery(QUERY_ALL_CLASSES);
  
  useEffect(() => {
    if (classData) {
      dispatch({
        type: UPDATE_CLASS_STATE,
        classes: classData.classes,
      })
    } 
  }, [classData, loading, dispatch]); // effect will only activate if the values in the list change.

  // const { userData } = useQuery(QUERY_USER);

  // console.log("state classes:" + state.classes)

  // combine the classes and user objects together, for spread and map each later.
  // const classAndUser = [classes, user];

  return (
    <div className="grid-container">
      {/* <EnrolModal {...user}/> */}
      {/* <div>
        <button onClick={openModal}>Open Modal</button>
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
            {user.children ? user.children.map((eachChild) => <Student {...eachChild} key={eachChild._id}/>) : <></>}
          </div>
        </Modal>
      </div> */}
      <header className="page__header">
        <h2 className="text-center">Calendar</h2>
      </header>
      <div className="grid-x grid-margin-x small-up-2 medium-up-3">
      {/* {loading ? <button>loading</button> : renderClasses() } */}
      {/* conditional rendering to avoid bugs */}
      {classes ? classes.map((eachClass) => <Class {...eachClass} key={eachClass._id}/>) : <h1>loading</h1>}
      </div>
    </div>
  );
};

export default Calendar;
