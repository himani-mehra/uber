import { useState, useEffect } from "react";

const LocationPrompt = ({ onLocationUpdate }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Get current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        onLocationUpdate({ latitude, longitude });
      });
    }
  }, []);

};

export default LocationPrompt;
