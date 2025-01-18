import "./rideHistoryDetail.css";
import map from "../../../assests/tripMap.png";

const RideHistoryDetail = () => {
  return (
    <div className="ride-history-detail">
      <button className="back-to-trips">Back to trips</button>
      <div className="user-trip">
        <span className="mb-8 text-[28px] font-bold">Your Trip</span>
        <span className="text-xl font-semibold mb-7">
          7:43 AM, Wednesday December 20 2023 with AJAY KUMAR
        </span>
        <img src={map} className="mb-8" />
        <span className="mb-4 text-xl font-bold">Rate trip</span>
        <div className="flex items-center justify-between mb-9">
          <ul className="flex gap-2">
            <li>
              <i className="bi bi-star" style={{ fontSize: "35px" }}></i>
            </li>
            <li>
              <i className="bi bi-star" style={{ fontSize: "35px" }}></i>
            </li>
            <li>
              <i className="bi bi-star" style={{ fontSize: "35px" }}></i>
            </li>
            <li>
              <i className="bi bi-star" style={{ fontSize: "35px" }}></i>
            </li>
            <li>
              <i className="bi bi-star" style={{ fontSize: "35px" }}></i>
            </li>
          </ul>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="border-b-2" style={{ color: "#f3f3f3" }}></div>
        <span className="mb-4 text-xl font-bold mt-8">Trip details</span>
        <span className="flex gap-2 items-center mb-4">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Road</title>
            <path
              d="M23 23 17.5 1h-4v5h-3V1h-4L1 23h9.5v-5h3v5H23Zm-12.5-8V9h3v6h-3Z"
              fill="currentColor"
            ></path>
          </svg>
          25.88 kilometers
        </span>
        <span className="flex gap-2 items-center mb-4">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Clock</title>
            <path
              d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z"
              fill="currentColor"
            ></path>
          </svg>
          1 h 19 min
        </span>
        <span className="flex gap-2 items-center mb-4">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Tag</title>
            <path d="m10 24 12-12V2H12L0 14l10 10Z" fill="currentColor"></path>
          </svg>
          ₹420.00
        </span>
        <span className="flex gap-2 items-center mb-4">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Credit card</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 4h22v4H1V4Zm0 7h22v9H1v-9Z"
              fill="currentColor"
            ></path>
          </svg>
          Cash
        </span>
        <div className="flex gap-4 mb-8">
          <button className="trip-detail-btn">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Receipt</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 23V1h18v22l-5.5-3-3.5 3-3.5-3L3 23ZM7 9h10V6H7v3Zm10 3H7v3h10v-3Z"
                fill="currentColor"
              ></path>
            </svg>
            View receipt
          </button>
          <button className="trip-detail-btn">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Paper airplane</title>
              <path
                d="M2 1v8.2L9.5 12 2 14.8V23l22-11L2 1Z"
                fill="currentColor"
              ></path>
            </svg>
            Resend receipt
          </button>
          <button className="trip-detail-btn">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Download</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.3 5h.2c3 0 5.5 2.5 5.5 5.5S20.5 16 17.5 16h-2v-5h-7v5h-2c-3 0-5.5-2.5-5.5-5.5S3.5 5 6.5 5h.2c.7-2.3 2.8-4 5.3-4s4.6 1.7 5.3 4Zm-6.8 14.6V13h3v6.6l3.5-2.3v3.4L12 24l-5-3.3v-3.4l3.5 2.3Z"
                fill="currentColor"
              ></path>
            </svg>
            Download invoice
          </button>
        </div>
        <div className="border-b-2" style={{ color: "#f3f3f3" }}></div>
        <span className="mb-4 text-xl font-bold mt-8">Route</span>
        <div className="from-to">
          <div className="flex gap-8">
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                color="#000000"
              >
                <title>Circle</title>
                <path
                  d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">
                Sector 4, Urban Estate, Gurgaon Rural, Gurugram, Haryana 122001,
                India
              </span>
              <span className="text-sm mt-1" style={{ color: "rgb(75, 75, 75)" }}>
                12:27 PM
              </span>
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                color="#000000"
              >
                <title>Square</title>
                <path d="M2 2h20v20H2V2Z" fill="currentColor"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-semibold">
                ESSEL TOWER, Sector 28, Sushant Lok Phase I, Gurugram, Haryana
                122022, India
              </span>
              <span className="text-sm mt-1" style={{ color: "rgb(75, 75, 75)" }}>
                12:50 PM
              </span>
            </div>
          </div>
        </div>
        <div className="border-b-2 mt-12 mb-8" style={{ color: "#f3f3f3" }}></div>
        <div className="flex items-center justify-between mb-9">
          <span className="flex">
            <svg
              fill="none"
              height="36"
              viewBox="0 0 36 36"
              width="36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.98485 23.9136L7.01515 27.0425V22.2526V15.6085H3.98485V23.9136Z"
                fill="#276EF1"
              ></path>
              <path
                d="M32.0152 23.9136L28.947 27.0425V22.2526V15.6085H32.0152V23.9136Z"
                fill="#276EF1"
              ></path>
              <path
                d="M10.197 28.5491H8.56818C7.73484 28.5491 7.01559 27.8537 7.01559 27.0039V15.6085H10.197C11.0303 15.6085 11.7121 16.3038 11.7121 17.1537V27.0039C11.7121 27.8537 11.0303 28.5491 10.197 28.5491Z"
                fill="#000000"
              ></path>
              <path
                d="M3.98485 23.9136V18.4283C3.45455 18.4283 3 18.8919 3 19.4327V22.9092L3.98485 23.9136Z"
                fill="#000000"
              ></path>
              <path
                d="M17.8106 4.0972C14.1364 4.17445 10.8788 6.06725 8.94698 9.00301L8.98485 9.04164C9.81819 9.85284 11.1061 9.89147 11.9394 9.04164C13.4546 7.4965 15.5379 6.49216 17.8485 6.45353H18C20.4242 6.45353 22.6212 7.53513 24.2121 9.27341C25.0076 10.1619 26.3712 10.1619 27.2046 9.31204C25.197 6.18314 21.7121 4.05857 17.8106 4.0972Z"
                fill="#000000"
              ></path>
              <path
                d="M25.803 28.5491H27.4318C28.2651 28.5491 28.947 27.8537 28.947 27.0039V15.6085H25.803C24.9697 15.6085 24.2879 16.3038 24.2879 17.1537V27.0039C24.2879 27.8537 24.9697 28.5491 25.803 28.5491Z"
                fill="#000000"
              ></path>
              <path
                d="M32.0152 23.9136V18.4283C32.5455 18.4283 33 18.8919 33 19.4327V22.9092L32.0152 23.9136Z"
                fill="#000000"
              ></path>
              <path
                d="M18.1136 34.9999C19.3479 34.9999 20.3485 33.9796 20.3485 32.7209C20.3485 31.4622 19.3479 30.4418 18.1136 30.4418C16.8794 30.4418 15.8788 31.4622 15.8788 32.7209C15.8788 33.9796 16.8794 34.9999 18.1136 34.9999Z"
                fill="#000000"
              ></path>
              <path
                d="M29.4394 7.07162C26.8258 3.28603 22.4697 0.852438 17.5833 1.00695C13.1515 1.16147 9.28788 3.44055 6.82576 6.83985C5.04545 9.31207 3.98485 12.3637 3.98485 15.6085H7.01515V15.2995C7.01515 12.9818 7.69697 10.8186 8.90909 9.00304C10.8788 6.10591 14.1364 4.17449 17.8106 4.09723C21.7121 4.01997 25.197 6.18317 27.1667 9.3507C28.303 11.1276 28.9489 13.3578 28.9489 15.5982H32.0156V15.2995C32.0535 12.2092 31.0682 9.38933 29.4394 7.07162Z"
                fill="#A9C9FF"
              ></path>
              <path
                d="M29.0985 26.888V27.9696C29.0985 30.1715 27.3182 31.987 25.1591 31.987H20.2348C20.3106 32.2188 20.3864 32.4892 20.3864 32.7596C20.3864 33.03 20.3485 33.3004 20.2348 33.5321H25.197C28.1894 33.5321 30.6515 31.0213 30.6515 27.9696V25.3429L29.0985 26.888Z"
                fill="#A9C9FF"
              ></path>
            </svg>
            <span className="mx-6 text-lg font-semibold">Get help</span>
          </span>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default RideHistoryDetail;
