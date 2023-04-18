import {
  EcoFriendlyInfo, Footer, ImageGallery,
  LandingSection,
  Nav,
  ProductColorSelector,
  ProductHighlights,
  ProductImages,
  Reviews, VideoFeature
} from "../index";

export const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <LandingSection/>
      <ProductHighlights/>
      <ProductImages/>
      <ProductColorSelector/>
      <Reviews/>
      <EcoFriendlyInfo/>
      <VideoFeature/>
      <ImageGallery/>
      <Footer/>
    </div>
  )
}