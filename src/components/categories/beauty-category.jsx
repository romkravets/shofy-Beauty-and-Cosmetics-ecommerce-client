import React from "react";
import Link from "next/link";
import { ArrowRightSm } from "@/svg";

const BeautyCategory = () => {

  let content = null;

  const data = [
    {
    img: '/assets/img/category/1.jpeg',
    parent: 'догляду для різних типів шкіри'
  },
  {
    img: '/assets/img/category/2.jpeg',
    parent: 'косметики та кісточок'
  },
  {
    img: '/assets/img/category/3.jpg',
    parent: 'прості схеми без стресу'
  },
  {
    img: '/assets/img/category/4.jpg',
    parent: 'підтон твоєї кольорової гамми'
  },
]

    
    content = data.map((item, index) => (
      <Link
        key={index}
        target="_blank"
        href="https://t.me/+ShQlJzyD7MA0ZDRi"
        className="col-lg-3 col-sm-6"
        aria-label={`${index}`} rel="noopener noreferrer"
      >
      <div>
        <div className="tp-category-item-3 p-relative text-center z-index-1 fix mb-30">
          <div
            className="tp-category-thumb-3 include-bg"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <div className="tp-category-content-3 transition-3">
            <div className="tp-category-btn-3">
            <h3 className="tp-category-title-3">
                {item.parent}
            </h3>
              <div
                className="cursor-pointer tp-link-btn tp-link-btn-2"
                target="_blank"
                href="https://t.me/+ShQlJzyD7MA0ZDRi"
              >
                Розпочати зараз
                <ArrowRightSm />
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    ));
  
  return (
    <>
      <section className="tp-category-area pt-95">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="tp-section-title-wrapper-3 mb-45">
                <span className="tp-section-title-pre-3">
                  Програма курсу
                </span>
                <h3 className="tp-section-title-3">Ти отримаєш розбір</h3>
              </div>
            </div>
          </div>
          <div className="row">{content}</div>
          {/* <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <svg viewBox="0 0 24 24" height="60px" width="60px" fill="#BD844C"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H15" stroke="rgb(255, 87, 51)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 9L12 15" stroke="rgb(255, 87, 51)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <svg version="1.0"  height="40px" width="40px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#F76D57" d="M6,60c0,1.104,0.896,2,2,2h20V30H6V60z"></path> <path fill="#F76D57" d="M4,16c-1.104,0-2,0.895-2,2v8c0,1.104,0.896,2,2,2h24V16H4z"></path> <path fill="#F76D57" d="M36,62h20c1.104,0,2-0.896,2-2V30H36V62z"></path> <path fill="#F76D57" d="M60,16H36v12h24c1.104,0,2-0.896,2-2v-8C62,16.895,61.104,16,60,16z"></path> </g> <g> <path fill="#394240" d="M60,14H47.279C48.944,12.535,50,10.393,50,8c0-4.418-3.582-8-8-8s-8,3.582-8,8v6h-4V8c0-4.418-3.582-8-8-8 s-8,3.582-8,8c0,2.393,1.056,4.535,2.721,6H4c-2.211,0-4,1.789-4,4v8c0,2.211,1.789,4,4,4v30c0,2.211,1.789,4,4,4h48 c2.211,0,4-1.789,4-4V30c2.211,0,4-1.789,4-4v-8C64,15.789,62.211,14,60,14z M28,62H8c-1.104,0-2-0.896-2-2V30h22V62z M28,28H4 c-1.104,0-2-0.896-2-2v-8c0-1.105,0.896-2,2-2h24V28z M22,14c-3.313,0-6-2.686-6-6c0-3.312,2.687-6,6-6s6,2.688,6,6v6H22z M34,62 h-4V30h4V62z M34,28h-4V16h4V28z M36,8c0-3.312,2.687-6,6-6s6,2.688,6,6c0,3.314-2.687,6-6,6h-6V8z M58,60c0,1.104-0.896,2-2,2H36 V30h22V60z M62,26c0,1.104-0.896,2-2,2H36V16h24c1.104,0,2,0.895,2,2V26z"></path> <path fill="#394240" d="M22,4c-2.209,0-4,1.791-4,4s1.791,4,4,4h4V8C26,5.791,24.209,4,22,4z M24,10h-2c-1.104,0-2-0.896-2-2 c0-1.105,0.896-2,2-2s2,0.895,2,2V10z"></path> <path fill="#394240" d="M46,8c0-2.209-1.791-4-4-4s-4,1.791-4,4v4h4C44.209,12,46,10.209,46,8z M40,8c0-1.105,0.896-2,2-2 s2,0.895,2,2c0,1.104-0.896,2-2,2h-2V8z"></path> </g> <g> <rect x="30" y="30" fill="#F9EBB2" width="4" height="32"></rect> <rect x="30" y="16" fill="#F9EBB2" width="4" height="12"></rect> <path fill="#F9EBB2" d="M22,2c-3.313,0-6,2.688-6,6c0,3.314,2.687,6,6,6h6V8C28,4.688,25.313,2,22,2z M26,12h-4 c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4V12z"></path> <path fill="#F9EBB2" d="M42,2c-3.313,0-6,2.688-6,6v6h6c3.313,0,6-2.686,6-6C48,4.688,45.313,2,42,2z M42,12h-4V8 c0-2.209,1.791-4,4-4s4,1.791,4,4S44.209,12,42,12z"></path> </g> </g> </g></svg>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BeautyCategory;
