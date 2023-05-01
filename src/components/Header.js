import React from 'react';
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
            <FontAwesomeIcon icon={faClapperboard} className='nav-logo fa-4x'></FontAwesomeIcon>
            <ul className='nav-items'>
                <li><a href='#'>Sign In</a></li>
                <li><a href='#'>Create Account</a></li>
                <li><a href='#'>Films</a></li>
                <li><a href='#'>Shows</a></li>
                <li><a href='#'>Top Weekly</a></li>
                <li><a href='#'>Recommend me!</a></li>
                <li><a href='#'>Watchlist</a></li>
            </ul>
        </nav>
    </header>
    
  ) 
}

export default HelloReact;
