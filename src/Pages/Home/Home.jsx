import React from 'react'
import style from './home.module.css'
import Hero from './Hero'
import TitleCard from '../../Component/UI/TitleCard/TitleCard'

function Home() {
  return (
    <div className='container'>
      <Hero/>
      <div>
        <TitleCard title={'Popular on Netflix'} cate={'now_playing'}/>
        <TitleCard title={'Blockbuster Movies'} cate={'top_rated'}/>
        <TitleCard title={'Only on Netflix'} cate={'popular'}/>
        <TitleCard title={'Upcoming'} cate={'top_rated'}/>
        <TitleCard title={"Top Pick's"} cate={'upcoming'}/>
      </div>
    </div>
  )
}

export default Home