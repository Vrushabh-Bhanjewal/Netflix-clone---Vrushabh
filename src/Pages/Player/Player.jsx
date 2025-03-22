import React from 'react'
import style from './player.module.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { DetailMovie } from '../../Component/API/api'
import { FaInfoCircle, FaPlay } from 'react-icons/fa'

function Player() {
  const movie=useParams()

  const {data,isLoading,isError,error }=useQuery({
    queryKey:['detail'],
    queryFn:()=>DetailMovie(movie.movieId),
    // staleTime: 1000 * 60 * 5,
    // gcTime: 1000 * 60 * 10,   
    // refetchOnWindowFocus: false,
  })

  console.log(movie,data)
  const imageBase="https://image.tmdb.org/t/p/original";
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div className='container'>
    <div
      style={{ 
        backgroundImage: `url( ${imageBase.concat(data.backdrop_path)})`, 
        // backgroundSize: 'cover', 
        // height: '80rem' 
      }}
      className={style['bg-img']}
      >
      <div className={style['hero-head']}>
        <h1>{data.title}</h1>
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
    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}  alt={movie.title} />
  </div>
  )
}

export default Player