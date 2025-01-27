import React, { useEffect, useRef } from "react";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import carLogo from "../../assests/car-marker.png";
import { generateRandomCars } from "../../utils/randomCar";
import "./map.css"

if (typeof window !== "undefined") {
  window.L = L;
}

const Map = ({ userLocation }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);
  const carMarkersRef = useRef([]);
  const routeControlRef = useRef(null);

  const updateCarMarkers = (center) => {
    carMarkersRef.current.forEach((marker) =>
      mapInstance?.current?.removeLayer(marker)
    );
    carMarkersRef.current = [];

    const cars = generateRandomCars(center);
    cars.forEach((randomCar) => {
      const randomAngle = randomCar.orientation;
      const randomIcon = L.divIcon({
        className: "car-icon",
        html: `<img src="${carLogo}" style="transform: rotate(${randomAngle}deg); width: 48px; height: 48px;" />`,
        iconSize: [48, 48],
        iconAnchor: [24, 48],
        popupAnchor: [0, -32],
      });

      const marker = L.marker([randomCar.latitude, randomCar.longitude], {
        icon: randomIcon,
      }).addTo(mapInstance.current);
      carMarkersRef.current.push(marker);
    });
  };

  useEffect(() => {
    if (typeof window === "undefined" || !userLocation) return;

    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        center: [userLocation.latitude, userLocation.longitude],
        zoom: 15,
        zoomControl: false, // Disable the default zoom control
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(mapInstance.current);

      // Set zoom control position to bottom-right
      L.control
        .zoom({
          position: "bottomright",
          border:"none",
          borderRadius: "18px"
        })
        .addTo(mapInstance.current);

      const pickup = [12.9255, 77.6247];
      const dropoff = [12.9764, 77.7044];

      if (routeControlRef.current) {
        mapInstance.current.removeControl(routeControlRef.current);
      }

      routeControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(userLocation.latitude, userLocation.longitude),
          L.latLng(pickup),
          L.latLng(dropoff),
        ],
        routeWhileDragging: true,
        show: false,
        createMarker: () => null,
        addWaypoints: false,
        fitSelectedRoutes: false,
      }).addTo(mapInstance.current);

      setTimeout(() => {
        document.querySelector(".leaflet-routing-container").style.display =
          "none";
      }, 1000);
    }

   const customIcon = L.divIcon({
     className: "user-location-icon",
     html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Radio button selected</title>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor"></path>
    </svg>`,
     iconSize: [24, 24],
     iconAnchor: [12, 12],
     popupAnchor: [0, -12],
   });


    if (!markerRef.current) {
      markerRef.current = L.marker(
        [userLocation.latitude, userLocation.longitude],
        { icon: customIcon }
      )
        .addTo(mapInstance.current)
        .openPopup();
    } else {
      markerRef.current.setLatLng([
        userLocation.latitude,
        userLocation.longitude,
      ]);
    }

    // Update car markers every 8 seconds
    const interval = setInterval(() => {
      updateCarMarkers(userLocation);
    }, 8000);

    return () => {
      clearInterval(interval);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      if (routeControlRef.current) {
        routeControlRef.current = null;
      }
    };
  }, [userLocation]);


  return <div className="map-dimensions" ref={mapRef}></div>;
};

export default Map;