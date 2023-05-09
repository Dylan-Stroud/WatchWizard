import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import MovieCard from './MovieCard'

// TODO: Add a comment explaining what a react component is
function Films() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return(
    <div className='orange'>
     
      <ul className='CardBox'>
        <li><MovieCard /></li>
        <li><MovieCard /></li>
        <li><MovieCard /></li>
        <li><MovieCard /></li>
        <li><MovieCard /></li>
      </ul>
      <ul className='CardBox'>
        <li><MovieCard /></li>
        <li><MovieCard /></li>
        <li><MovieCard /></li>
        <li><MovieCard /></li>
        <li><MovieCard /></li>
      </ul>
        
    </div>
    
  ) 
}

export default Films;
