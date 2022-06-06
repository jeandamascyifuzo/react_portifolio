import React from 'react'
import './PortifolioList.scss'

const PortifolioList = ({ id, title, active, setSelected }) => {
  return (
    <li className={active ? 'portifolioList active' : 'portifolioList'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}

export default PortifolioList
