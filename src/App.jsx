import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MyBookings from "./components/MyBookings";
import SearchPageHeader from "./components/SearchPageHeader";
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";

/* Booking page layout EXACTLY as you want */
const BookingPage = () => {
  return (
    <>
      <SearchPageHeader />
      <MyBookings />
      <DownloadAppSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* BOOKING PAGE */}
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
