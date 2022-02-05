import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_ALL_CLASSES, QUERY_STUDENT, QUERY_USER } from '../utils/queries';
import { UPDATE_CLASS } from '../utils/actions';
import { useAppContext } from '../utils/GlobalState';

const Calendar = () => {
  const [ state, dispatch ] = useAppContext();

  const { classes, user } = state;

  // console.log("state classes:" + state.classes)
  console.log("classes:" + classes);
  console.log("user:" + user);
  console.log("user:" + user.firstName);


  const { loading, data: classData } = useQuery(QUERY_ALL_CLASSES);

  useEffect(() => {
    if (classData) {
      dispatch({
        type: UPDATE_CLASS,
        classes: classData.classes,
      })
    } 
    // else if ()

  }, [classData, loading, dispatch]); // effect will only activate if the values in the list change.

  console.log("state classes:" + state.classes)

  return (
    <div className="container">
      <h1> This is Calendar page</h1>
      {/* {loading ? <button>loading</button> : renderClasses() } */}
      {classes.map((item) => (
      <button
        key={item._id}
        onClick={() => {
          // handleClick(item._id);
        }}
      >Name:  
      {item.name} || Descrip:
      {item.description} || Date: 
      {item.date} || startTime:
      {item.startTime} || duration: 
      {item.duration} || capacity:
      {item.capacity} || cost:
      {item.cost} || room:
      {item.room}
      </button>
    ))}
    </div>
  );
};

export default Calendar;
