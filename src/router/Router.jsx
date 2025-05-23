import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Booking from '../components/pages/Booking/Booking'
import Dashboard from '../components/pages/DashBoard/Dashboard'
import Header from '../components/common/Header/Header'
import Gallery from '../components/common/Gallery/Gallery'
import Footer from '../components/common/Footer/Footer'
import NotFound from '../components/pages/Not Found/NotFound'
import ReservationForm from '../components/common/ReservationForm/ReservationForm'
import ReservationCalendar from '../components/common/ReservationCalendar/ReservationCalendar'
import { ImageSearch } from '../components/imageSearch/ImageSearch'

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reservation-form" element={<ReservationForm />} />
        <Route path="/reservation-calendar" element={<ReservationCalendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Gallery />
      <Footer />
      <ImageSearch />
    </>
  )
}

export default Router



