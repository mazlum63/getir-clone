import React, { useEffect, useState } from 'react'
import campaignsData from '../../assets/api/banners.json'
import Slider from 'react-slick'
import Campaign from './Campaign';
import { ArrowLeft, ArrowRight } from '../../assets/Icons';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            style={{ transform: 'translateY(-50%)', left: -25 }}
            className='text-black inline-block absolute top-1/2 w-8 hidden md:block'
        >
            <ArrowLeft />
        </button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            style={{ transform: 'translateY(-50%)', right: -25 }}
            className='text-black inline-block absolute top-1/2 w-8 hidden md:block'
        >
            <ArrowRight />
        </button>
    );
}
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
    ]
};

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
        setCampaigns(campaignsData)
    }, [])
    return (
        <div className="container mx-auto my-10 md:px-10">
            <h3 className='text-base font-semibold my-3'>Kampanyalar</h3>
            <Slider {...settings}>
                {campaigns && campaigns.map(campaign => (
                    <Campaign key={campaign.id} campaign={campaign} />
                ))}
            </Slider>
        </div>
    )
}

export default Campaigns