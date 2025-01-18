import React, { useState } from "react";
import "./MobileHeader.css";
import HamburgerDrawer from "../hamburgerDrawer/HamburgerDrawer";

const MobileHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("Hamburger clicked!");
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="mobile-header">
      <HamburgerDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      <div className="text-2xl font-bold">Uber</div>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        onClick={toggleDrawer} // Attach onClick directly
        style={{ cursor: "pointer" }} // Ensure it's visually clickable
      >
        <title>Three lines</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 4H1v3h22V4Zm0 7H1v3h22v-3ZM1 18h22v3H1v-3Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default MobileHeader;
