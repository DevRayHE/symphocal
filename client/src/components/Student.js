import React from "react";

const Student = ({
  _id,
  firstName,
  lastName,
  dateOfBirth
}) => {
  return (
    <div class="cell" id={_id}>
      <div class="card">
        {/* <img src="https://ismryde.com.au/wp-content/uploads/2021/02/ism_ryde_jitterbugs_logo.jpg"/> */}
        <div class="card-section">
        <h4>{firstName}</h4>
          <p>Date of Birth: {dateOfBirth}</p>
        </div>
        <button>Enroll</button>
      </div>
    </div>
  );
};

export default Student;