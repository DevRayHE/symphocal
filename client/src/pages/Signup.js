import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';

function Signup(props) {
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
    Auth.login(token);
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
          <button type="submit">Submit</button>
          <button><Link to="/login">Login</Link></button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
