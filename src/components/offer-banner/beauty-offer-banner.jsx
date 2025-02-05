import React from "react";
import { ArrowRightSm } from "@/svg";
import collection_thumb from "@assets/img/product/collection/collection-1.jpg";
import collection_thumb_2 from "@assets/img/product/collection/1.jpeg";
import Link from "next/link";

const BeautyOfferBanner = () => {
  return (
    <>
      <section className="tp-collection-area pt-80">
        <div className="container">
          <div className="row gx-2 gy-2 gy-md-0">
            <div className="col-xl-5 col-md-6">
              <div className="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix">
                <div
                  className="tp-collection-thumb has-overlay include-bg transition-3"
                  style={{ backgroundImage: `url(${collection_thumb_2.src})` }}
                ></div>
              </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div className="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix">
                <div className="tp-collection-content">
                  <span style={{ color: "#FF5733", fontSize: 20 }}>
                    Про автора
                  </span>
                  <h3 className="tp-collection-title">Анастасія Кравець</h3>
                  <ul className="tp-collection-btn">
                    <li>У сфері краси вже 10 років</li>
                    <li>
                      Працюючи у салоні краси в центрі Тернополя, збирала
                      моделей на обкладинки журналу
                    </li>
                    <li>Була моделлю на beauty заходах</li>
                    <li>5 років розвивала свою студію краси «beauty_box»</li>
                    <li>Викладала курси офлайн</li>
                    <li>
                      збирала своїх клієнтів на випускні а потім на весілля
                    </li>
                    <li>У 2024 почала проводити курси макіяжу для себе</li>
                    <li>
                      Була спікером на майстер-класах для косметичних компаній
                    </li>
                    <li>
                      Маю маленьку донечку, яка теж обожнює робити «каміяж»
                    </li>
                    <li>
                      Будучи у декретній відпустці стала амбасадором міжнародної
                      компанії Farmasi
                    </li>
                    <li>Зараз у студії «Між нами дівчатами»</li>
                    <li>Випускаю свій перший онлайн проект «TasiaLook»</li>
                    <div style={{display: "flex", justifyContent: "center", marginTop: 10}}>
                    <div style={{display: "flex", width: '20%', justifyContent: "space-between"}}>
                      <div>
                        <a
                          href="https://www.instagram.com/beautybox_nk"
                          target="_blank"
                        >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="url(#instagramGradient)" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stop-color="#f09433"/>
                              <stop offset="25%" stop-color="#e6683c"/>
                              <stop offset="50%" stop-color="#dc2743"/>
                              <stop offset="75%" stop-color="#cc2366"/>
                              <stop offset="100%" stop-color="#bc1888"/>
                            </linearGradient>
                          </defs>
                          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0-2A7.5 7.5 0 0 0 0 7.5v9A7.5 7.5 0 0 0 7.5 24h9A7.5 7.5 0 0 0 24 16.5v-9A7.5 7.5 0 0 0 16.5 0h-9ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.51 5.51 0 0 1 12 6.5Zm0 9A3.5 3.5 0 1 0 8.5 12 3.5 3.5 0 0 0 12 15.5ZM18 5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
                        </svg>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.facebook.com/people/%D0%9D%D0%B0%D1%81%D1%82%D1%8F-%D0%9A%D1%80%D0%B0%D0%B2%D0%B5%D1%86%D1%8C-%D0%91%D0%BE%D0%B9%D0%BA%D0%BE/pfbid0RVnSy6RDzJ9j4DKwejXjqt3hbez8CdBidY4a5W7dnhtBS61GsG1VaPgWkUEU8cVkl/?name=xhp_nt__fb__action__open_user"
                          target="_blank"
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#4267B2"
                              d="M22.675 0h-21.35A1.325 1.325 0 0 0 0 1.325v21.351A1.324 1.324 0 0 0 1.325 24h11.494v-9.294h-3.13v-3.622h3.13v-2.67c0-3.1 1.894-4.785 4.658-4.785 1.325 0 2.464.099 2.796.143v3.242h-1.917c-1.505 0-1.796.715-1.796 1.763v2.308h3.59l-.467 3.622h-3.123V24h6.127A1.326 1.326 0 0 0 24 22.676V1.325A1.325 1.325 0 0 0 22.675 0Z"
                            />
                          </svg>{" "}
                        </a>
                      </div>
                    </div>
                    </div>
                  </ul>
                  <div></div>
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
