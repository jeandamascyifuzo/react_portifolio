import React, { useState } from 'react'

import './Works.scss'

const Works = () => {

  const [currentSlide, setCurrentSilde] = useState(0)

  const data = [
    {
      id: '1',
      icon: 'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060__480.jpg',
      title: 'Title1',
      desc: ' ut cursus dolor velit id nulla. Morbi ut nisl sed orci aliquet viverra quis nec augue. Etiam congue, sapien ac hendrerit mattis, est est dictum nisi, finibus molestie purus nibh eu odio',
      image: 'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174__340.jpg'
    },
    {
      id: '2',
      icon: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__480.jpg',
      title: 'Title2',
      desc: ' ut cursus dolor velit id nulla. Morbi ut nisl sed orci aliquet viverra quis nec augue. Etiam congue, sapien ac hendrerit mattis, est est dictum nisi, finibus molestie purus nibh eu odio',
      image: 'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401__480.jpg'
    },
    {
      id: '3',
      icon: 'https://cdn.pixabay.com/photo/2016/11/29/05/01/lights-1867437__480.jpg',
      title: 'Title3',
      desc: ' ut cursus dolor velit id nulla. Morbi ut nisl sed orci aliquet viverra quis nec augue. Etiam congue, sapien ac hendrerit mattis, est est dictum nisi, finibus molestie purus nibh eu odio',
      image: 'https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092__480.jpg'
    },
  ]

  const handleClick = (way) => {
    way === 'left' ? setCurrentSilde(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSilde(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className='works' id='works'>
      <div className='slider' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((item) => (
          <div className='container'>
            <div className='item'>
              <div className='leftSide'>
                <div className='leftSideContainer'>
                  <div className='imgContainer'>
                    <img src={item.icon} alt='' />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>Project</span>
                </div>
              </div>
              <div className='rightSide'>
                <img src={item.image} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='iconContainerLeft'>
        <i className='bi bi-chevron-left icons' onClick={() => handleClick("left")}></i>
      </div>

      <div className='iconContainerRight'>
        <i className='bi bi-chevron-right icons' onClick={() => handleClick()}></i>
      </div>
    </div>
  )
}

export default Works
