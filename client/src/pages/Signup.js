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

    <div className="container" data-abide noValidate>

      <form onSubmit={handleFormSubmit}>
        <header className="page__header">
          <h2 className="text-center">Sign Up</h2>
        </header>
        
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">
              <label>First Name:
              <input
                placeholder="First Name"
                name="firstName"
                type="text"
                onChange={handleChange}
                required pattern="[a-zA-Z0-9\s]+"
              />
              </label>
            </div>

            <div className="cell">
              <label>Last Name:
                <input
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  required pattern="[a-zA-Z0-9\s]+"
                />
              </label>
            </div>

            <div className="cell">
              <label>Mobile:
                <input
                  placeholder="0404123456"
                  name="mobile"
                  type="text"
                  onChange={handleChange}
                  required pattern="[0-9]+"
                />
              </label>
            </div>

            <div className="cell">
              <label>Post Code:
                <input
                  placeholder="2112"
                  name="postCode"
                  type="text"
                  onChange={handleChange}
                  required pattern="[0-9]+"
                />
              </label>
            </div>

            <div className="cell">
              <label>Email:
                <input
                  placeholder="thisismyemail@gmail.com"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                />
              </label>
            </div>

            <div className="cell">
              <label>Password:
                <input
                  placeholder="********"
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                />
              </label>
            </div>

            <div className="cell">
              <label>Confirm Password:
                <input
                  placeholder="********"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  required 
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                  data-equalto={formState.password}
                />
              </label>
              {/* <small className="error">The password did not match</small> */}
            </div>

          </div>  
        </div>
        <div className="cell">
          <div className="button-group">
            <button><Link to="/login">Login</Link></button>
            <button>Submit</button>
            {/* <button><input  type="submit" value="submit"/></button> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
