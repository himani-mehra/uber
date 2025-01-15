

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Activity from "./components/activity/activity";
import React, { useState } from "react";
import LocationPrompt from "./components/locationPrompt";
import Map from "./components/map/map";

function App() {
  const [activeOption, setActiveOption] = useState("ride");
  const [userLocation, setUserLocation] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleLocationUpdate = (location) => {
    setUserLocation(location); // Update location state
  };

  return (
    <Router>
      <div className="app">
        <LocationPrompt onLocationUpdate={handleLocationUpdate} />
        <div className="header-class">
          <Header onOptionClick={handleOptionClick} />
        </div>
        <div className="body-class">
          <Routes>
            <Route
              path="/"
              element={
                <Body activeOption={activeOption} userLocation={userLocation} />
              }
            />
            <Route path="/activity" element={<Activity />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
