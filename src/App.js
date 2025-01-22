import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import MobileHeader from "./components/mobile/mobileHeader/MobileHeader";
import Body from "./components/body/body";
import Activity from "./components/activity/activity";
import MobilePackage from "./components/mobile/mobilePackage/mobilePackage";
import MobileRental from "./components/mobile/mobileRental/mobileRental";
import MobileShuttle from "./components/mobile/mobileShuttle/mobileShuttle";
import MobileReserve from "./components/mobile/mobileReserve/mobileReserve"
import React, { useState, useEffect } from "react";
import LocationPrompt from "./components/locationPrompt";
import Promos from "./components/promos/Promos"
import "./App.css";

function App() {
  const [activeOption, setActiveOption] = useState("ride");
  const [userLocation, setUserLocation] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleLocationUpdate = (location) => {
    setUserLocation(location);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="app">
        <LocationPrompt onLocationUpdate={handleLocationUpdate} />

        {isMobile ? (
          <div className="mobile-header-class">
            <MobileHeader />
          </div>
        ) : (
          <div className="header-class">
            <Header onOptionClick={handleOptionClick} />
          </div>
        )}

        <div className="body-class">
          <Routes>
            <Route
              path="/"
              element={
                <Body activeOption={activeOption} userLocation={userLocation} />
              }
            />
            <Route path="/activity" element={<Activity />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/package" element={<MobilePackage />} />
            <Route path="/rental" element={<MobileRental />} />
            <Route path="/shuttle" element={<MobileShuttle />} />
            <Route path="/reserve" element={<MobileReserve />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
