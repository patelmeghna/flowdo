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
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8345 36.0937C12.8095 36.0937 6.20947 29.5687 6.20947 21.4687C6.20947 13.4437 12.7345 6.8437 20.8345 6.8437C28.9345 6.8437 35.4595 13.3687 35.4595 21.4687C35.3845 29.5687 28.8595 36.0937 20.8345 36.0937ZM20.8345 9.0187C13.9345 9.0187 8.30947 14.6437 8.30947 21.5437C8.30947 28.4437 13.9345 34.0687 20.8345 34.0687C27.7345 34.0687 33.3595 28.4437 33.3595 21.5437C33.2845 14.6437 27.6595 9.0187 20.8345 9.0187Z"
                fill="#1C5E85"
              />
              <path
                d="M40.3343 42.6187L30.1343 32.4937L31.7843 30.8437L41.9093 41.0437L40.3343 42.6187Z"
                fill="#1C5E85"
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
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9594 24.6119V15.6972C28.9594 10.2236 26.0353 5.64139 20.9361 4.42899V3.21659C20.9361 1.73674 19.7237 0.542168 18.2439 0.542168C16.764 0.542168 15.5873 1.73674 15.5873 3.21659V4.42899C10.4702 5.64139 7.56402 10.2057 7.56402 15.6972V24.6119L5.24619 26.9119C4.12293 28.0352 4.90743 29.9608 6.49425 29.9608H29.9756C31.5625 29.9608 32.3648 28.0352 31.2415 26.9119L28.9594 24.6119ZM18.2439 35.3096C20.2051 35.3096 21.8098 33.705 21.8098 31.7437H14.678C14.678 33.705 16.2648 35.3096 18.2439 35.3096ZM8.93689 4.51814C9.68572 3.84062 9.70355 2.6817 8.99038 1.96852C8.31286 1.291 7.20743 1.27318 6.51208 1.93287C3.46324 4.71426 1.35937 8.49411 0.681848 12.7375C0.521383 13.8251 1.35937 14.8057 2.46479 14.8057C3.32061 14.8057 4.06944 14.1817 4.21208 13.3259C4.74696 9.86697 6.45859 6.78248 8.93689 4.51814ZM30.0291 1.93287C29.316 1.27318 28.2105 1.291 27.533 1.96852C26.8198 2.6817 26.8555 3.82279 27.5865 4.50031C30.047 6.76465 31.7764 9.84914 32.3113 13.3081C32.4361 14.1639 33.1849 14.7879 34.0586 14.7879C35.1462 14.7879 36.002 13.8073 35.8237 12.7197C35.1462 8.49411 33.0601 4.73209 30.0291 1.93287Z"
                fill="#1C5E85"
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
