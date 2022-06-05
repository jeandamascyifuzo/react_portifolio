import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import './Intro.scss';

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content Creator'],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='leftSide'>
        <div className='imageContainer'>
          <img src='assets/0.png' alt='' />
        </div>
      </div>
      <div className='rightSide'>
        <div className='wrapper'>
          <h2>Hi There!, I'm</h2>
          <h1>Jean Damascene CYIFUZO</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <i className='bi bi-chevron-down'></i>
        </a>
      </div>
    </div>
  )
}

export default Intro
