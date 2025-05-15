import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../css/shared/Header.css'

const Header = ({logo, page}) => {
    let [clicked, setClicked] = useState(page==="about" ? false : true);
    useEffect(()=>{
      if(page==="about") setClicked(false);
      else setClicked(true);
    },[]) 
    let navigate = useNavigate();


  return (
    
    <>
     <div className="header">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="navigation">
            <label className={clicked ? 'clicked' : ''} onClick={()=>{setClicked(!clicked); navigate('/')}}>Home</label>
            <label className={clicked==false ? 'clicked' : ''} onClick={()=>{setClicked(!clicked); navigate('/about')}}>About Us</label>
        </div>
     </div>
    </>
    
  )
}

export default Header