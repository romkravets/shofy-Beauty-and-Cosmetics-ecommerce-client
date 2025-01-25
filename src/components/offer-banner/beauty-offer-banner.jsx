import React from 'react';
import { ArrowRightSm } from '@/svg';
import collection_thumb from '@assets/img/product/collection/collection-1.jpg';
import collection_thumb_2 from '@assets/img/product/collection/1.jpeg';
import Link from 'next/link';

const BeautyOfferBanner = () => {
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
                              {" "}<ArrowRightSm/>
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
        </div>
      </section> 
    </>
  );
};

export default BeautyOfferBanner;