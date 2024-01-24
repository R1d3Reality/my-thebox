'use client'
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const SwiperComponent = () => {
    let mySwiper;
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mySwiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        return () => {
            mySwiper.destroy();
        };
    }, []);

    const handlePrevClick = () => {
        if (mySwiper) {
            mySwiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (mySwiper) {
            mySwiper.slideNext();
        }
    };

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className='slide-one'>
                        <div className='additional-info'>
                            <h3>
                                Feature Projects
                            </h3>
                            <p className='additional-info-txt'>
                                The National University of Architecture
                            </p>
                            <div className='additional-info-btn'>
                                <div onClick={handlePrevClick}>Prev</div>
                                <div onClick={handleNextClick}>Next</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className='slide-two'>
                        <div className='additional-info'>
                            <h3>
                                Feature Projects
                            </h3>
                            <p className='additional-info-txt'>
                                National Botanical Garden
                            </p>
                            <div className='additional-info-btn'>
                                <div onClick={handlePrevClick}>Prev</div>
                                <div onClick={handleNextClick}>Next</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperComponent;
