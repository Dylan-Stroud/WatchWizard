import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import '../Stylesheets/body-style.css';

// TODO: Add a comment explaining what a react component is
const Signin = () => {
  return (
    <div className='Oranges'>
      <center> <h1> Login </h1> </center>   
      <form className='Form'>  
        <div class="container">   
            <label>Username : </label>  
            <input type="text" placeholder="Enter Username" name="username" required></input> 
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required></input>
            <button type="submit">Login</button>   
            
            
               
        </div>
      </form>    
    </div>
    
  )
}

export default Signin;
