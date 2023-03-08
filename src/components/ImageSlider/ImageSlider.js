import './ImageSlider.scss';
import React, { useRef } from 'react';
import image1 from '../../assets/png/image-1.png';
import image2 from '../../assets/png/image-2.png';
import image3 from '../../assets/png/image-3.png';
import image4 from '../../assets/png/image-4.png';
import Previous from '../../assets/icons/left.svg';
import Next from '../../assets/icons/next.svg';

function ImageSlider() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -480,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 480,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="container">
                <button className="container__button" onClick={scrollLeft}>
                    <img src={Previous} alt="" />
                </button>
                <div className="slider" ref={sliderRef}>
                    <div className="slider__item">
                        <img className="slider__item--image" src={image1} alt="" />
                        <div className="slider__item--column">
                            <div className="slider__item--column--text">SallyStreamer v.APRICOT</div>
                            <div className="slider__item--column--txt">EA Stream - monday March 14, 2022</div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <img className="slider__item--image" src={image2} alt="" />
                        <div className="slider__item--column">
                            <div className="slider__item--column--text">SallyStreamer v. ACIE</div>
                            <div className="slider__item--column--txt">EA Stream - Friday March 17, 2022</div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <img className="slider__item--image" src={image3} alt="" />
                        <div className="slider__item--column">
                            <div className="slider__item--column--text">SallyStreamer</div>
                            <div className="slider__item--column--txt">EA Stream - Tuesday March 21, 2023</div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <img className="slider__item--image" src={image4} alt="" />
                        <div className="slider__item--column">
                            <div className="slider__item--column--text">SallyStreamer v. Azmanosis</div>
                            <div className="slider__item--column--txt">EA Stream - Friday March 24, 2023</div>
                        </div>
                    </div>
                </div>
                <button className="container__button" onClick={scrollRight}>
                    <img src={Next} alt="" />
                </button>
            </div>
        </>
    )
}
export default ImageSlider;