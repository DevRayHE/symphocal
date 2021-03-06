import React from "react";
import EnrolModal from '../components/EnrolModal';

import schoolLogo from '../assets/images/logo.png';
import JitterbugsP1 from '../assets/images/Jitterbugs.png';
import JitterbugsP2 from '../assets/images/Jitterbugs2.png';
import BeepoperP1 from '../assets/images/beeepoper.png';
import BeepoperP2 from '../assets/images/beeepoper2.png';
import PianoramaJ1 from '../assets/images/Pianorama-Junior.png';
import PianoramaJ2 from '../assets/images/Pianorama-Junior2.png';
import PianoramaP from '../assets/images/Pianorama-Primary.png';
import PianoramaE from '../assets/images/Pianorama-Extension.png';

const getImageSrc = (className) => {
  switch (className) {
    case "Jitterbugs":
      return JitterbugsP1;
    case "Beeboppers":
      return BeepoperP1;
    case "Pianorama Junior":
      return PianoramaJ1;
    case "Pianorama Primary":
      return PianoramaP;
    case "Pianorama Extension":
      return PianoramaE;
    default:
      return schoolLogo;
  }
}


const Class = ({
  _id,
  name,
  description,
  fullDescription,
  date,
  startTime,
  duration,
  capacity,
  cost,
  student,
  room
}) => {
  // console.log("Students number: " + student.length);

  const vacancy = capacity - student.length;
  const vacancyMsg = (vacancy) => {
    if (vacancy <= 0) {
      return "Class is now full!";
    } else if (vacancy === 1) {
      return "There is 1 place available";
    } else if (1 < vacancy && vacancy <= 4) {
      return `There are ${vacancy} places available`;
    } else {
      return "There are places available";
    }
  }

  return (
      <div className="card col-md-5 col-lg-3 text-center p-2 m-2" id={_id}>
      <div className="card-header">
        {/* <button
          type="button"
          // className=""
          // className="btn card-title fw-bold"
          // data-bs-container="body"
          // data-bs-toggle="popover"
          // data-bs-placement="bottom"
          // data-bs-content={fullDescription}

          data-bs-toggle="tooltip"
          data-bs-placement="down"
          title={description}
        > */}
        <h4 className="card-title fw-bold">{name} {date}</h4>
        {/* </button> */}
      </div>

      <div className="card-body">
        <img
          src={getImageSrc(name)}
          className="card-img"
          alt="image of muscial class"
          // data-bs-toggle="modal"
          // data-bs-target="#subProject1Modal"
        />

        <ul className="class-icons">
          <li 
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add this to your calendar"
          >
            <a href={123}>
              <span>
                <i className="fa fa-calendar class__icon"></i>
              </span>
              <span className="fw-bold">Every {date} {startTime} </span>
              <p>{duration} mins</p>
            </a>
          </li>

          <li>
          <span>$</span>{cost/100}.00 inc GST
          </li>

          <li>
          Class room: {room}
          </li>

          <li>
          <p className="fw-bold">{vacancyMsg(vacancy)}</p>
          </li>
        </ul>
      </div>

      <div className="card-footer">
        <EnrolModal classId={_id}/>
      </div>
      </div>
  );
};

export default Class;