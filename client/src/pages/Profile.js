import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_USER } from '../utils/queries';
import { ADD_CHILD, UPDATE_USER } from '../utils/mutations';
import { UPDATE_USER_STATE, TOGGLE_SIGNUP } from '../utils/actions';
import { useAppContext } from '../utils/GlobalState';
import Student from '../components/Student';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


const Profile = () => {
  // global state
  const [ state, dispatch ] = useAppContext();
  const [ addChild] = useMutation(ADD_CHILD);
  const [ udpateUser ] = useMutation(UPDATE_USER);
  const [ date, setDate ] =useState(new Date());
  const [formState, setFormState] = useState({ firstName: '', lastName: '' });
  const [displayChildForm, setDisplayChildForm] = useState(false);

  const { loading, data: userData } = useQuery(QUERY_USER);

  useEffect(() => {
    if (userData) {
      dispatch({
        type: UPDATE_USER_STATE,
        user: userData.user,
      })
    } 

  }, [userData, loading, dispatch]);

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
      // hide the form on successful form submission
      setDisplayChildForm(false);
      window.location.reload();
      // dispatch({
      //   type: UPDATE_USER_STATE,
      //   user: userData.user,
      // })
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(name + value);
  };

  const addChildForm = () => {
    // {/* Conditional render */}
    return (
      <div>
      <form onSubmit={handleFormSubmit}>
        {/* <h5>Add your child's info</h5> */}
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
                required pattern="[a-zA-Z0-9\s]+"
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
                required pattern="[a-zA-Z0-9\s]+"
                />
              </label>
            </div>
            <div className="cell">
              <label> Date of birth
                {/* <input type="text" placeholder="date of birth"/> */}
                <DatePicker
                  closeOnScroll={true}
                  showYearDropdown
                  dateFormatCalendar="MMMM"
                  yearDropdownItemNumber={15}
                  scrollableYearDropdown
                  selected={date}
                  onSelect={(selectedDate) => setDate(selectedDate)} //when day is clicked
                  onChange={(selectedDate) => setDate(selectedDate)} //only when value has changed
                  required
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
    );
  };

  // TODO: edit profile Form
  // TODO: handle edit profile form submit

  // console.log(userData.user.children)
  // console.log(userData.user.children.map((eachChild) => eachChild.firstName))

  return (
    <div className="container">
      {/* conditonal render */}
      {
      userData
      ? 
      <>
      <header className="page__header">
        <h2 className="text-center">Profile</h2>
      </header>
      <h3> Hello {userData.user.firstName} </h3>
      <div className="grid-x grid-margin-x small-up-2 medium-up-3">
        {userData.user.children.map((eachChild) => <Student {...eachChild} key={eachChild._id}/>)}
        <div className="button-group">
          <button> Edit Profile</button>
          <button onClick={() => setDisplayChildForm(true)}> Add a child</button>
        </div>
      </div>
      </>
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
      {
      displayChildForm 
      ?
      addChildForm()
      :
      <></>
      }
      {/* TODO:  edit profile form   */}
    </div>
  );
};

export default Profile;
