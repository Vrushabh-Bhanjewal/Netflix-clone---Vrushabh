import React from 'react'
import style from './player.module.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { DetailMovie } from '../../Component/API/api'
import { FaInfoCircle, FaPlay } from 'react-icons/fa'
import { TitleLoader } from '../../Component/UI/TitleCard/TitleCard'
import { IoArrowBackOutline } from "react-icons/io5";
function Player() {
  const movie=useParams()
  const navigate=useNavigate()
  const {data,isLoading,isError,error }=useQuery({
    queryKey:['detail'],
    queryFn:()=>DetailMovie(movie.movieId),
    // staleTime: 1000 * 60 * 5,
    // gcTime: 1000 * 60 * 10,   
    // refetchOnWindowFocus: false,
  })
  const hr=(data?.runtime/60).toFixed(1);
  const genereName=data?.genres.map(curr=>curr.name).join(', ')
  const lang=data?.spoken_languages.map((curr)=>curr.name).join(', ')
  console.log(movie,data)
  const imageBase="https://image.tmdb.org/t/p/original";
  if(isLoading){
    return <TitleLoader/>
  }
  return (
    <div className='container'>
    <div
      style={{ 
        // backgroundImage: `url( ${imageBase.concat(data.backdrop_path)})`, 
        // backgroundSize: 'cover', 
        // height: '80rem' 
        paddingBottom:'3rem'
      }}
      
      >
      <img src={imageBase.concat(data.backdrop_path)} alt="" className={style['bg-img']}/>
      <div className={style['hero-head']}>
        <h1 className={style.title}>{data.title}</h1>
        <p>{data.overview}</p>

        <div className={style['hero-btns']}>
          <div className={style.btn1}>
            <a href={data.homepage}>
              <span className={style.icon}><FaPlay/>
              </span> Play Now 
            </a>
          </div>

          <div className={style.btn2}>
            <a href={data.homepage}>
              <span className={style.icon}><FaInfoCircle/>
              </span> More Info 
            </a>
          </div>
           
        </div>

      </div>
    </div>

    <div className={style['hero-info']}>
     <NavLink to={'/'} className={style.back} >
        <IoArrowBackOutline/>
      </NavLink>
      <img className={style.poster} src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}  alt={movie.title} />
      <div className={style.content}>
        <p><span className={style.title}>{data.title}</span></p>
        <p><span className={style.key}>Release Date: </span> {data.release_date}</p>
        <p><span className={style.key}>Runtime: </span> {hr} hr</p>
        <p><span className={style.key}>Genres: </span> {genereName}</p>
        <p><span className={style.key}>Budget: </span> {data.budget}</p>
        <p><span className={style.key}>Language: </span> {lang}</p>
        <p><span className={style.key}>Votes Rating: </span> {data.vote_average}</p>
        <p><span className={style.key}>Votes Count: </span> {data.vote_count}</p>
      </div>
      
    </div>
  </div>
  )
}

export default Player