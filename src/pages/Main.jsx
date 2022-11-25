import React from "react";
import Banner from "./Banner/Banner";
import DealOnFurniture from "./DealOnFurniture/DealOnFurniture";
import Home from "./Home/Home";
import Hotdeals from "./HotDeals/Hotdeals";
import Review from "./Review/Review";
import TodaysHotdeal from "./TodaysHotdeal/TodaysHotdeal";

export default function Main() {
  return (
    <div>
      <Home />
      <Hotdeals />
      <Banner />
      <TodaysHotdeal />
      <DealOnFurniture />
      <Review />
    </div>
  );
}
