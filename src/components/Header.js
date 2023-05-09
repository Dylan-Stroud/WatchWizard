import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import '../Stylesheets/header-style.css'
// TODO: Add a comment explaining what a react component is
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return(
    <header>
        <nav className='nav'>
            
            <ul className='nav-items'>
                <li><Link to="/"><FontAwesomeIcon icon={faClapperboard} className='nav-logo fa-4x'></FontAwesomeIcon></Link></li>
                <li><Link to="/Sign-In" >Sign In</Link></li>
                <li><Link to='/Create-Account' href='Create-Account'>Create Account</Link></li>
                <li><Link to='/Films'>Films</Link></li>
                <li><Link to='/Shows'>Shows</Link></li>
                <li><Link to='/Top-Weekly'>Top Weekly</Link></li>
                <li><Link to='/Recommend'>Recommend me!</Link></li>
                <li><Link to='/Watchlist'>Watchlist</Link></li>
            </ul>
        </nav>
    </header>
    
  ) 
}

export default HelloReact;
