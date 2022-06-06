import React from 'react'
import './Testimonial.scss'

const Testimonial = () => {

  const data = [
    {
      id: '1',
      name: 'Tom1',
      title: 'CEO at Andela1',
      image: 'https://cdn.pixabay.com/photo/2018/01/24/19/49/people-3104635__340.jpg',
      icon: 'https://cdn.pixabay.com/photo/2016/04/24/14/34/youtube-1349699__480.png',
      desc: 'Mauris malesuada felis eu arcu sagittis ullamcorper. Vivamus pharetra, justo non ultricies varius, magna nisl maximus nisi, quis euismod elit massa non dolor. Maecenas dui urna, viverra ac felis id, pretium scelerisque nunc'
    },
    {
      id: '2',
      name: 'Tom2',
      title: 'CEO at Andela2',
      image: 'https://cdn.pixabay.com/photo/2016/09/03/09/18/girl-1641215__480.jpg',
      icon: 'https://cdn.pixabay.com/photo/2017/11/10/05/05/twitter-2935414__340.png',
      desc: 'Mauris malesuada felis eu arcu sagittis ullamcorper. Vivamus pharetra, justo non ultricies varius, magna nisl maximus nisi, quis euismod elit massa non dolor. Maecenas dui urna, viverra ac felis id, pretium scelerisque nunc',
      featured: true
    },
    {
      id: '3',
      name: 'Tom3',
      title: 'CEO at Andela3',
      image: 'https://media.istockphoto.com/photos/female-influencer-vlogging-online-with-smartphone-cam-and-laptop-from-picture-id1326517883?b=1&k=20&m=1326517883&s=170667a&w=0&h=6FmmtMW5Deeb-y0hfNcfaONuHSKwqR_f4QpHHgqi5cI=',
      icon: 'https://cdn.pixabay.com/photo/2013/07/13/01/12/tweet-155281__480.png',
      desc: 'Mauris malesuada felis eu arcu sagittis ullamcorper. Vivamus pharetra, justo non ultricies varius, magna nisl maximus nisi, quis euismod elit massa non dolor. Maecenas dui urna, viverra ac felis id, pretium scelerisque nunc'
    },
  ];

  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map((item) => (
          <div className={item.featured ? 'card featured' : 'card'}>
            <div className='top'>
              <img src='https://cdn.pixabay.com/photo/2012/04/11/17/58/arrow-29170__480.png' alt='' className='leftSide' />
              <img src={item.image} alt='' className='user' />
              <img src={item.icon} alt='' className='rightSide' />
            </div>
            <div className='center'>
              {item.desc}
            </div>
            <div className='botton'>
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
