import React from 'react';
import { ArrowRightSm } from '@/svg';
import collection_thumb from '@assets/img/product/collection/collection-1.jpg';
import collection_thumb_2 from '@assets/img/product/collection/1.jpeg';
import Link from 'next/link';

const BeautyOfferBanner = () => {
  return (
    <>
      <section className="tp-collection-area pt-80">
        <div className="container">
            <div className="row gx-2 gy-2 gy-md-0">
            <div className="col-xl-5 col-md-6">
                  <div className="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix">
                    <div className="tp-collection-thumb has-overlay include-bg transition-3" style={{backgroundImage:`url(${collection_thumb_2.src})`}} ></div>
                  </div>
              </div>
              <div className="col-xl-7 col-md-6">
                  <div className="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix">
                      <div className="tp-collection-content">
                        <span style={{color:'#FF5733', fontSize: 20}}>Про автора</span>
                        <h3 className="tp-collection-title">Анастасія Кравець</h3>
                        <ul className="tp-collection-btn">
                          <li>У сфері краси вже 10 років.</li>
                          <li>Працюючи у салоні краси в центрі Тернополя, збирала моделей на обкладинки журналу</li>
                          <li>Була моделлю на beauty заходах.</li>
                          <li>5 років розвивала свою студію краси «beauty_box».</li>
                          <li>Викладала курси офлайн.</li>
                          <li>збирала своїх клієнтів на випускні а потім на весілля.</li>
                          <li>У 2024 почала проводити курси макіяжу для себе.</li>
                          <li>Була спікером на майстер-класах для косметичних компаній.</li>
                          <li>Маю маленьку донечку, яка теж обожнює робити «каміяж».</li>
                          <li>Будучи у декретній відпустці стала амбасадором міжнародної компанії Farmasi.</li>
                          <li>Зараз у студії «Між нами дівчатами».</li>
                          <li>Випускаю свій перший онлайн проект «TasiaLook».</li>
                          {/* <Link 
                            target="_blank"
                            href="https://t.me/+ShQlJzyD7MA0ZDRi"
                            className="tp-btn">
                              Дізнатись більше
                              {" "}<ArrowRightSm/>
                          </Link> */}
                        </ul>
                        <div>

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

export default BeautyOfferBanner;