import React from 'react'
import './TopBar.scss'

const TopBar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'topBar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='leftSide'>
          <a href='#intro' className='logo'>Jean.</a>
          <div className='itemContainer'>
          <i className='bi bi-telephone-fill icons' ></i>
          <span>(+250) 781917267</span>
          </div>
          <div className='itemContainer'>
          <i className='bi bi-envelope-fill icons' ></i>
          <span>jeancyifuzodamas@gmail.com</span>
          </div>
        </div>
        <div className='rightSide'>
          <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
