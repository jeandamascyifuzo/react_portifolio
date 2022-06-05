import React, { useState } from 'react'
import PortifolioList from '../portifolioList/PortifolioList'
import './Portfolio.scss'

const Portfolio = () => {
  
  const [selected, setSelected] = useState('featured')

  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "webApp",
      title: "Web App"
    },
    {
      id: "mobileApp",
      title: "Mobile App"
    },
    {
      id: "design",
      title: "Design"
    }
  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portifolio</h1>
      <ul>
        {list.map((item) => (
          <PortifolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://media.istockphoto.com/photos/woman-wearing-protective-mask-riding-a-bus-while-using-a-smartphone-picture-id1318613472?b=1&k=20&m=1318613472&s=170667a&w=0&h=KagVwAs8tFOZEwIzPwv4nazcGSs3CHQbXzY5mIPGUHc=" alt="Bus" />
          <h3>Phantom</h3>
        </div>
        <div className="item">
          <img src="https://media.istockphoto.com/photos/woman-wearing-protective-mask-riding-a-bus-while-using-a-smartphone-picture-id1318613472?b=1&k=20&m=1318613472&s=170667a&w=0&h=KagVwAs8tFOZEwIzPwv4nazcGSs3CHQbXzY5mIPGUHc=" alt="Bus" />
          <h3>Phantom</h3>
        </div>
        <div className="item">
          <img src="https://media.istockphoto.com/photos/woman-wearing-protective-mask-riding-a-bus-while-using-a-smartphone-picture-id1318613472?b=1&k=20&m=1318613472&s=170667a&w=0&h=KagVwAs8tFOZEwIzPwv4nazcGSs3CHQbXzY5mIPGUHc=" alt="Bus" />
          <h3>Phantom</h3>
        </div>
        <div className="item">
          <img src="https://media.istockphoto.com/photos/woman-wearing-protective-mask-riding-a-bus-while-using-a-smartphone-picture-id1318613472?b=1&k=20&m=1318613472&s=170667a&w=0&h=KagVwAs8tFOZEwIzPwv4nazcGSs3CHQbXzY5mIPGUHc=" alt="Bus" />
          <h3>Phantom</h3>
        </div>
        <div className="item">
          <img src="https://media.istockphoto.com/photos/woman-wearing-protective-mask-riding-a-bus-while-using-a-smartphone-picture-id1318613472?b=1&k=20&m=1318613472&s=170667a&w=0&h=KagVwAs8tFOZEwIzPwv4nazcGSs3CHQbXzY5mIPGUHc=" alt="Bus" />
          <h3>Phantom</h3>
        </div>
        <div className="item">
          <img src="https://media.istockphoto.com/photos/woman-wearing-protective-mask-riding-a-bus-while-using-a-smartphone-picture-id1318613472?b=1&k=20&m=1318613472&s=170667a&w=0&h=KagVwAs8tFOZEwIzPwv4nazcGSs3CHQbXzY5mIPGUHc=" alt="Bus" />
          <h3>Phantom</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
