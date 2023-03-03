import React from "react";

const TankContainer = (props) => {
  return (
    <div className="tank-container">
      <div className="container-head d-flex align-items-center justify-content-between">
        <div className="tank-title">
          <h5 className="fluid-name">{props.name}</h5>
          <p className="subscription-detail">Subscription End: {props.date}</p>
        </div>
        <div className="tank-status">
          <svg
            width="74"
            height="73"
            viewBox="0 0 74 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_627_1188)">
              <path
                d="M54.9781 54.4967C64.9478 44.5269 64.9478 28.3628 54.9781 18.3931C45.0084 8.42342 28.8442 8.42336 18.8745 18.3931C8.9048 28.3628 8.90487 44.5269 18.8746 54.4967C28.8443 64.4664 45.0084 64.4664 54.9781 54.4967Z"
                fill="url(#paint0_radial_627_1188)"
              />
              <path
                d="M19.3085 32.6373C19.2259 32.7177 19.1604 32.8138 19.1157 32.92C19.071 33.0262 19.0481 33.1403 19.0483 33.2555C19.0485 33.3707 19.0718 33.4847 19.1169 33.5907C19.162 33.6967 19.2279 33.7926 19.3107 33.8727C19.4745 34.031 19.6942 34.118 19.9219 34.1146C20.1497 34.1112 20.3667 34.0176 20.5256 33.8545C29.5904 24.7897 44.2612 24.7908 53.326 33.8556C53.4875 34.0172 53.7066 34.1079 53.9351 34.1079C54.1636 34.1079 54.3827 34.0172 54.5443 33.8556C54.7058 33.6941 54.7966 33.4749 54.7966 33.2465C54.7966 33.018 54.7058 32.7989 54.5443 32.6373C44.8219 22.9149 29.0308 22.9149 19.3085 32.6373ZM23.8808 37.1823C23.7964 37.2644 23.7294 37.3627 23.6838 37.4712C23.6381 37.5798 23.6147 37.6964 23.6149 37.8141C23.6151 37.9319 23.6389 38.0484 23.685 38.1567C23.7311 38.2651 23.7984 38.3631 23.883 38.445C24.0504 38.6069 24.2751 38.6959 24.5079 38.6925C24.7408 38.6891 24.9627 38.5935 25.1253 38.4268C31.6498 31.9022 42.203 31.9022 48.7275 38.4268C48.8925 38.5918 49.1163 38.6845 49.3497 38.6845C49.5831 38.6845 49.8069 38.5918 49.972 38.4268C50.137 38.2617 50.2297 38.0379 50.2297 37.8045C50.2297 37.5711 50.137 37.3473 49.972 37.1823C42.7751 29.9853 31.0777 29.9853 23.8808 37.1823ZM28.4724 41.7124C28.384 41.7983 28.3138 41.9011 28.2658 42.0146C28.2179 42.1281 28.1932 42.2501 28.1932 42.3734C28.1932 42.4966 28.2179 42.6186 28.2658 42.7322C28.3138 42.8457 28.384 42.9485 28.4724 43.0344C28.6478 43.2044 28.8835 43.2978 29.1277 43.2942C29.372 43.2905 29.6048 43.1901 29.775 43.015C30.7132 42.0741 31.8278 41.3277 33.0549 40.8183C34.2821 40.309 35.5977 40.0468 36.9264 40.0468C38.255 40.0468 39.5706 40.309 40.7978 40.8183C42.0249 41.3277 43.1395 42.0741 44.0777 43.015C44.2507 43.188 44.4854 43.2853 44.7301 43.2853C44.9749 43.2853 45.2095 43.188 45.3826 43.015C45.5556 42.842 45.6528 42.6073 45.6528 42.3626C45.6528 42.1178 45.5556 41.8831 45.3826 41.7101C40.7203 37.0478 33.1347 37.0501 28.4724 41.7124ZM34.6471 44.6504C33.3934 45.904 33.3934 47.9554 34.6471 49.209C35.9007 50.4626 37.952 50.4626 39.2057 49.209C40.4593 47.9554 40.4593 45.904 39.2057 44.6504C37.9521 43.3968 35.9007 43.3968 34.6471 44.6504ZM35.5588 45.5621C36.3189 44.802 37.5338 44.802 38.2939 45.5621C39.0552 46.3234 39.0552 47.5383 38.2951 48.2984C37.5349 49.0586 36.3189 49.0574 35.5588 48.2973C34.7986 47.5371 34.7986 46.3223 35.5588 45.5621Z"
                fill="white"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_627_1188"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(36.9263 36.4449) rotate(45) scale(25.5291 25.529)"
              >
                <stop stop-color="#EBF9FD" stop-opacity="0.73" />
                <stop offset="1" stop-color="#09C4FF" />
              </radialGradient>
              <clipPath id="clip0_627_1188">
                <rect
                  width="51.0581"
                  height="51.0581"
                  fill="white"
                  transform="translate(0.822754 36.4448) rotate(-45)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container-body d-flex align-items-center justify-content-center">
        <div>
          <h5 className="flow-num">{props.flow}</h5>
          <p className="flow-type">Current Flow</p>
          <p className="unit">litre/min</p>
        </div>
      </div>
    </div>
  );
};

export default TankContainer;