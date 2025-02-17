import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cosmetics, Meckoup, VeganProduct, Woman } from "@/svg";

// slider setting
const slider_setting = {
};

// slider data
const slider_data = [
  {
    id: 1,
    //bg: slider_bg_1,
    subtitle: "Авторський онлайн курс Анастасії Кравець",
    title: "МАКІЯЖ ДЛЯ СЕБЕ",
  },
];

// feature item 
function FeatureItem({ icon, title }) {
  return (
    <div className="tp-slider-feature-item-3 d-flex mb-30">
      <div className="tp-slider-feature-icon-3">
        <span>
          {icon}
        </span>
      </div>
      <div className="tp-slider-feature-content-3">
        <h3 className="tp-slider-feature-title-3">
          {title}
        </h3>
      </div>
    </div>
  )
}

const BeautyBanner = () => {
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
        <Swiper
          {...slider_setting}
          className="tp-slider-active-3 swiper-container"
        >
          {slider_data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="tp-slider-item-3 tp-slider-height-3 p-relative d-flex align-items-center"
              style={{ backgroundColor: '#F6F7F9', position: "relative" }}
              >
              <div
                className="tp-slider-thumb-3"
              ></div>
                <div className="tp-slider-overlay"></div>

              <div className="container">
                <div className="row align-items-center margin-bottom-space">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="tp-slider-content-3">
                      <span style={{fontFamily: "'Jost', sans-serif"}}>Авторський онлайн курс Анастасії Кравець</span>
                      <h3 className="tp-slider-title-3">
                        МАКІЯЖ ДЛЯ <span className="tp-slider-sub-3">СЕБЕ</span>
                      </h3>
                      <p className="tp-slider-p-1">Навчись створювати свій ідеальний макіяж:</p>
                      <div className="tp-slider-feature-3 d-flex flex-wrap align-items-center p-relative z-index-1 mb-15">
                        <FeatureItem icon={<Cosmetics />} title={<>MakeUp<br /> <span className="tp-slider-sub-3 sub-bold">15</span> / <span className="tp-slider-sub-3 sub-bold">40</span> хвилин</>} />
                        <FeatureItem icon={<VeganProduct />} title={<>Всього за <br />  <span className="tp-slider-sub-3 sub-bold">5</span> кроків</>} />
                      </div>
                      <div className="tp-slider-feature-3 d-flex flex-wrap align-items-center p-relative z-index-1 mb-15">
                      <FeatureItem icon={<Meckoup />} title={<>Створення <br />  <span className="tp-slider-sub-3 sub-bold">стилю</span></>} />
                      <FeatureItem icon={<Woman />} title={<>Розбір <br />  <span className="tp-slider-sub-3 sub-bold">зовнішності</span></>} />
                      </div>
                      <div className="tp-slider-btn-3">
                        <Link
                          className="tp-btn tp-btn-border tp-btn-border-white"
                          target="_blank"
                          href="https://t.me/+ShQlJzyD7MA0ZDRi"
                        >
                          Приєднатися до курсу 🔥
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default BeautyBanner;
