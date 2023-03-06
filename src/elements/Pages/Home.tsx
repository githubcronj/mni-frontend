import React from "react";
import DiscoverBanner from "../DiscoverBanner";
import Footer from "../Footer";
import GoogleSlider from "../GoogleSlider/GoogleSlider";
import MainBanner from "../MainBanner";
import { Pricing } from "../Pricing-Homepage/Pricing";
import RegisterBanner from "../RegisterBanner";
import StartupCard from "../TopStartup/StartupCard";
import {
  // TrendingCard,
  TrendingStories,
} from "../TrendingStories/TrendingStories";

const Home = () => {
  return (
    <>
      <GoogleSlider />
      <MainBanner />
      <DiscoverBanner />
      <StartupCard />
      <RegisterBanner />
      <Pricing />
      <TrendingStories />
      <Footer />
    </>
  );
};

export default Home;
