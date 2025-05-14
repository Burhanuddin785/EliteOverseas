import React, { useEffect, useState } from 'react'
import '../../css/shared/SliderImg.css'

const SliderImg = ({slides}) => {
    const [imgIndex, setImgIndex] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setImgIndex(prev => (prev >= 3 ? 0 : prev + 1));
        },3000);

        return ()=> clearInterval(interval);
    },[])

  return (
    <div className='SliderImg' style={{backgroundImage : `url(${slides[imgIndex].url})`}}>
        <div className="SliderContent">

        <div className="SliderHeading">We are around the world</div>
        <div className="sliderTitle">{slides[imgIndex].title}</div>
        </div>
    </div>
  )
}

export default SliderImg