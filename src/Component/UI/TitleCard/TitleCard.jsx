import React, { useEffect, useState } from 'react'
import style from './title.module.css'
import cards_data from '../../../assets/cards/Cards_data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getTitleData } from '../../API/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';

const CustomDot = ({ onClick, active }) => (
  <li
    onClick={onClick}
    style={{
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: active ? '#e50914' : '#888',
      margin: '0 1rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
    }}
  />
);

export const TitleLoader=()=>{
  return (<>
  <div className={style.centerTitle}><div class={style.loader}></div></div>
  </>)
}

function TitleCard({title,cate}) {
  
  const {data,isPending,isLoading,isError,error,refetch} =
    useQuery({
    queryKey:['title'],
    queryFn:()=>getTitleData(cate),
    staleTime: 1000 * 60 * 5, // 5 minutes fresh
    gcTime: 1000 * 60 * 10,   // 10 minutes before garbage collection
    refetchOnWindowFocus: false,
  })
  // const movies=useQueryClient()
  // movies.setQueryData(prev=>console.log(prev))
  // console.log(data)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  if(isPending){
    return <TitleLoader/>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }
  return (
    <div className={style.title}>
      <h1>{title}</h1>
      <Carousel responsive={responsive} 
       swipeable={true}
       draggable={true}
       infinite={true}
      //  showDots={true}
      //  renderButtonGroupOutside
      //  customDot={<CustomDot />}
       autoPlay={true}
       className={style.cards}>
        {
          data?.results?.map((curr,index)=>{
            return <NavLink to={`/player/${curr.id}`}>
                <div key={index} className={style.card}>
                  <img src={"https://image.tmdb.org/t/p/w300/"+curr.poster_path} className={style['card-img']} alt={curr.name} />
                  <p className={style['card-name']}>{curr.title}</p>
                </div>
              </NavLink>
          })
        }
        </Carousel>
    </div>
  )
}

export default TitleCard