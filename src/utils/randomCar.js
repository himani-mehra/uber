
export const generateRandomCoordinates = (center, radius = 0.005) => {
  const randomOffset = () => (Math.random() - 0.5) * radius * 2;
  return {
    latitude: center.latitude + randomOffset(),
    longitude: center.longitude + randomOffset(),
  };
};

export const generateRandomOrientation = () => {
  return Math.random() * 360;
};

export const generateRandomCars = (center) => {
  const numberOfCars = Math.floor(Math.random() * 15) + 10;
  const cars = [];

  for (let i = 0; i < numberOfCars; i++) {
    cars.push({
      latitude: generateRandomCoordinates(center).latitude,
      longitude: generateRandomCoordinates(center).longitude,
      orientation: generateRandomOrientation(),
    });
  }

  return cars;
};
