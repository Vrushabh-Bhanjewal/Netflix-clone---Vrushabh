import React from 'react';
// import navbanner from '../../assets/hero-title.png';
import banner from '../../assets/hero_title.png'
import style from './home.module.css'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Hero() {
  return (
    <div className={style.hero}>
        <img className={style['hero-img']} src="/hero_banner.jpg" />
        <div className={style.capt}>
            <img src={banner} alt="" />
            <p>Hakan is a young shopkeeper whose modern world gets turned upside down when he learns that he is connected to a secret ancient order that is tasked with protecting Istanbul from an immortal enemy. He struggles to choose between his duties as the Protector and a new love he comes across.</p>
            <div className={style.btns}>
                <NavLink to={`/player/585839`}><div className={style.btn1}><span className={style.icon}><FaPlay/></span> Play Now </div></NavLink>
                <NavLink to={`/player/585839`}><div className={style.btn2}><span className={style.icon}><FaInfoCircle/></span> More Info </div></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Hero