import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_CLASSES, QUERY_STUDENT, QUERY_USER } from '../utils/queries';
import { UPDATE_CLASS_STATE, UPDATE_USER_STATE } from '../utils/actions';
import { useAppContext } from '../utils/GlobalState';
import Class from '../components/Class';

import schoolLogo from '../assets/images/logo.png';
import JitterbugsLogo from '../assets/images/ism_ryde_jitterbugs_logo.jpg';
import BeeboppersLogo from '../assets/images/beebopper-logo-resized.jpg';
import PianoramaJuniorLogo from '../assets/images/ism_ryde_pianorama_course_logo_Junior.gif';
import PianoramaPrimaryLogo from '../assets/images/ism_ryde_pianorama_course_logo_Primary.gif';
import PianoramaExtensionLogo from '../assets/images/ism_ryde_pianorama_course_logo_Extension.gif';

const Calendar = () => {

  const [ state, dispatch ] = useAppContext();

  const { classes, user } = state;

  // console.log("state classes:" + state.classes)
  // console.log(classes);
  
  // console.log(user);
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

      <div className="card mb-3 section__card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={getLogoSrc(className)} className="img-fluid rounded-start" alt={className}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {/* <h3 className="card-title"> */}
              <header className="section__header">
              <h2 className="text-center card-title fw-bold">
              {className}
              </h2>
              </header>
              {/* </h3> */}
              {filteredClass[0]? <p className="card-text">{filteredClass[0].description}</p> : <></> }
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
        <h1 className="text-center fw-bold">Calendar</h1>
      </header>

      {classes 
      ?
      <>
      {renderByClassName("Jitterbugs")}
      {renderByClassName("Beeboppers")}
      {renderByClassName("Pianorama Junior")}
      {renderByClassName("Pianorama Primary")}
      {renderByClassName("Pianorama Extension")}
      </>
      : <h1>loading</h1>}
    </div>
  );
};

export default Calendar;
