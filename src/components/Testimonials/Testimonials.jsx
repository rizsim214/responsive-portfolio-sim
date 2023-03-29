import React from 'react'
import { Data } from './Data';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
        <section className="testimonial container section">
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}    
                spaceBetween={50}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    "750": {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    "576": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "375": {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    }
                }}
                modules={[Pagination]}
            >
                {Data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt={title} className="testimonial__img" />

                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials