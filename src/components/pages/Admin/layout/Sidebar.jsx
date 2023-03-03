import React from "react";
import SidebarIcon from "./SidebarIcon";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  let location = useLocation();

  return (
    <div className="sidebar-wrap">
      <SidebarIcon
        active={location.pathname === "/admin-panel" && "active"}
        icon={
          <svg
            width="46"
            height="51"
            viewBox="0 0 46 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1546 9.86367L23.0751 0.273569L35.6396 9.60841L45.4644 17.0401V50.6222H26.6571V33.0566H23.0611H19.5555V50.6222H0.717112L0.717041 33.8397V16.9948L10.1546 9.86367Z"
              fill="#9CDCFF"
            />
            <path
              d="M4.8669 46.4694H15.3996V28.9148H30.8476V46.4694H41.3804V19.0843L23.1236 5.3917L4.8669 19.0843V46.4694ZM0.653809 50.6825V16.9777L23.1236 0.125336L45.5935 16.9777V50.6825H26.6345V33.1279H19.6127V50.6825H0.653809Z"
              fill="#2993D5"
            />
          </svg>
        }
      />

      <SidebarIcon
        icon={
          <svg
            width="71"
            height="71"
            viewBox="0 0 71 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="9.0564"
              y="10.5368"
              width="52.5"
              height="53.9583"
              rx="6"
              fill="#9CDCFF"
            />
            <path
              d="M35.2699 52.8284C32.0859 52.8284 29.0356 53.351 26.1189 54.3961C23.2022 55.4413 20.4314 57.0819 17.8064 59.318V60.1201H52.8064V59.7555C50.3758 57.568 47.6415 55.8666 44.6033 54.6513C41.5651 53.4361 38.454 52.8284 35.2699 52.8284ZM13.4314 57.2034C16.2508 54.4326 19.5442 52.2816 23.3116 50.7503C27.079 49.2191 31.0772 48.4534 35.3064 48.4534C39.5356 48.4534 43.5217 49.2191 47.2647 50.7503C51.0078 52.2816 54.3133 54.4326 57.1814 57.2034V14.9118H13.4314V57.2034ZM35.3064 41.5993C32.5356 41.5993 30.1901 40.6392 28.2699 38.7191C26.3498 36.7989 25.3897 34.4534 25.3897 31.6826C25.3897 28.9118 26.3498 26.5663 28.2699 24.6461C30.1901 22.726 32.5356 21.7659 35.3064 21.7659C38.0772 21.7659 40.4227 22.726 42.3429 24.6461C44.263 26.5663 45.2231 28.9118 45.2231 31.6826C45.2231 34.4534 44.263 36.7989 42.3429 38.7191C40.4227 40.6392 38.0772 41.5993 35.3064 41.5993ZM35.3235 37.2243C36.8677 37.2243 38.1745 36.6838 39.2439 35.603C40.3133 34.522 40.8481 33.2095 40.8481 31.6655C40.8481 30.1213 40.3076 28.8145 39.2268 27.7451C38.1458 26.6757 36.8333 26.1409 35.2893 26.1409C33.7451 26.1409 32.4383 26.6814 31.3689 27.7622C30.2995 28.8431 29.7647 30.1556 29.7647 31.6997C29.7647 33.2439 30.3052 34.5507 31.386 35.6201C32.4669 36.6895 33.7794 37.2243 35.3235 37.2243ZM13.4314 64.4951C12.2647 64.4951 11.2439 64.0576 10.3689 63.1826C9.4939 62.3076 9.0564 61.2868 9.0564 60.1201V14.9118C9.0564 13.7451 9.4939 12.7243 10.3689 11.8493C11.2439 10.9743 12.2647 10.5368 13.4314 10.5368H18.171L22.9106 10.5368L47.7022 10.5368H52.4418H57.1814C58.3481 10.5368 59.3689 10.9743 60.2439 11.8493C61.1189 12.7243 61.5564 13.7451 61.5564 14.9118V60.1201C61.5564 61.2868 61.1189 62.3076 60.2439 63.1826C59.3689 64.0576 58.3481 64.4951 57.1814 64.4951H13.4314ZM35.3064 60.1201H52.8064H17.8064H35.3064Z"
              fill="#2993D5"
            />
          </svg>
        }
      />

      <SidebarIcon
        icon={
          <svg
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3064 11.3284C10.3064 8.01472 12.9927 5.32843 16.3064 5.32843H33.9876C35.6653 5.32843 37.2663 6.03084 38.4024 7.2653L43.1792 12.4556L48.3662 17.2223C49.6027 18.3585 50.3064 19.9609 50.3064 21.6401V49.3284C50.3064 52.6421 47.6201 55.3284 44.3064 55.3284H16.3064C12.9927 55.3284 10.3064 52.6421 10.3064 49.3284V11.3284Z"
              fill="#9CDCFF"
            />
            <path
              d="M14.0564 55.3284C13.0564 55.3284 12.1814 54.9534 11.4314 54.2034C10.6814 53.4534 10.3064 52.5784 10.3064 51.5784V9.07843C10.3064 8.07843 10.6814 7.20343 11.4314 6.45343C12.1814 5.70343 13.0564 5.32843 14.0564 5.32843H36.6189L50.3064 19.0159V51.5784C50.3064 52.5784 49.9314 53.4534 49.1814 54.2034C48.4314 54.9534 47.5564 55.3284 46.5564 55.3284H14.0564ZM34.7439 20.7034V9.07843H14.0564V51.5784H46.5564V20.7034H34.7439Z"
              fill="#2993D5"
            />
          </svg>
        }
      />

      <SidebarIcon
        icon={
          <svg
            width="71"
            height="71"
            viewBox="0 0 71 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3084 41.9137V31.6598H24.3861V27.3669H46.1921V31.6484H43.3216V41.8627H58.6398V58.6618H11.9731V41.9137H27.3084Z"
              fill="#9CDCFF"
            />
            <path
              d="M33.119 25.1201V13.4534H21.4523V9.07843H49.1606V13.4534H37.494V25.1201H33.119ZM11.9731 58.6618V41.8909H16.3481H27.2856V31.6826H24.369V27.3076H46.244V31.6826H43.3273V41.8909H54.2648H58.6398V58.6618H54.2648H35.3065H16.3481H11.9731ZM16.3481 54.2868H54.2648V46.2659H38.9523V31.6826H31.6606V46.2659H16.3481V54.2868Z"
              fill="#2993D5"
            />
          </svg>
        }
      />

      <SidebarIcon
        icon={
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.97822"
              y="2.00037"
              width="50.6561"
              height="50.6561"
              rx="1.8996"
              fill="#9CDCFF"
            />
            <rect
              x="1.97822"
              y="2.00037"
              width="50.6561"
              height="50.6561"
              rx="1.8996"
              stroke="#2993D5"
              stroke-width="3.79921"
            />
            <path
              d="M3.83545 50.781L3.83564 48.9755C3.83564 47.7365 4.15425 46.6125 4.79147 45.6036C5.42868 44.5947 6.3137 43.8424 7.44653 43.3468C10.0308 42.214 12.3584 41.3998 14.4294 40.9041C16.5003 40.4085 18.6332 40.1607 20.8281 40.1607C23.0229 40.1607 25.147 40.4085 27.2002 40.9041C29.2535 41.3998 31.5722 42.214 34.1565 43.3468C35.2893 43.8424 36.1832 44.5947 36.8381 45.6036C37.493 46.6125 37.8205 47.7365 37.8205 48.9755L37.8203 50.781H20.8279H3.83545ZM41.0066 50.781V48.9755C41.0066 46.7453 40.4402 44.9133 39.3073 43.4796C38.1745 42.0458 36.6877 40.8864 34.8468 40.0014C37.2895 40.2846 39.5905 40.7006 41.75 41.2493C43.9094 41.798 45.6618 42.4264 47.007 43.1344C48.1752 43.807 49.0957 44.6389 49.7683 45.6302C50.4409 46.6214 50.7772 47.7365 50.7772 48.9755V50.781H45.8919H41.0066ZM20.8281 36.9215C18.4916 36.9215 16.58 36.1781 15.0931 34.6913C13.6063 33.2045 12.8629 31.2928 12.8629 28.9563C12.8629 26.6199 13.6063 24.7082 15.0931 23.2214C16.58 21.7346 18.4916 20.9911 20.8281 20.9911C23.1645 20.9911 25.0762 21.7346 26.563 23.2214C28.0498 24.7082 28.7933 26.6199 28.7933 28.9563C28.7933 31.2928 28.0498 33.2045 26.563 34.6913C25.0762 36.1781 23.1645 36.9215 20.8281 36.9215ZM39.9445 28.9563C39.9445 31.2928 39.2011 33.2045 37.7143 34.6913C36.2274 36.1781 34.3158 36.9215 31.9793 36.9215C31.5899 36.9215 31.1563 36.895 30.6784 36.8419C30.2004 36.7888 29.7668 36.6914 29.3774 36.5498C30.227 35.6648 30.8731 34.5762 31.3156 33.2841C31.7581 31.992 31.9793 30.5494 31.9793 28.9563C31.9793 27.3633 31.7581 25.9561 31.3156 24.7348C30.8731 23.5135 30.227 22.3895 29.3774 21.3629C29.7668 21.2567 30.2004 21.1682 30.6784 21.0974C31.1563 21.0266 31.5899 20.9911 31.9793 20.9911C34.3158 20.9911 36.2274 21.7346 37.7143 23.2214C39.2011 24.7082 39.9445 26.6199 39.9445 28.9563ZM7.02172 50.781H34.6344V48.9755C34.6344 48.4091 34.4663 47.8604 34.1299 47.3294C33.7936 46.7984 33.3777 46.4267 32.8821 46.2143C30.3332 45.0814 28.1915 44.3203 26.4568 43.9309C24.7222 43.5415 22.8459 43.3468 20.8281 43.3468C18.8102 43.3468 16.9251 43.5415 15.1728 43.9309C13.4204 44.3203 11.2698 45.0814 8.72096 46.2143C8.22535 46.4267 7.81824 46.7984 7.49963 47.3294C7.18103 47.8604 7.02172 48.4091 7.02172 48.9755V50.781ZM20.8281 33.7355C22.2087 33.7355 23.3504 33.2841 24.2531 32.3814C25.1558 31.4787 25.6072 30.337 25.6072 28.9563C25.6072 27.5757 25.1558 26.434 24.2531 25.5313C23.3504 24.6286 22.2087 24.1772 20.8281 24.1772C19.4474 24.1772 18.3058 24.6286 17.403 25.5313C16.5003 26.434 16.0489 27.5757 16.0489 28.9563C16.0489 30.337 16.5003 31.4787 17.403 32.3814C18.3058 33.2841 19.4474 33.7355 20.8281 33.7355Z"
              fill="#2993D5"
            />
          </svg>
        }
      />
    </div>
  );
};

export default Sidebar;