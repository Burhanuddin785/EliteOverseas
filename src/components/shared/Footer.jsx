import React from 'react'
import '../../css/shared/Footer.css'
import whatsapp from '../../assets/pictures/whatsapp.svg'
import facebook from '../../assets/pictures/facebook.svg'
import email from '../../assets/pictures/email.svg'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  let navigate = useNavigate();
  
  let openWhatsapp = ()=>{
    
    window.open(`https://wa.me/917509111306`,'_blank');
  }
  let openEmail = ()=>{
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@eliteoverseass.com`,'_blank');
  }
  return (
    <div className='footer'>
    <div className="top">
        <div className="link" onClick={()=>{navigate('/')}}>Home</div>
        <div className="link" onClick={()=>{navigate('/about')}}>About Us</div>
    </div>
    <div className="bottom">
        <div className="whatsapp" onClick={openWhatsapp}>Message us <img src={whatsapp} alt="WhatsApp" className="icon" /> </div>
        <div className='address'>205, Akashdeep Complex <br/> Sapna Sangeeta Road <br/> Indore, Madhya Pradesh</div>
        {/* <div className="facebook">Follow us  <img src={facebook} alt="Facebook" className="icon" /> </div> */}
        <div className="email" onClick={openEmail}>Reach us <img src={email} alt="Gmail" className="icon" /> </div>
    </div>

    </div>
  )
}

export default Footer