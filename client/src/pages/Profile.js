import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_ALL_CLASSES, QUERY_STUDENT, QUERY_USER } from '../utils/queries';
import { UPDATE_USER, TOGGLE_SIGNUP } from '../utils/actions';
import { useAppContext } from '../utils/GlobalState';

const Profile = () => {
  const [ state, dispatch ] = useAppContext();

  const { user } = state;

  console.log(user);

  const { loading, data: userData } = useQuery(QUERY_USER);
  // console.log("isNewUser status:" + state.isNewUser);

  // if (state.isNewUser) {
  //   console.log("state.isNewUser is true! switching it back to false!")
  //   dispatch({ type: TOGGLE_SIGNUP })
  // }

  // useEffect(() => {
  //   if (userData) {
  //     dispatch({
  //       type: UPDATE_USER,
  //       user: userData,
  //     })
  //   } 
  //   // else if ()

  // }, [userData, loading, dispatch]); // effect will only activate if the values in the list change.

  // console.log("user after useEffct" + user)

  return (
    <div className="container">
      <h1> This is Profile page</h1>
    </div>
  );
};

export default Profile;
