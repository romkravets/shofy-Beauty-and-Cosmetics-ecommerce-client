import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderThree from '@/layout/headers/header-3';
import BeautyBanner from '@/components/banner/beauty-banner';
import BeautyCategory from '@/components/categories/beauty-category';
import BeautyFeatured from '@/components/features/beauty-featured';
import ProductArea from '@/components/products/beauty/product-area';
import BeautyOfferBanner from '@/components/offer-banner/beauty-offer-banner';
import ProductAreaTwo from '@/components/products/beauty/product-area-2';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import BeautyTestimonial from '@/components/testimonial/beauty-testimonial';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import InstagramAreaThree from '@/components/instagram/instagram-area-3';
import Footer from '@/layout/footers/footer';

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle='Головна'/>
      {/* <HeaderThree/> */}
      <BeautyBanner/>
      <BeautyCategory/>
      <BeautyOfferBanner/>
      <BeautyFeatured/>
      {/* <ProductArea/> */}
      {/* <ProductAreaTwo/> */}
      <TrendingSpecialPrd/>
      <BeautyTestimonial/>
      <FeatureAreaTwo/>
      {/* <InstagramAreaThree/> */}
      <Footer style_3={true} />
    </Wrapper>
  )
}
