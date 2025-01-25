import React from 'react';
import { useTimer } from 'react-timer-hook';
import { ArrowRightSmTwo } from '@/svg';
import collection_thumb from '@assets/img/product/collection/collection-1.jpg';
import collection_thumb_2 from '@assets/img/product/collection/1.jpeg';
import Timer from '../common/timer';
import Link from 'next/link';

const BeautyOfferBanner = () => {
  const expiryTimestamp = new Date('2023-8-16');
  const { seconds, minutes, hours, days } = useTimer({expiryTimestamp});
  return (
    <>
      <section className="tp-collection-area pt-20">
        <div className="container">
            <div className="row gx-2 gy-2 gy-md-0">
              <div className="col-xl-7 col-md-6">
                  <div className="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix">
                    <div className="tp-collection-thumb include-bg include-bg transition-3" 
                    style={{backgroundImage:`url(${collection_thumb.src})`}}></div>
                    <div className="tp-collection-content">
                        <span style={{color:'#FF5733', fontSize: 20}}>Подарунок!</span>
                        <h3 className="tp-collection-title">
                          <Link 
                           target="_blank"
                           href="https://t.me/+ShQlJzyD7MA0ZDRi"
                          >Знижка -25% на косметику <br/> якою я працюю</Link>
                        </h3>
                        <div className="tp-collection-btn">
                          <Link 
                            target="_blank"
                            href="https://t.me/+ShQlJzyD7MA0ZDRi"
                            className="tp-btn">
                              Дізнатись більше
                              {" "}<ArrowRightSmTwo/>
                          </Link>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="col-xl-5 col-md-6">
                  <div className="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix">
                    <div className="tp-collection-thumb has-overlay include-bg transition-3" style={{backgroundImage:`url(${collection_thumb_2.src})`}} ></div>
                  </div>
              </div>
            </div>
            {/* <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-5">
                  <div className="tp-collection-offer-wrapper mt-20">
                    <p>Discover our Beauty Selection <span>75% Extra Discount</span> for your...</p>
                  </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5">
                  <div className="tp-collection-countdown d-flex align-items-center justify-content-center justify-content-md-start ml-20 mt-20">
                    <div className="tp-product-countdown" data-countdown data-date="Sep 30 2024 20:20:22">
                        <div className="tp-product-countdown-inner">
                          <ul>
                              <li><span>{days}</span> Days</li>
                              <li><span>{hours}</span> Hrs</li>
                              <li><span>{minutes}</span> Min</li>
                          </ul>
                          {/* <Timer expiryTimestamp={time} /> */}
                        {/* </div>
                    </div>
                    <div className="tp-product-countdown has-second" data-countdown data-date="Sep 30 2024 20:20:22">
                        <div className="tp-product-countdown-inner">
                          <ul>
                              <li><span suppressHydrationWarning>{seconds}</span> Sec</li>
                          </ul>
                        </div>
                    </div>
                  </div>
              </div>
            </div> */}
        </div>
      </section> 
    </>
  );
};

export default BeautyOfferBanner;