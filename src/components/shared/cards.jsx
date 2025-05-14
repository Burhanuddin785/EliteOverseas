import React from 'react'
import '../../css/shared/card.css'

const cards = ({icon, heading, body }) => {
  return (
    <div className='card'>
        <div className="card-icon"><img src={icon} alt="" /></div>
        <div className="card-head">{heading}</div>
        <div className="card-footer">{body}</div>
    </div>
  )
}

export default cards