import React from "react";
import EnrolModal from '../components/EnrolModal';

const Class = ({
  _id,
  name,
  description,
  date,
  startTime,
  duration,
  capacity,
  cost,
  room
}) => {
  return (
    <div class="cell" id={_id}>
      <div class="card">
        <img src="https://ismryde.com.au/wp-content/uploads/2021/02/ism_ryde_jitterbugs_logo.jpg"/>
        <div class="card-section">
        <h4>{name}</h4>
          <p>{date}</p>
          <p>{startTime}</p>
          <p>{duration} mins</p>
          <p>Capacity: {capacity}</p>
          <p><span>$</span>{cost/100}.00 inc GST</p>
          <p>Room: {room}</p>
        </div>
        <EnrolModal classId={_id}/>
      </div>
    </div>
  );
};

export default Class;