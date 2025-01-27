import React from "react";
import "./DesktopReserve.css";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
const navigate = useNavigate();
  return (
    <div className="desktop-reserve-cover">
      <div className="desktop-reserve">
        <button className="desktop-next" onClick={() => navigate("/")}>
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <title>Arrow left</title>
            <path
              d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <div className="desktop-get-reserve">
          When do you want to be picked up?
        </div>
        <div className="desktop-reserve-details">
          <div className="desktop-reserve-input">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Calendar</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 8V4h-3V1h-3v3H7V1H4v3H1v4h22Zm0 15H1V10h22v13ZM8 14H5v3h3v-3Z"
                fill="currentColor"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Today"
              className="desktop-input-field"
            />
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Chevron down small</title>
              <path
                d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="desktop-reserve-input">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Clock</title>
              <path
                d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm6 13h-8V4h3v7h5v3Z"
                fill="currentColor"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Now"
              className="desktop-input-field"
            />
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
              <title>Chevron down small</title>
              <path
                d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="desktop-reserve-ride-details">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
          <title>Calendar</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 8V4h-3V1h-3v3H7V1H4v3H1v4h22Zm0 15H1V10h22v13ZM8 14H5v3h3v-3Z"
            fill="currentColor"
          ></path>
        </svg>
        Choose your pickup time up to 90 days in advance
      </div>
      <div className="desktop-reserve-ride-details">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
          <title>Hourglass</title>
          <path
            d="M19 5.5V4h1V1H4v3h1v1.5c0 2.95 1.83 5.47 4.41 6.5A7.002 7.002 0 0 0 5 18.5V20H4v3h16v-3h-1v-1.5c0-2.95-1.83-5.47-4.41-6.5A7.002 7.002 0 0 0 19 5.5ZM16 4v1.5c0 .53-.11 1.04-.3 1.5H8.3c-.19-.46-.3-.97-.3-1.5V4h8Zm0 14.5V20H8v-1.5c0-2.21 1.79-4 4-4s4 1.79 4 4Z"
            fill="currentColor"
          ></path>
        </svg>
        Extra wait time included to meet your ride
      </div>
      <div className="desktop-reserve-ride-details">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
          <title>Credit card</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 4h22v4H1V4Zm0 7h22v9H1v-9Z"
            fill="currentColor"
          ></path>
        </svg>
        Cancel at no charge up to 60 minutes in advance
      </div>
      <div className="desktop-see-terms">
        <u> See terms</u>
      </div>
      <div className="desktop-reserve-bottom-card">
        <div className="desktop-terms-header">
          <div>Reservations Terms and Conditions</div>
          <div>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
              style={{ stroke: "currentColor" }}
            >
              <path
                d="M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="desktop-terms-conditions">
          <div className="px-2 py-5">
            Trips booked with Reservations are subject to the following terms
            and conditions, which supplement other T&Cs you have agreed with
            Uber.
          </div>
          <div className="px-2 pb-5">
            Reservations made in advance may be subject to a Cancel Fee. Refer
            to the list below for more information on the cancellation charges
            which apply to your reservation.
          </div>
          <div className="px-2 pb-5">
            Once your driver arrives at your requested pickup location, you or
            your guest rider should meet the driver to begin the trip within the
            “wait time” period specified below. That wait time is included in
            your estimated fare. After the wait time, additional wait time
            charges may apply to your trip.
          </div>
          <div className="px-2 pb-5">
            However, if your driver is expected to be significantly late, we’ll
            let you know in advance, and you'll have 10 minutes from that notice
            to cancel at no charge.
          </div>
          //////////////////////////////////
          <div className="px-2 pb-5 font-semibold">XL Plus Intercity 3</div>
          <div>Cancellation Fee: ₹150.00</div>
          <div>Wait Time: 15 minutes.</div>
          <div>Free Cancellation Until: 60 minutes prior to trip.</div>
          <div>Reserved at least 30 minutes in advance.</div>
          <div className="pb-5"></div>
          <div className="px-2 pb-5 font-semibold">Uber Black Rentals</div>
          <div>Cancellation Fee: ₹150.00</div>
          <div>Wait Time: 15 minutes.</div>
          <div>Free Cancellation Until: 60 minutes prior to trip.</div>
          <div>Reserved at least 30 minutes in advance.</div>
          <div className="pb-5"></div>
          <div className="px-2 pb-5 font-semibold">XL + Rentals (Innova)</div>
          <div>Cancellation Fee: ₹150.00</div>
          <div>Wait Time: 15 minutes.</div>
          <div>Free Cancellation Until: 60 minutes prior to trip.</div>
          <div>Reserved at least 30 minutes in advance.</div>
          <div className="pb-5"></div>
          <div className="px-2 pb-5 font-semibold">Sedan Intercity</div>
          <div>Cancellation Fee: ₹150.00</div>
          <div>Wait Time: 15 minutes.</div>
          <div>Free Cancellation Until: 60 minutes prior to trip.</div>
          <div>Reserved at least 30 minutes in advance.</div>
          <div className="pb-5"></div>
          <div className="px-2 pb-5 font-semibold">Go Sedan</div>
          <div>Cancellation Fee: ₹150.00</div>
          <div>Wait Time: 15 minutes.</div>
          <div>Free Cancellation Until: 60 minutes prior to trip.</div>
          <div>Reserved at least 30 minutes in advance.</div>
          <div className="pb-5"></div>
          <div className="px-2 pb-5 font-semibold">Black SUV Intercity</div>
          <div>Cancellation Fee: ₹150.00</div>
          <div>Wait Time: 15 minutes.</div>
          <div>Free Cancellation Until: 60 minutes prior to trip.</div>
          <div>Reserved at least 30 minutes in advance.</div>
          <div className="pb-5"></div>
          <div className="px-2 pb-5">
            Eligible promotions will be applied to your scheduled ride or
            reservation price at the time your driver is prompted to begin
            traveling to your pickup location. Note that promotions are not
            eligible for use on Uber Taxi.
          </div>
          <div className="px-2 pb-5">
            Uber doesn't guarantee a driver will accept your ride request.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
