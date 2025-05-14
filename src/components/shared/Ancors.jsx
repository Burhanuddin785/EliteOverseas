import React from 'react'
import '../../css/shared/Anchors.css'
import pin from '../../assets/pictures/LocationPin.svg'
import Pin from './Pin'

const Ancors = () => {

    let cities = [
        {
            pin : pin,
            place:"MUNDRA"
        },
        {
            pin : pin,
            place:"MUMBAI"
        },
        {
            pin : pin,
            place:"NHAVASHEVA"
        },
        {
            pin : pin,
            place:"CHENNAI"
        },
        {
            pin : pin,
            place:"TUTICORIN"
        }
        
    ]

  return (
    <div className='anchors'>
        <div className="AncorHeading">Our Anchors Across India</div>
        {cities.map((cities, index)=>(
            <Pin Pin={cities.pin} Place={cities.place} index={index+1} />
        ))}
        
    </div>
  )
}

export default Ancors