import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import "../slider.css";




const ImageSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.sliderdata.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.sliderdata.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = props.sliderdata.map((item) => {
    return (
      <CarouselItem
      
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img className="d-block w-100  " src={item.image} alt={'liquor store'} />
        
      </CarouselItem>
    );
  });

  return (
    <div className = "carousel-div">
    <Carousel 
      className = 'car'
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators  items={props.sliderdata} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl  direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export {ImageSlider};