import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_USER } from '../utils/queries';
import { ADD_CHILD, UPDATE_USER } from '../utils/mutations';
import { UPDATE_USER_STATE, TOGGLE_SIGNUP } from '../utils/actions';
import { useAppContext } from '../utils/GlobalState';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


const Profile = () => {
  // global state
  const [ state, dispatch ] = useAppContext();
  const [ addChild] = useMutation(ADD_CHILD);
  const [ udpateUser ] = useMutation(UPDATE_USER);

  const [ date, setDate ] =useState(new Date());
  const [formState, setFormState] = useState({ firstName: '', lastName: '' });

  // const handleDateSelect = (dateSelected) => {
  //   setDate(dateSelected);
  // };

  const { loading, data: userData } = useQuery(QUERY_USER);

  useEffect(() => {
    if (userData) {
      dispatch({
        type: UPDATE_USER_STATE,
        user: userData.user,
      })
    } 
    // else if ()

  }, [userData, loading, dispatch]); // effect will only activate if the values in the list change.

  console.log("userData: " + userData);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // const dateString = date.toString();
      // console.log(dateString);

      const mutationResponse = await addChild({
        variables: 
        { 
          firstName: formState.firstName, 
          lastName: formState.lastName, 
          dateOfBirth: date,
        },
      });
      const newChild = mutationResponse.data.addChild;
      console.log("NewChild created!: ");
      console.log(newChild._id);
    } catch (e) {
      console.log(e);
    }

    // console.log("date is:" + date);
    // console.log(event);
  };

  // const addChildToUser = async (childId) => {
  //   try {
  //     const mutationResponse = await udpateUser({

  //     })
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
      
    });
    console.log(name + value);
  };

  return (
    <div className="container">
      {/* Conditional render */}
      {
      userData
      ? 
      <div>
      <h1> Hello {userData.user.firstName} </h1> 
      <form onSubmit={handleFormSubmit}>
        <h5>Add your child's info</h5>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">
              <label> First name:
                <input 
                type="text" 
                placeholder="First name"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                />
              </label>
            </div>
            <div className="cell">
              <label> Last name:
                <input type="text" 
                placeholder="Last name"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                />
              </label>
            </div>
            <div className="cell">
              <label> Date of birth
                {/* <input type="text" placeholder="date of birth"/> */}
                <DatePicker
                  closeOnScroll={true}
                  selected={date}
                  onSelect={(selectedDate) => setDate(selectedDate)} //when day is clicked
                  onChange={(selectedDate) => setDate(selectedDate)} //only when value has changed
                  />
              </label>
            </div>
            <div className="cell">
              <p> Input child's info, for ease of enrolment next
              </p>
            </div>
            <div className="cell">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
      </div>
      :
      <>
      <h1>Please login to view your profile</h1>
      <Link
      className='nav-link'
      to="/Login" 
      >
      <h5>Login</h5>
      </Link>
      </>
      }
      
    </div>
  );
};

export default Profile;
