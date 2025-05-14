import React from 'react'

const Pin = ({Pin, Place, index}) => {
  return (
    <>
     <div className={`pin-container${index}`}>
        <img src={Pin} alt="Pin" className="pin" />
        <div className="pin-label">{Place}</div>
        </div>
    </>
  )
}

export default Pin