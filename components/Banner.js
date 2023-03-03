"use client"
import React from 'react'
import Image from 'next/image';
import '../styles/banner.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

const images = [
    "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn1.jpg",
    "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn2.jpg",
    "https://raw.githubusercontent.com/devat-youtuber/travel-nextjs13beta-images/main/bn3.jpg",
]

const Banner = () => {
    return (
        <section id='home' className='banner'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="img-container"
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image src={image} alt={image} width={1920} height={1280} priority />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </section>
    )
}

export default Banner