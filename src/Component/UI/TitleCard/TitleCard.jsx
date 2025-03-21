import React from 'react'
import style from './title.module.css'
import cards_data from '../../../assets/cards/Cards_data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomDot = ({ onClick, active }) => (
  <li
    onClick={onClick}
    style={{
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: active ? '#e50914' : '#888',
      margin: '0 6px',
      cursor: 'pointer',
      transition: 'all 0.3s',
    }}
  />
);


function TitleCard({title}) {
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
  return (
    <div className={style.title}>
      <h1>{title}</h1>
      <Carousel responsive={responsive} 
       swipeable={true}
       draggable={true}
       infinite={true}
       showDots={true}
       renderButtonGroupOutside
       customDot={<CustomDot />}
       autoPlay={true}
       className={style.cards}>
        {
          cards_data.map((curr,index)=>{
            return <div key={index} className={style.card}>
              <img src={curr.image} className={style['card-img']} alt={curr.name} />
              <p className={style['card-name']}>{curr.name}</p>
            </div>
          })
        }
        </Carousel>
    </div>
  )
}

export default TitleCard