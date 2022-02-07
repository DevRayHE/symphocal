import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
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
  };

  return (
    <div className="container">
      
      <form onSubmit={handleFormSubmit}>
        <header className="page__header">
          <h2 className="text-center">Login</h2>
        </header>
        
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">
              <label >Email address:
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
              </label>
            </div>

            <div className="cell">
              <label>Password:
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>  
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="cell">
          <div className="button-group">
            {/* <button><input  type="submit" value="Login"/></button> */}
            <button >Login</button>
            <Link to="/signup"><button>Signup</button></Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
