import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import style from './footer.module.css'
function Footer() {
  return (
    <div className={`container ${style.foot}`}>
      <div className={style['foot-head']}>
        <div className={style.icon}><IoLogoYoutube /></div>
        <div className={style.icon}><FaTwitter/></div>
        <div className={style.icon}><FaXTwitter/></div>
        <div className={style.icon}><FaFacebookF/></div>
      </div>
      <div className={style['foot-body']}>
        <div className={style.info}>
          <p>Audio Description</p>
          <p>Inverster Relation</p>
          <p>Legal Notice</p>
        </div>
        <div className={style.info}>
          <p>Help Cnter</p>
          <p>Jobs</p>
          <p>Cookie Preference</p>
        </div>
        <div className={style.info}>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporation Information</p>
        </div>
        <div className={style.info}>
          <p>Media Cnter</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className={style['foot-end']}>
        <p>@Vrushabh Siddharth Bhanjewal</p>
      </div>
    </div>
  )
}

export default Footer