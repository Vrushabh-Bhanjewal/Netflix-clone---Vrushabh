import React, { useState, useTransition } from 'react'
import style from './search.module.css'
import { BackgroundImg } from '../../Component/UI/Error Page/ErrorPage'
import { TitleLoader } from '../../Component/UI/TitleCard/TitleCard'
import { getSearch } from '../../Component/API/api'
import { NavLink } from 'react-router-dom'
function Search() {
  const [movie,setMovie] =useState()
  const [data,setData] =useState()
  console.log(movie)

  const handleSearch=async (e)=>{
    e.preventDefault()
    e.stopPropagation()

    let res= await getSearch(movie)
    if(res.status==200){
      console.log(res)
      setData(res.data.results)
    }
  }
  const imageBase="https://image.tmdb.org/t/p/original";
  return (
    <div>
      <BackgroundImg/>
      <div className={style.box}>
        <form  >
          <input 
          type="text" 
          value={movie} 
          placeholder='Search More...'
          onChange={e=>setMovie(e.target.value)} 
          className={style.inp}/>
          <button onClick={handleSearch} className={style.sbtn}>Search</button>
        </form>
      </div>
      <div className={style.cards}>
       {
        data?.map((curr)=>{
          return (<>
            <div className={style.card}>
              <NavLink to={`/player/${curr.id}`}>
              <img className={style.img} src={imageBase+curr.backdrop_path} alt="" />
              <h1 className={style.title}>{curr.title}</h1>
              </NavLink>
            </div>
          </>)
        })
       }

      </div>
    </div>
  )
}

export default Search