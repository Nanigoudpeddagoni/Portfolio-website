import React, { useState, useEffect } from 'react';
import "../css/Home.css";
import Project from './project';
import nani from "../images/nani.png";
import Footer from './Footer';


function Home() {
 
  // document.addEventListener('DOMContentLoaded', () => 
window.addEventListener('scroll', () => {
  const textElement = document.querySelector('.animate-text');
  const scrollPosition = window.scrollY;
  const textOffset = textElement.offsetTop;
  if (scrollPosition > textOffset - window.innerHeight / 2) {
    textElement.classList.add('active');
  }
  else{
    textElement.classList.remove('active')
  }
});

  return (
    <div className='homepage'>
      <div className='home'>
        <div className='section1 '>
          <h1 className= "h1">
            hello, i am  </h1>
          <h1 className='h11'>nani goud</h1>
          <span className="heading">
            Imagine. Create. Inspire. Welcome to my portfolio
          </span>
          <span className='name'> ~This is nani goud</span>
          <span className='resume'>
          <span class=" material material-symbols-outlined">
print
</span>  print resume
          </span>

        </div>
        <img className="img" src={nani} alt="Nani Image" />

      </div>
      <div className=' animate-text'>
      
        <Project />
      </div>
        

    </div>
  );
}

export default Home;
