import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { beauty_testi_data } from '@/data/testimonial-data';

const slider_setting = {
  slidesPerView: 3,
  //spaceBetween: 24,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  //freeMode: true,
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
        <div className="">
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
                  {beauty_testi_data.map((item, index) => (
                    <SwiperSlide key={index} className="tp-testimonial-item-3 p-relative z-index-1">
                    <div className="tp-testimonial-content-3" style={{ position: 'relative', height: '570px' }}>
                      <Image
                        src={item.user}
                        alt="user img"
                        fill
                        style={{
                          objectFit: 'contain',
                          borderRadius: 10
                        }}
                      />
                    </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-testimoinal-slider-dot-3 tp-swiper-dot-border text-center mt-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(BeautyTestimonial), { ssr: false });