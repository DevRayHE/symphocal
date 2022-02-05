import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';
import { TOGGLE_SIGNUP } from '../utils/actions';
import { useAppContext } from '../utils/GlobalState';

function Signup(props) {
  // get global state
  const [ state, dispatch ] = useAppContext();

  // check value of boolean variable isNewUser
  // console.log("isNewUser status:" + state.isNewUser);

  // function to toggle isNewUser global state, when true(on signup, will navigate to Profile page, add children(student))
  // function toggleSignUp() {
  //   console.log("toggleSignup Func activated!")
  //   dispatch({ type: TOGGLE_SIGNUP })
  //   console.log("isNewUser status:" + state.isNewUser)
  // }

  // useEffect(() => {
  //   if (!isNewUser) {
  //     dispatch({
  //       type: TOGGLE_SIGNUP,
  //       newUser: true,
  //     })
  //   } 
  //   // else if ()

  // }, [isNewUser, dispatch]); // effect will only activate if the values in the list change.

  // console.log("newUser true or false after useEffct" + isNewUser)


  const [formState, setFormState] = useState({ email: '', password: '' });
  const [createUser] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await createUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        mobile: formState.mobile,
        postCode: formState.postCode,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.createUser.token;
    const isSignUp = true;
    Auth.login(token, isSignUp);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container signup">

      <h2>Signup</h2>
      <form className="signup__form" onSubmit={handleFormSubmit}>
        <div className="flex-row space-between signup__form__input">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between signup__form__input">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between signup__form__input">
          <label htmlFor="mobile">Mobile:</label>
          <input
            placeholder="0404xxxxxx"
            name="mobile"
            type="mobile"
            id="mobile"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between signup__form__input">
          <label htmlFor="postCode">Post Code:</label>
          <input
            placeholder="2112"
            name="postCode"
            type="postCode"
            id="postCode"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between signup__form__input">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between signup__form__input">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          {/* On submit of the form, toggle isNewUser global state variable to true, to navigate to Profile page instead of Calendar page, which is handled with ../utils/auth.js login method */}
          <button type="submit">Submit</button>
          <button><Link to="/login">Login</Link></button>
          {/* <button><a href="#test" onClick={toggleSignUp}>Test</a></button> */}
        </div>
      </form>
    </div>
  );
}

export default Signup;
