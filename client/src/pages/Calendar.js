import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_ALL_CLASSES, QUERY_STUDENT, QUERY_USER } from '../utils/queries';
import { UPDATE_CLASS_STATE } from '../utils/actions';
import { useAppContext } from '../utils/GlobalState';
import moment from 'moment';

const Calendar = () => {
  const [ state, dispatch ] = useAppContext();

  const { classes, user } = state;

  // console.log("state classes:" + state.classes)
  console.log(classes);
  console.log("user:" + user);
  // console.log("user:" + user.firstName);


  const { loading, data: classData } = useQuery(QUERY_ALL_CLASSES);

  useEffect(() => {
    if (classData) {
      dispatch({
        type: UPDATE_CLASS_STATE,
        classes: classData.classes,
      })
    } 
    // else if ()

  }, [classData, loading, dispatch]); // effect will only activate if the values in the list change.

  console.log("state classes:" + state.classes)

  return (
    <div className="container">
      <header className="page__header">
        <h2 className="text-center">Profile</h2>
      </header>
      {/* {loading ? <button>loading</button> : renderClasses() } */}
      {/* conditional rendering to avoid bugs */}
      {classes ? classes.map((item) => (
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
      {item.room} || Students:
      {item.student.map((item) => (
        <button
        key={item._id}
        onClick={() => {
          // handleClick(item._id);
        }}
        > firstName: {item.firstName}
        || lastName: {item.lastName}
        || DOB: 
        {/* {moment(item.dateOfBirth, "DD-MM-YYYY")} */}
        {item.dateOfBirth}
        </button>
      ))}
      </button>
    )) : <button>loading</button>}
    </div>
  );
};

export default Calendar;
