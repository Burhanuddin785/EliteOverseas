import React from 'react'
import '../../css/shared/HeroSec.css'
import { useNavigate } from 'react-router-dom'

const HeroSec = () => {
  let navigate = useNavigate();
  return (
    <div className="heroSec">
      <div className="leftAligned">
        <div className="heroTitle">Connecting Businesses Across Borders</div>
        <div className="heroSubline">Trusted partner in global trade and logistics</div>
        <div className="heroBtn" onClick={()=>{navigate('/about')}}>Learn more about us</div>
      </div>
    </div>
  )
}

export default HeroSec