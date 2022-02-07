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

import schoolLogo from '../assets/images/logo.png';
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

  // console.log(classes);

  // console.log(classes.filter(function (fClass) {
  //   return fClass.name === "Jitterbugs";
  // }))

  const filterClass = (className) => {
    return (
      classes.filter(function (fClass) {
        return fClass.name === className;
      })
    )
  }

  const getLogoSrc = (className) => {
    switch (className) {
      case "Jitterbugs":
        return JitterbugsLogo;
      case "Beeboppers":
        return BeeboppersLogo;
      case "Pianorama Junior":
        return PianoramaJuniorLogo;
      case "Pianorama Primary":
        return PianoramaPrimaryLogo;
      case "Pianorama Extension":
        return PianoramaExtensionLogo;
      default:
        return schoolLogo;
    }
      
  }

  const renderByClassName = (className) => {

    const filteredClass = filterClass(className);
    console.log(filteredClass)

    return (
      <>
      {/* <header className="section__header">
        <h3 className="text-center">{className}</h3>
      </header>
      <img className="section__image" src={getLogoSrc(className)}/> */}

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={getLogoSrc(className)} className="img-fluid rounded-start" alt={className}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {/* <h3 className="card-title"> */}
              <header className="section__header">
              <h3 className="text-center card-title">
              {className}
              </h3>
              </header>
              {/* </h3> */}
              <p className="card-text">{filteredClass[0].description}</p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="">
        <div 
        className="row classes__row" 
        // style="justify-content: space-evenly"
        >
        {filteredClass ? filteredClass.map((eachClass) => <Class {...eachClass} key={eachClass._id}/>) : <h1>loading</h1>}
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="grid-container calendar">
      <header className="page__header">
        <h2 className="text-center">Calendar</h2>
      </header>
      
      {renderByClassName("Jitterbugs")}
      {renderByClassName("Beeboppers")}
      {renderByClassName("Pianorama Junior")}
      {renderByClassName("Pianorama Primary")}
      {renderByClassName("Pianorama Extension")}

      {/* <header className="section__header">
        <h3 className="text-center">JitterBugs</h3>
      </header>
      <div><img className="section__image" src={JitterbugsLogo}/></div>
      

      <div className="">
        <div 
        className="row classes__row" 
        // style="justify-content: space-evenly"
        >
        {jitterBugs ? jitterBugs.map((eachClass) => <Class {...eachClass} key={eachClass._id}/>) : <h1>loading</h1>}
        </div>
      </div>

      <header className="section__header">
        <h3 className="text-center">Beeboppers</h3>
      </header>
      <img className="section__image" src={BeeboppersLogo}/>

      <div className="">
        <div 
        className="row classes__row" 
        // style="justify-content: space-evenly"
        >
        {beeboppers ? beeboppers.map((eachClass) => <Class {...eachClass} key={eachClass._id}/>) : <h1>loading</h1>}
        </div>
      </div>

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

      <div className="">
        <div 
        className="row classes__row" 
        // style="justify-content: space-evenly"
        >
        {classes ? classes.map((eachClass) => <Class {...eachClass} key={eachClass._id}/>) : <h1>loading</h1>}
        </div>
      </div> */}

    </div>
  );
};

export default Calendar;
