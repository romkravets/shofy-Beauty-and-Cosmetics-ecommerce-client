import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import BeautyBanner from '@/components/banner/beauty-banner';
import BeautyCategory from '@/components/categories/beauty-category';
import BeautyOfferBanner from '@/components/offer-banner/beauty-offer-banner';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import BeautyTestimonial from '@/components/testimonial/beauty-testimonial';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import Footer from '@/layout/footers/footer';
import Accordion from "@/components/accordion/Accordion";
import { accordionData } from "@/data/accordion";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle='Aнастасія Кравець'/>
      <BeautyBanner/>
      <BeautyCategory/>
      <BeautyOfferBanner/>
      <TrendingSpecialPrd/>
      <BeautyTestimonial/>
      <FeatureAreaTwo/>
      <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-3 text-center col-xl-12 mb-25">
                <h3 className="tp-section-title-3">Часті питання</h3>
              </div>
            </div>
      <div className="accordion mb-35">
        {accordionData.map(({ title, content, link }, index) => (
          <Accordion key={index} title={title} content={content} link={link} />
        ))}
      </div>
    </div>
    </div>
      <Footer style_3={true} />
    </Wrapper>
  )
}
