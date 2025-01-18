import React, { useState } from "react";
import mobileCourier from "../../../assests/mobile-courier.jpg";
import "./mobilePackage.css";

const MobilePackage = () => {
  const [selected, setSelected] = useState("send"); // Default to "send"

  const handleButtonClick = (button) => {
    setSelected(button);
  };

  return (
    <div className="mobile-package">
      <img className="courier-image" src={mobileCourier} alt="courier" />
      <div className="courier-info">
        <span className="courier-title">Courier</span>
        <span className="text-[20px]">
          Get packages delivered in the time it takes to drive there.
        </span>
        <div className="package-btns">
          <button
            className={`send-receive ${selected === "send" ? "active" : ""}`}
            onClick={() => handleButtonClick("send")}
          >
            Send a package
          </button>
          <button
            className={`send-receive ${selected === "receive" ? "active" : ""}`}
            onClick={() => handleButtonClick("receive")}
          >
            Receive a package
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobilePackage;
