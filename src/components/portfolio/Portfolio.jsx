import React, { useEffect, useState } from 'react'

import PortifolioList from '../portifolioList/PortifolioList'
import {
  featuredPortifolio,
  webAppPortifolio,
  mobileAppPortifolio,
  designPotifolio
} from '../data/Data';
import './Portfolio.scss'

const Portfolio = () => {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([])

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

  useEffect(() => {

    switch (selected) {
      case 'featured':
        setData(featuredPortifolio);
        break;
      case 'webApp':
        setData(webAppPortifolio);
        break;
      case 'mobileApp':
        setData(mobileAppPortifolio);
        break;
      case 'design':
        setData(designPotifolio);
        break;
      default:
        setData(featuredPortifolio);
    }

  }, [selected])

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
        {data.map((item) => (
          <div className="item">
            <img src={item.image} alt="Bus" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
