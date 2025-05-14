import React from 'react'
import Card from './cards'
import Expertise from '../../assets/pictures/expertise.png'
import Ethical from '../../assets/pictures/business-award.png'
import TrackRecord from '../../assets/pictures/log.png'
import '../../css/shared/WhatWePromise.css'
import { useNavigate } from 'react-router-dom'



const WhatWePromise = () => {
  let navigate = useNavigate();

  let promisecardd =[
    {
      icon: Expertise,
      heading:"Expertise and Experience",
      body:"With years of industry know-how, Elite Overseas brings unparalleled expertise in import-export operations. Our seasoned team navigates complex regulations and global logistics with ease, ensuring every client benefits from insightful strategies and precision-driven execution across every transaction. At Elite, we got you covered."
    },
    {
      icon: Ethical,
      heading:"Transparent and Ethical Practices",
      body:"Integrity drives everything we do. We maintain complete transparency in all dealings, adhere strictly to international compliance standards, and foster ethical relationships with clients and partners. Trust Elite Overseas for honest communication, fair processes, and unwavering professional standards that protect your interests at every step."
    },
    {
      icon: TrackRecord,
      heading:"Proven Track Record and Statistics",
      body:"Elite Overseas is backed by a consistent history of delivering results. From seamless import facilitation to client satisfaction, our success stories speak volumes. Our reliable systems and responsive service have earned us enduring trust across industries and borders — proving that we deliver what we promise."
    }
  ]

  return (
    <>
    <div className="WWPcontainer">
        <div className="WWPHeading">What we Promise</div>
        <div className="WWPcardsection">
            {promisecardd.map((card, index)=>(
              <Card icon={card.icon} heading={card.heading} body={card.body} />
            ))}
        </div>
        <div className="WWPbtn"><button onClick={()=>{navigate('/about')}}>Learn more about us</button></div>
    </div>
    </>
  )
}

export default WhatWePromise