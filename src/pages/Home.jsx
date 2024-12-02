import React from "react";
import ImageSlider from "../components/ImageSlider";
import Categories from "../components/Categories";
import LatestItems from "../components/LatestItems";
import DiscountBanner from "../components/DiscountBanner";
import ServiceCards from "../components/ServiceCards";
import { useProductCategories } from "../hooks/useProducts";

function Home() {
  const { data: productCategories, isLoading, isError } = useProductCategories();
  return (
    <div>
      <ImageSlider />
      <Categories data={productCategories} isLoading={isLoading} isError={isError} />
      <LatestItems />
      <DiscountBanner />
      <ServiceCards />
    </div>
  );
}

export default Home;
