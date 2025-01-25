import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper';
import Image from 'next/image';
// internal
import special_thumb from '@assets/img/product/special/big/special-big-1.jpg';
import { ArrowNextSm, ArrowPrevSm, ArrowRightSmTwo, PlusTwo } from '@/svg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ErrorMsg from '@/components/common/error-msg';
import ProductItem from './product-item';
import { HomeThreeTrendingPrdLoader } from '@/components/loader';
import Link from 'next/link';

// slider setting 
const sliderSetting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  pagination: {
    el: ".tp-special-slider-dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-special-slider-button-next",
    prevEl: ".tp-special-slider-button-prev",
  }
}

const TrendingSpecialPrd = () => {
  const { data: products, isError, isLoading } =
    useGetProductTypeQuery({ type: 'beauty', query: `new=true` });
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeThreeTrendingPrdLoader loading={isLoading}/>
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0, 7);
    content = (
      <Swiper {...sliderSetting} modules={[Pagination,Navigation,EffectFade]} className="tp-special-slider-active swiper-container">
        {product_items.map((item) => (
          <SwiperSlide key={item._id} className="tp-special-item grey-bg-9">
            <ProductItem product={item} prdCenter={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
  return (
    <>
      <section className="tp-special-area fix">
        <div className="container">
          <div className="col-lg-6 col-md-8 pt-95">
              <div className="tp-section-title-wrapper-3 mb-45">
                <span className="tp-section-title-pre-3">
                  Фрагмент курсу
                </span>
                <h3 className="tp-section-title-3">Як проходить курс</h3>
              </div>
            </div>
          <div className="row" style={{display: 'flex', alignItems: 'center'}}>
            <div className="col-xl-5 col-md-6">
              <div className="tp-special-slider-thumb">
                <div className="tp-special-thumb">
                <p style={{fontSize: 18}}>Наш онлайн курс складається з детальних відеоуроків на YouTube, які ти можеш переглядати в зручний для тебе час.</p>
                <p style={{fontSize: 18}}>Кожен урок побудований так, щоб ти могла крок за кроком освоїти основи макіяжу для себе.</p>
                <p style={{fontSize: 18}}>Усі матеріали, включаючи PDF-інструкції та персоналізовані схеми, доступні одразу після реєстрації.</p>
                <p style={{fontSize: 18}}>В процесі навчання ти можеш обговорювати свої результати у закритій групі з іншими учасницями.</p>
                </div>
              </div>
              <div className="row align-items-center pt-20">
              <div className="tp-collection-btn">
                <Link  
                target="_blank"
                href="https://t.me/+ShQlJzyD7MA0ZDRi" 
                className="tp-btn" style={{backgroundColor: '#BD844C', color: '#fff'}}>
                    Дізнатись більше
                    {" "}<ArrowRightSmTwo/>
                </Link>
              </div>
          </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div className="tp-special-wrapper">
                <div className="tp-special-slider">
                <div class="video-container">
                <iframe width="460" height="315" src="https://www.youtube.com/embed/Gs4UyiA3r1s?si=Ki-ttTDFuBJ68llk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default TrendingSpecialPrd;