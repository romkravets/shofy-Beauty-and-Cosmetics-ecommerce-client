import React from 'react';
// internal
import { ArrowRightSmTwo } from '@/svg';
import Link from 'next/link';

const TrendingSpecialPrd = () => {
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
                <div className="video-container">
                <iframe width="460" height="315" src="https://www.youtube.com/embed/Gs4UyiA3r1s?si=Ki-ttTDFuBJ68llk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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