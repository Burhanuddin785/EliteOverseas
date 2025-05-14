import React from 'react'
import SliderImg from './SliderImg'
import '../../css/shared/CountrySlider.css'
import Gulf from '../../assets/pictures/flags/gulfCountries.png'
import Asian from '../../assets/pictures/flags/AsianCountries.png'
import Euro from '../../assets/pictures/flags/EuropeanUnion.png'
import Africa from '../../assets/pictures/flags/EastAfricanCountries.png'


const CountrySlider = () => {
    const slides = [
        {url:Gulf, title:"Gulf Countries"},
        {url:Asian, title:"Asian Countries"},
        {url:Euro, title:"Europian Union"},
        {url:Africa, title:"East Africa"}
    ]
  return (
    <div className='CountrySlider'><SliderImg slides={slides} /></div>
  )
}

export default CountrySlider