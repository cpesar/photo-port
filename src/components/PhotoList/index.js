import React, {useState} from 'react';
import photo from '../../assets/small/commercial/0.jpg';
// import { useState } from 'react';
// import Gallery from '../Gallery';


function PhotoList(){
  return (
    <div>
      <img
      src={photo}
      alt="Commercial Example"
      />
      
    </div>
  );
}

export default PhotoList;