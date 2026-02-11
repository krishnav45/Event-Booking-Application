
import { useState } from "react";

import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import SearchPageHeader from "../components/SearchPageHeader";
import Carousel from "../components/Carousel";
import EventTrackingSection from "../components/EventTrackingSection";
import BlogNewsSection from "../components/BlogNewsSection";
import EventTrackerSection from "../components/EventTrackerSection";
import FaqSection from "../components/FaqSection";
import DownloadAppSection from "../components/DownloadAppSection";
import Footer from "../components/Footer";

import SearchResults from "../components/SearchResults";

import "../styles/landing.css";

const LandingPage = () => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [events, setEvents] = useState([]);

  const handleSearch = (data) => {
    setEvents(data);
    setIsSearchMode(true);
  };

  return (
    <>
      {!isSearchMode ? (
        <>
          <Hero />
          <SearchBox onSearch={handleSearch} />

          <Carousel />
          <EventTrackingSection />
          <BlogNewsSection />
          <EventTrackerSection />
          <FaqSection />
        </>
      ) : (
        <>
          <SearchPageHeader />
          <SearchResults events={events} />
        </>
      )}

      <DownloadAppSection />
      <Footer />
    </>
  );
};


export default LandingPage;
