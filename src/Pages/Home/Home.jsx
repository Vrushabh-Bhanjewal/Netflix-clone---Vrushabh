import React from 'react'
import style from './home.module.css'
import Hero from './Hero'
import TitleCard from '../../Component/UI/TitleCard/TitleCard'

function Home() {
  return (
    <div className='container'>
      <Hero/>
      <div>
        <TitleCard title={'Popular on Netflix'}/>
        <TitleCard title={'Blockbuster Movies'}/>
        <TitleCard title={'Only on Netflix'}/>
        <TitleCard title={'Upcoming'}/>
        <TitleCard title={"Top Pick's"}/>
      </div>
    </div>
  )
}

export default Home