import React, { useEffect, useRef } from "react";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import carLogo from "../../assests/car-marker.png";
import { generateRandomCars } from "../../utils/randomCar";

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
      }).addTo(mapInstance.current);
    }

    const customIcon = L.icon({
      iconUrl: carLogo,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    if (!markerRef.current) {
      markerRef.current = L.marker(
        [userLocation.latitude, userLocation.longitude],
        { icon: customIcon }
      )
        .addTo(mapInstance.current)
        .bindPopup("You")
        .openPopup();
    } else {
      markerRef.current.setLatLng([userLocation.latitude, userLocation.longitude]);
    }

    const interval = setInterval(() => {
      updateCarMarkers(userLocation);
    }, 2000);

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

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }}></div>;
};

export default Map;