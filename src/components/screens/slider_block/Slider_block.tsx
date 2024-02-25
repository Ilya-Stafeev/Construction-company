import './Slider_block.scss'

import React, { useRef } from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider_block: React.FC = () => {
    const sliderRef = useRef<Slider>(null);

    const goToPrev = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  
    const goToNext = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
  
    const settings = {
      infinite: true, 
      slidesToShow: 3, 
      slidesToScroll: 1, 
      arrows: false,
      nextArrow: (
        <button className='slider-control next' onClick={goToNext}></button>
      ),
      prevArrow: (
        <button className='slider-control prev' onClick={goToPrev}></button>
      ),
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2, 
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1,
          },
        },
      ],
    }; 

    return(     
        <section className="slider">
            <div className="container">
                <div className="slider__row">
                    <div className="slider__col">
                        <h1 className='slider__title'>ГАЛЕРЕЯ</h1>  
                        <div className="slider__wrapper">
                            <button className='slider__btn prev' onClick={goToPrev}></button>
                            <Slider {...settings} ref={sliderRef} className='slider__block'>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery1.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery2.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery3.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery4.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery5.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery6.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery7.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery8.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery9.jpg" alt="gallery" />
                                </a>
                              </div>
                              <div className="slider__el">
                                <a className="slider__link" href="">
                                  <img className='slider__img' src="./gallery10.jpg" alt="gallery" />
                                </a>
                              </div>
                            </Slider>
                            <button className='slider__btn next' onClick={goToNext}></button>    
                        </div>                      
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Slider_block