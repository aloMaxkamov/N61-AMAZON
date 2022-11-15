import { useState, useEffect, useRef } from 'react';
import c from './HeroBanner.module.css';
import images from '../../dummy-data.json'

const HeroBanner = () => {
  const carouselWrapperEl = useRef();
  const [currentImage, setCurrentImage] = useState(0);
  
  const swipeRight = () => {
    if(currentImage < images.length - 1){
      setCurrentImage(currentImage => currentImage + 1)
    }
    else{
      setCurrentImage(0)
    }
  }

  const swipeLeft = () => {
    if(currentImage > 0){
      setCurrentImage(currentImage => currentImage - 1)
    }
    else{
      setCurrentImage(images.length - 1)
    }
  }

  useEffect(() => {
    carouselWrapperEl.current.scrollLeft = currentImage * carouselWrapperEl.current.offsetWidth;
  }, [currentImage])
  // ga bog'liq

  return (
    <div className={c.carousel}>
      <button data-btn-type="left" className={c.carousel__btn} onClick={swipeLeft}>Pre</button>
      <div className={c.carouselWrapper} ref={carouselWrapperEl}>
        {
          images.map((carouselItem, index) => 
            <div key={index}>
              <img className={c.carouselItem} src={carouselItem} alt="" />
            </div>  
          )
        }
      </div>
    <div className={c.dots}>
      {
        images.map((dot, index) => 
          <div style={currentImage === index ? {background: "dodgerblue", transform: "scale(1.3)"} : null} onClick={() => {
            setCurrentImage(index)
          }} className={c.dot} key={index}></div>  
        )
      }
    </div>
    <button className={c.carousel__btn} data-btn-type="right"  onClick={swipeRight}>Next</button>
    </div>
  )
}

export default HeroBanner