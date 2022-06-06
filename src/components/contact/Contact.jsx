import React, { useState } from 'react'
import './Contact.scss'

const Contact = () => {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="leftSide">
        <img src="https://cdn.pixabay.com/photo/2016/08/20/09/51/marguerite-1607181__480.jpg" alt="" />
      </div>
      <div className="rightSide">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Names' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
