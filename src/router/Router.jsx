import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Booking from '../components/pages/Booking/Booking'
import Dashboard from '../components/pages/Dashboard/Dashboard'
import Header from '../components/commons/Header/Header'
import Gallery from '../components/commons/Gallery/Gallery'
import Footer from '../components/commons/Footer/Footer'
import NotFound from '../components/pages/Not Found/NotFound'


const Router = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/booking' element= {<Booking/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*'element={<NotFound/>}/>      
    </Routes>
    <Gallery/>
    <Footer/>
    </>
    )
  }

export default Router

