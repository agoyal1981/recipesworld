import React, { useState } from 'react';
import Registerform from './Register';


async function loginUser(credentials) {
    return fetch('http://localhost:3001/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isShown, setIsShown] = useState(false);
    
   
    const handleClick = event => {
      setIsShown(current => !current);
    };


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        setIsShown(false);
       
      }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
       <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>Not registered yet? <button onClick={handleClick}>Click here</button></p>
      {isShown && <Registerform />}
     
    </div>
  );
}