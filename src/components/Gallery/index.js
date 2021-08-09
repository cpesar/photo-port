import React from 'react';
import PhotoList from '../PhotoList';
// Import the capitalizeFirstLetter() helper function
import { capitalizeFirstLetter } from '../../utils/helpers';
// Import the small images from the commercial folder
// import photo from '../../assets/small/commercial/0.jpg';

function Gallery(props){
  const { currentCategory } = props;


  return(
    <section>
      <h1 data-testid= 'h1tag'>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
     <PhotoList category={currentCategory.name}/>
    </section>
  );
}

export default Gallery;

