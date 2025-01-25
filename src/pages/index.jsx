import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import BeautyBanner from '@/components/banner/beauty-banner';
import BeautyCategory from '@/components/categories/beauty-category';
import BeautyOfferBanner from '@/components/offer-banner/beauty-offer-banner';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import BeautyTestimonial from '@/components/testimonial/beauty-testimonial';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import Footer from '@/layout/footers/footer';

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
      <Footer style_3={true} />
    </Wrapper>
  )
}
