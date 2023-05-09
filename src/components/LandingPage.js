import React from 'react';
import Background from '../images/suzumelandscape.jpg';
import MovieCard from './MovieCard';
import '../Stylesheets/body-style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

// TODO: Add a comment explaining what a react component is
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return(
    <div className='Body'>
      

        <div className='ImgBox'>
            <h1 className='FrontPageText'>
            Track your films, <br></br>
            Tell Your Friends,<br></br>
            Find Your Next Classic
            </h1>
        </div>

        <div className='cards'>
            <MovieCard />
        </div>
    </div>
    
  ) 
}

export default HelloReact;
