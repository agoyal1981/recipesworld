import React, { useState } from 'react';
import RegisterMessage from './RegisterMessage';

async function registerUser(credentials) {
    return fetch('http://localhost:3001/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
  
 export default function Registerform() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [regMessage, setRegMessage] = useState(false);
    const [isShown, setIsShown] = useState(true);
      
    const handleRegister = async e => {
      e.preventDefault();
      await registerUser({
        username,
        password
      });
      setRegMessage(true);
      setIsShown(false)
    }
  
    return ( 
        <div className="login-wrapper">
          {isShown && <>
        <h1>Register here</h1>
         <form onSubmit={handleRegister}>
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
        </>}
        {regMessage && <RegisterMessage />}
      </div>
    );
  }