import React from 'react'
import Slider from 'react-slick'
import Account from './Account';

const LoginOrSingup = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };
    return (
        <div className='relative h-[750px] md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
            <Slider {...settings}>
                <div>
                    <img className="w-full h-[750px] md:h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
                </div>
                <div>
                    <img className="w-full h-[750px] md:h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
                </div>
            </Slider>
            <div className="absolute inset-0 z-10 grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 items-center md:px-20 px-6 md:flex-row flex-col">
                <div>
                    <img className='w-56' src="https://solingenturkiye.net/wp-content/uploads/2020/04/get.png" alt="getir logo" />
                    <h3 className='pt-6 text-3xl text-white font-semibold'>Dakikalar icinde
                        <br />kapinizda
                    </h3>
                </div>
                <Account />
            </div>
        </div>
    )
}

export default LoginOrSingup