import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrollClass("scrolled");
    } else {
      setScrollClass("");
    }
  };

  return (
    <>
      <div
        className={`header-wrap d-flex align-items-center justify-content-between ${scrollClass}`}
      >
        {/* logo::start */}
        <Link className="logo-wrap" to="/">
          <h5 className="logo">FLOWDO</h5>
        </Link>
        {/* logo::end */}

        {/* search bar::start */}
        <div className="searchbar-wrap d-flex align-items-center">
          <input
            type="text"
            id="searchbar"
            className="search-area"
            placeholder="Search......"
          />
          <label htmlFor="searchbar" className="search-icon">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.775 35.8252C12.75 35.8252 6.15002 29.3002 6.15002 21.2002C6.15002 13.1752 12.675 6.5752 20.775 6.5752C28.875 6.5752 35.4 13.1002 35.4 21.2002C35.325 29.3002 28.8 35.8252 20.775 35.8252ZM20.775 8.7502C13.875 8.7502 8.25002 14.3752 8.25002 21.2752C8.25002 28.1752 13.875 33.8002 20.775 33.8002C27.675 33.8002 33.3 28.1752 33.3 21.2752C33.225 14.3752 27.6 8.7502 20.775 8.7502Z"
                fill="black"
              />
              <path
                d="M40.2751 42.3502L30.0751 32.2252L31.7251 30.5752L41.8501 40.7752L40.2751 42.3502Z"
                fill="black"
              />
            </svg>
          </label>
        </div>
        {/* search bar::end */}

        {/* right menu::start */}
        <div className="right-menu-wrap d-flex align-items-center justify-content-end">
          <div className="notification-tab">
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0032 24.2836V15.3689C29.0032 9.89526 26.0792 5.31309 20.9799 4.10069V2.88829C20.9799 1.40844 19.7675 0.213867 18.2877 0.213867C16.8078 0.213867 15.6311 1.40844 15.6311 2.88829V4.10069C10.514 5.31309 7.60784 9.87743 7.60784 15.3689V24.2836L5.29001 26.5836C4.16676 27.7069 4.95125 29.6325 6.53807 29.6325H30.0195C31.6063 29.6325 32.4086 27.7069 31.2854 26.5836L29.0032 24.2836ZM18.2877 34.9813C20.2489 34.9813 21.8536 33.3767 21.8536 31.4154H14.7218C14.7218 33.3767 16.3086 34.9813 18.2877 34.9813ZM8.98071 4.18984C9.72955 3.51232 9.74738 2.3534 9.0342 1.64022C8.35668 0.962704 7.25125 0.944875 6.5559 1.60456C3.50707 4.38596 1.40319 8.16581 0.725671 12.4092C0.565206 13.4968 1.40319 14.4774 2.50862 14.4774C3.36443 14.4774 4.11327 13.8534 4.2559 12.9976C4.79079 9.53867 6.50242 6.45418 8.98071 4.18984ZM30.073 1.60456C29.3598 0.944875 28.2544 0.962704 27.5768 1.64022C26.8637 2.3534 26.8993 3.49449 27.6303 4.17201C30.0908 6.43635 31.8202 9.52084 32.3551 12.9798C32.4799 13.8356 33.2288 14.4596 34.1024 14.4596C35.19 14.4596 36.0458 13.479 35.8675 12.3914C35.19 8.1658 33.104 4.40379 30.073 1.60456Z"
                fill="#09C4FF"
              />
            </svg>
          </div>

          <div className="my-account">
            <p className="account-menu">Account</p>
          </div>
        </div>
        {/* right menu::end */}
      </div>
    </>
  );
};

export default Header;
