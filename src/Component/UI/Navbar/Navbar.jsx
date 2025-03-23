import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import style from './navbar.module.css'
import logo from "../../../assets/logo.png"
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className={` ${style.navcont}`}>
    <div className={`${style.navbar} container`}>

      <div className={style['nav-left']}>
        <figure className={style.logo}><NavLink to={'/'}>
          <img src={logo} alt="" />
        </NavLink>
        </figure>
        <ul className={style.list}>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div >
          <ul className={style['nav-right']}>
            <li><span><FaSearch /></span> {"  "}Search</li>
            <li><span><IoNotifications/></span></li>
            <li><FaUserAlt /></li>
            <li>Login</li>
          </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar