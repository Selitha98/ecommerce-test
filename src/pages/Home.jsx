import React from "react";
import ImageSlider from "../components/ImageSlider";
import Categories from "../components/Categories";
import LatestItems from "../components/LatestItems";
import DiscountBanner from "../components/DiscountBanner";
import ServiceCards from "../components/ServiceCards";

function Home() {
  return (
    <div>
      <ImageSlider />
      <Categories />
      <LatestItems />
      <DiscountBanner />
      <ServiceCards />
    </div>
  );
}

export default Home;
