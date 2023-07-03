import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const cx = classNames.bind(styles);

const slideImages = [
    {
      url: 'https://i.imgur.com/Wmk13cH.png',
      sub: 'T-shirt / Tops',
      title: 'Summer Value Pack',
      headline: 'cool / colorful / comfy',
      btn: 'Shop Now',
    },
    {
      url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMDE0NDAlMjA3MTZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      sub: 'Low Price',
      title: 'High Coziness',
      headline: 'UPTO 50% OFF',
      btn: 'Shop Now',
    },
    {
      url: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMDE0NDAlMjA3MTZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      sub: 'Beyoung Presents',
      title: 'Breezy Summer Style',
      headline: 'UPTO 50% OFF',
      btn: 'Shop Now',
    },
  ];
   

function SimpleSlider() {
    const [current,setCurrent] = useState(0);

    console.log(slideImages[current].url);

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "160px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };
      
      const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "160px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };

    const slide = {
        width: '1440px',
        height: '716px',
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${slideImages[current].url})`,
        backgroundSize: 'cover',
    }


    const goToPrevious = () => {
        const isFirstSlide = current === 0;
        const newIndex = isFirstSlide ? slideImages.length - 1 : current - 1;
        setCurrent(newIndex);
      };
      const goToNext = () => {
        const isLastSlide = current === slideImages.length - 1;
        const newIndex = isLastSlide ? 0 : current + 1;
        setCurrent(newIndex);
      };
    
    return ( 
        <>
            <div className={cx('slide-container')}>
                <FaChevronLeft style={leftArrowStyles} onClick={() => goToPrevious()}></FaChevronLeft>
                <div style={slide}>
                    <div className={cx('content-slider')}>
                        <span className={cx('sub-slider')}>{slideImages[current].sub}</span>
                        <h2 className={cx('title-slider')}>{slideImages[current].title}</h2>
                        <span className={cx('headline-slider')}>{slideImages[current].headline}</span>
                        <button className={cx('btn-slider')}>{slideImages[current].btn}</button>
                    </div>
                </div>
                <FaChevronRight style={rightArrowStyles} onClick={() => goToNext()}></FaChevronRight>
            </div>
        </>
    );
}

export default SimpleSlider;