import React from "react";
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import { ENROL_STUDENT } from '../utils/mutations';
import moment from 'moment';

const Student = ({
  _id,
  firstName,
  lastName,
  dateOfBirth,
  classId
}) => {

  const age = moment().diff(dateOfBirth, "years");
  const [ enrol ] = useMutation(ENROL_STUDENT);

  console.log(firstName + age);
  console.log("classID within Student component: " + classId);

  const enrolStudent = async() => {
    try {
      const mutationResponse = await enrol({
        variables: { classId: classId, studentId: _id}
      });

      const newClassData = mutationResponse;
      console.log(newClassData);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <div class="cell" id={_id}>
      <div class="card">
        {/* <img src="https://ismryde.com.au/wp-content/uploads/2021/02/ism_ryde_jitterbugs_logo.jpg"/> */}
        <div class="card-section">
        <h4>{firstName}</h4>
          <p>Age: {age} years old</p>
        </div>

        {/* conditonal render, if Modal opens from Calendar enrol button perform enrol mutation, otherwize take user to calendar page */}
        {classId 
        ?
        <button onClick={() => {enrolStudent()}}>Enroll</button>
        :
        <Link to="/Calendar"><button>Enroll</button></Link>
        }
        
      </div>
    </div>
  );
};

export default Student;