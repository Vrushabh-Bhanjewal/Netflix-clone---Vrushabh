import React from 'react'
import style from './error.module.css'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'
import bgimg from '../../../assets/RedPlanet.png'

export const BackgroundImg=()=>{
    return <img className={style['bg-img']} src={bgimg} alt="" />
}

function ErrorPage() {
    const error=useRouteError()
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate(-1)
    }
    console.log(error)
  return (
    <div>
        <BackgroundImg/>
        <div className={style['content']}>
            <h1>{error.status}</h1>
            <h1>{error.statusText}</h1>
            <h1>{error.data}</h1>
            <div className={style.btns}>
                <NavLink to={'/'}><div>Go Home</div></NavLink>
                <NavLink onClick={handleBack}><div>Go Back</div></NavLink>
            </div>
        </div>
    </div>
  )
}
export default ErrorPage