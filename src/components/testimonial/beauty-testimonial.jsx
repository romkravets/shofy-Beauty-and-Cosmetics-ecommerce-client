import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import dynamic from 'next/dynamic';
// internal
import { beauty_testi_data } from '@/data/testimonial-data';

// slider setting 
const slider_setting = {
  slidesPerView: 2,
  spaceBetween: 24,
  pagination: {
    el: ".tp-testimoinal-slider-dot-3",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-testimoinal-slider-button-next-3",
    prevEl: ".tp-testimoinal-slider-button-prev-3",
  },
  breakpoints: {
    '992': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  }
}

const BeautyTestimonial = () => {
  return (
    <>
      <section className="tp-testimonial-area pt-115 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-3 mb-45 text-center">
              <span className="tp-section-title-pre-3">
                  Теплі слова 
                </span>
                <h3 className="tp-section-title-3">Відгуки про майстра</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-slider-3">
                <Swiper {...slider_setting} modules={[Pagination, Navigation]} className="tp-testimoinal-slider-active-3 swiper-container">
                  {beauty_testi_data.map((item) => (
                    <SwiperSlide key={item.id} className="tp-testimonial-item-3 p-relative z-index-1">
                    <div className="tp-testimonial-content-3" style={{ position: 'relative', width: '100%', height: '750px' }}>
                      <Image
                        src={item.user}
                        alt="user img"
                        fill
                        style={{
                          objectFit: 'cover',
                          borderRadius: 10
                        }}
                      />
                    </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-testimoinal-slider-dot-3 tp-swiper-dot-border text-center mt-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(BeautyTestimonial), { ssr: false });