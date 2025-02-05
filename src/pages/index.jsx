import { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import BeautyBanner from "@/components/banner/beauty-banner";
import BeautyCategory from "@/components/categories/beauty-category";
import BeautyOfferBanner from "@/components/offer-banner/beauty-offer-banner";
import TrendingSpecialPrd from "@/components/products/beauty/trending-special-prd";
import BeautyTestimonial from "@/components/testimonial/beauty-testimonial";
import FeatureAreaTwo from "@/components/features/feature-area-2";
import Footer from "@/layout/footers/footer";
import Accordion from "@/components/accordion/Accordion";
import { accordionData } from "@/data/accordion";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Aнастасія Кравець" />
      <BeautyBanner />
      <BeautyCategory />
      <div className="container mt-85">
        <div className="tp-section-title-wrapper-3 mb-45">
          <span className="tp-section-title-pre-3">Програма курсу</span>
          <h3 className="tp-section-title-3">Теми уроків</h3>
        </div>
        <div className="row d-flex justify-content-between"  style={{marginBottom: 40}}>
          <div className="col">
            <span className="tp-section-title-pre-3 title-padding">Вступ - розбір</span>
            <p className="fontR">Важливо розуміти свій тип шкіри, адже це впливає на вибір доглядових засобів і косметики.
              Косметика, як і догляд, повинна відповідати особливостям обличчя
              та підкреслювати природну красу. Розглянемо, як правильно
              визначити свій тип шкіри, доглядати за нею та підбирати косметику,
              враховуючи будову обличчя та його кісткову структуру та кольорові підтони.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-4 col-lg-3">
            <span className="tp-section-title-pre-3 title-padding">
              Урок 1 - Clean makeup
            </span>
            <p className="fontR">
              Природний макіяж із мінімальною кількістю продуктів, що підкреслює
              натуральну красу шкіри. Він фокусується на свіжості, легкому сяйві
              та доглянутому вигляді без важких текстур і яскравих акцентів.
            </p>
          </div>
            <div className="col-12 col-md-4 col-lg-3">
              <span className="tp-section-title-pre-3 title-padding">Урок 2 - Nude</span>
              <p className="fontR">
                Натуральний макіяж, виконаний у нюдових відтінках, який створює
                ефект свіжого, доглянутого обличчя без яскравих акцентів. Він
                підкреслює природну красу, використовуючи легкі текстури.
              </p>
          </div>
            <div className="col-12 col-md-4 col-lg-3">
              <span className="tp-section-title-pre-3 title-padding">
                Урок 3 - Макіяж New Look
              </span>
              <p className="fontR">
                Класичний образ у стилі Dior 1940-х років із виразними чорними
                стрілками та червоними губами. Він створює елегантний і жіночний
                вигляд, поєднуючи чітку графіку очей із чуттєвим акцентом на
                губах.
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <span className="tp-section-title-pre-3 title-padding">
                Урок 4 - Latte smokey eyes
              </span>
              <p className="fontR">
                М’який димчастий макіяж очей у теплих кавових відтінках, що
                створює ефект глибокого й виразного погляду. Він поєднує
                розтушовані коричневі тони для
                натурального образу.
              </p>
            </div>
        </div>
      </div>
      <TrendingSpecialPrd />
      <BeautyOfferBanner />
      <BeautyTestimonial />
      <FeatureAreaTwo />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title-wrapper-3 text-center col-xl-12 mb-25">
              <h3 className="tp-section-title-3">Часті питання</h3>
            </div>
          </div>
          <div className="accordion mb-35">
            {accordionData.map(({ title, content, link }, index) => (
              <Accordion
                key={index}
                title={title}
                content={content}
                link={link}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer style_3={true} />
    </Wrapper>
  );
}
