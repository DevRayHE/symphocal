import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const Student = ({
  _id,
  firstName,
  lastName,
  dateOfBirth
}) => {

  const age = moment().diff(dateOfBirth, "years");

  console.log(firstName + age);

  return (
    <div class="cell" id={_id}>
      <div class="card">
        {/* <img src="https://ismryde.com.au/wp-content/uploads/2021/02/ism_ryde_jitterbugs_logo.jpg"/> */}
        <div class="card-section">
        <h4>{firstName}</h4>
          <p>Age: {age} years old</p>
        </div>
        <Link to="/Calendar"><button>Enroll</button></Link>
      </div>
    </div>
  );
};

export default Student;