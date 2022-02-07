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

import JitterbugsLogo from '../assets/images/ism_ryde_jitterbugs_logo.jpg';
import BeeboppersLogo from '../assets/images/beebopper-logo.jpg';
import PianoramaJuniorLogo from '../assets/images/ism_ryde_pianorama_course_logo_Junior.gif';
import PianoramaPrimaryLogo from '../assets/images/ism_ryde_pianorama_course_logo_Primary.gif';
import PianoramaExtensionLogo from '../assets/images/ism_ryde_pianorama_course_logo_Extension.gif';

const Calendar = () => {

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
      <header className="page__header">
        <h2 className="text-center">Calendar</h2>
      </header>

      <header className="section__header">
        <h3 className="text-center">JitterBugs</h3>
      </header>
      <img className="section__image" src={JitterbugsLogo}/>

      <header className="section__header">
        <h3 className="text-center">Beeboppers</h3>
      </header>
      <img className="section__image" src={BeeboppersLogo}/>

      <header className="section__header">
        <h3 className="text-center">Pianorama Junior</h3>
      </header>
      <img className="section__image" src={PianoramaJuniorLogo}/>

      <header className="section__header">
        <h3 className="text-center">Pianorama Primary</h3>
      </header>
      <img className="section__image" src={PianoramaPrimaryLogo}/>

      <header className="section__header">
        <h3 className="text-center">Pianorama Extension</h3>
      </header>
      <img className="section__image" src={PianoramaExtensionLogo}/>

      <div className="card-group">
        <div 
        className="row portfolio__row" 
        // style="justify-content: space-evenly"
        >
        {classes ? classes.map((eachClass) => <Class {...eachClass} key={eachClass._id}/>) : <h1>loading</h1>}
        </div>
      </div>

    </div>
  );
};

export default Calendar;
