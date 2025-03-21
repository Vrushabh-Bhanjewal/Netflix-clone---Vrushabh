import React from 'react'
import Navbar from '../UI/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../UI/Footer/Footer'

function AppLayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AppLayout