import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/featured/Home'
import AboutUs from '../components/featured/AboutUs'

const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
        </Routes>
    )
}

export default AllRoutes 