import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Clock from "../../../utilities/Clock";
import Greeting from "../../../utilities/Greeting";
import AddCustomer from "../AddNewModal/AddCustomer";
import AddDealer from "../AddNewModal/AddDealer";
import AddDevice from "../AddNewModal/AddDevice";
import AddBtn from "./AddBtn";
import DeviceByStatus from "./DeviceByStatus";
import ListItemWrap from "./ListItemWrap";
const apiurl = process.env.REACT_APP_BASE_URL;

const AdminPanel = () => {
  const [customer, setCustomer] = useState(false);
  const [dealer, setDealer] = useState(false);
  const [device, setDevice] = useState(false);

  const [customerList, setCustomerList] = useState([]);
  const [deviceList, setDeviceList] = useState([]);

  const getList = async () => {
    fetch(`${apiurl}/view/customers/list`, {
      method: "post",
    }).then((res) =>
      res.json().then((data) => {
        if (data.length > 0) {
          setCustomerList(data);
        }
      })
    );

    fetch(`${apiurl}/view/device/list`, {
      method: "post",
    }).then((res) =>
      res.json().then((data) => {
        if (data.length > 0) {
          setDeviceList(data);
        }
      })
    );
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="home-screen">
      <div className="admin-detail">
        <div className="device-detail-wrap">
          {/* ===== greetings::start ===== */}
          <div className="greeting-with-btn d-flex align-items-center justify-content-between">
            <div className="greeting-wrap">
              <div className="greeting-text">
                <Greeting />
                <Clock />
              </div>
            </div>
            <div className="btn-wrap">
              <div className="add-popup-btn-wrap">
                <AddBtn
                  onClick={() => {
                    setCustomer(true);
                  }}
                  icon={
                    <svg
                      width="65"
                      height="66"
                      viewBox="0 0 65 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.1994 51.7819C28.3331 51.7819 24.6291 52.4165 21.0874 53.6855C17.5457 54.9546 14.1812 56.9468 10.9937 59.6621V60.6361H53.4937V60.1933C50.5423 57.5371 47.222 55.4711 43.5327 53.9954C39.8435 52.5197 36.0657 51.7819 32.1994 51.7819ZM5.68115 57.0944C9.10476 53.7298 13.1039 51.1178 17.6785 49.2585C22.2532 47.3991 27.1082 46.4694 32.2437 46.4694C37.3791 46.4694 42.2193 47.3991 46.7645 49.2585C51.3096 51.1178 55.3235 53.7298 58.8062 57.0944V5.74023H5.68115V57.0944ZM32.2437 38.1465C28.8791 38.1465 26.031 36.9807 23.6994 34.6491C21.3678 32.3175 20.202 29.4694 20.202 26.1048C20.202 22.7402 21.3678 19.8921 23.6994 17.5605C26.031 15.2289 28.8791 14.0632 32.2437 14.0632C35.6082 14.0632 38.4563 15.2289 40.7879 17.5605C43.1195 19.8921 44.2853 22.7402 44.2853 26.1048C44.2853 29.4694 43.1195 32.3175 40.7879 34.6491C38.4563 36.9807 35.6082 38.1465 32.2437 38.1465ZM32.2645 32.834C34.1395 32.834 35.7263 32.1777 37.0249 30.8653C38.3235 29.5527 38.9728 27.959 38.9728 26.084C38.9728 24.209 38.3166 22.6222 37.0041 21.3236C35.6916 20.025 34.0978 19.3757 32.2228 19.3757C30.3478 19.3757 28.761 20.0319 27.4624 21.3444C26.1638 22.6569 25.5145 24.2507 25.5145 26.1256C25.5145 28.0006 26.1707 29.5875 27.4832 30.8861C28.7957 32.1847 30.3895 32.834 32.2645 32.834ZM5.68115 65.9486C4.26449 65.9486 3.0249 65.4173 1.9624 64.3548C0.899902 63.2923 0.368652 62.0527 0.368652 60.6361V5.74023C0.368652 4.32357 0.899902 3.08398 1.9624 2.02148C3.0249 0.958985 4.26449 0.427735 5.68115 0.427735H11.4364L17.1916 0.427734L47.2957 0.427735H53.0509H58.8062C60.2228 0.427735 61.4624 0.958985 62.5249 2.02148C63.5874 3.08398 64.1187 4.32357 64.1187 5.74023V60.6361C64.1187 62.0527 63.5874 63.2923 62.5249 64.3548C61.4624 65.4173 60.2228 65.9486 58.8062 65.9486H5.68115ZM32.2437 60.6361H53.4937H10.9937H32.2437Z"
                        fill="#09C4FF"
                        fill-opacity="0.5"
                      />
                    </svg>
                  }
                  text="add customer"
                />

                <AddBtn
                  onClick={() => {
                    setDevice(true);
                  }}
                  icon={
                    <svg
                      width="55"
                      height="57"
                      viewBox="0 0 55 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.9358 18.5665V5.24045H11.6097V0.243164H43.2591V5.24045H29.933V18.5665H24.9358ZM0.782227 56.879V37.7228H5.77951H18.2727V26.0625H14.9412V21.0652H39.9276V26.0625H36.5961V37.7228H49.0893H54.0866V56.879H49.0893H5.77951H0.782227ZM5.77951 51.8818H49.0893V42.7201H31.5988V26.0625H23.27V42.7201H5.77951V51.8818Z"
                        fill="#09C4FF"
                        fill-opacity="0.5"
                      />
                    </svg>
                  }
                  text="add device"
                />

                <AddBtn
                  onClick={() => {
                    setDealer(true);
                  }}
                  icon={
                    <svg
                      width="68"
                      height="69"
                      viewBox="0 0 68 69"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.0883789"
                        y="0.539062"
                        width="67.6826"
                        height="67.6826"
                        rx="4.72204"
                        fill="white"
                        fill-opacity="0.5"
                      />
                      <rect
                        x="2.4494"
                        y="2.90008"
                        width="62.9606"
                        height="62.9606"
                        rx="2.36102"
                        stroke="#09C4FF"
                        stroke-opacity="0.5"
                        stroke-width="4.72204"
                      />
                      <path
                        d="M4.75781 63.5293L4.75805 61.2853C4.75805 59.7453 5.15405 58.3483 5.94605 57.0943C6.73805 55.8403 7.83804 54.9053 9.24603 54.2893C12.458 52.8813 15.351 51.8693 17.925 51.2533C20.499 50.6373 23.15 50.3293 25.878 50.3293C28.606 50.3293 31.2459 50.6373 33.7979 51.2533C36.3499 51.8693 39.2319 52.8813 42.4439 54.2893C43.8519 54.9053 44.9629 55.8403 45.7769 57.0943C46.5909 58.3483 46.9979 59.7453 46.9979 61.2853L46.9976 63.5293H25.8777H4.75781ZM50.9579 63.5293V61.2853C50.9579 58.5133 50.2539 56.2363 48.8459 54.4543C47.4379 52.6723 45.5899 51.2313 43.3019 50.1313C46.3379 50.4833 49.1979 51.0003 51.8819 51.6823C54.5658 52.3643 56.7438 53.1453 58.4158 54.0253C59.8678 54.8613 61.0118 55.8953 61.8478 57.1273C62.6838 58.3593 63.1018 59.7453 63.1018 61.2853V63.5293H57.0298H50.9579ZM25.878 46.3033C22.974 46.3033 20.598 45.3793 18.75 43.5313C16.902 41.6834 15.978 39.3074 15.978 36.4034C15.978 33.4994 16.902 31.1234 18.75 29.2754C20.598 27.4274 22.974 26.5034 25.878 26.5034C28.782 26.5034 31.1579 27.4274 33.0059 29.2754C34.8539 31.1234 35.7779 33.4994 35.7779 36.4034C35.7779 39.3074 34.8539 41.6834 33.0059 43.5313C31.1579 45.3793 28.782 46.3033 25.878 46.3033ZM49.6379 36.4034C49.6379 39.3074 48.7139 41.6834 46.8659 43.5313C45.0179 45.3793 42.6419 46.3033 39.7379 46.3033C39.2539 46.3033 38.7149 46.2703 38.1209 46.2043C37.5269 46.1383 36.9879 46.0173 36.5039 45.8413C37.5599 44.7413 38.3629 43.3883 38.9129 41.7824C39.4629 40.1764 39.7379 38.3834 39.7379 36.4034C39.7379 34.4234 39.4629 32.6744 38.9129 31.1564C38.3629 29.6384 37.5599 28.2414 36.5039 26.9654C36.9879 26.8334 37.5269 26.7234 38.1209 26.6354C38.7149 26.5474 39.2539 26.5034 39.7379 26.5034C42.6419 26.5034 45.0179 27.4274 46.8659 29.2754C48.7139 31.1234 49.6379 33.4994 49.6379 36.4034ZM8.71804 63.5293H43.0379V61.2853C43.0379 60.5813 42.8289 59.8993 42.4109 59.2393C41.9929 58.5793 41.4759 58.1173 40.8599 57.8533C37.6919 56.4453 35.0299 55.4993 32.8739 55.0153C30.7179 54.5313 28.386 54.2893 25.878 54.2893C23.37 54.2893 21.027 54.5313 18.849 55.0153C16.671 55.4993 13.998 56.4453 10.83 57.8533C10.214 58.1173 9.70803 58.5793 9.31203 59.2393C8.91604 59.8993 8.71804 60.5813 8.71804 61.2853V63.5293ZM25.878 42.3434C27.594 42.3434 29.013 41.7824 30.1349 40.6604C31.2569 39.5384 31.8179 38.1194 31.8179 36.4034C31.8179 34.6874 31.2569 33.2684 30.1349 32.1464C29.013 31.0244 27.594 30.4634 25.878 30.4634C24.162 30.4634 22.743 31.0244 21.621 32.1464C20.499 33.2684 19.938 34.6874 19.938 36.4034C19.938 38.1194 20.499 39.5384 21.621 40.6604C22.743 41.7824 24.162 42.3434 25.878 42.3434Z"
                        fill="#09C4FF"
                        fill-opacity="0.5"
                      />
                    </svg>
                  }
                  text="add dealer"
                />
              </div>
            </div>
          </div>
          {/* ===== greetings::end ===== */}

          {/* ===== listing::start ===== */}
          <Row className="gx-5 listing-wrap">
            <Col xl="6">
              <h5 className="title">device list</h5>
              <div className="device-card">
                {deviceList.map((item) => (
                  <ListItemWrap
                    name={item.alias_name}
                    company={item.company_name}
                    flow="100.98"
                  />
                ))}
              </div>
            </Col>

            <Col xl="6">
              <h5 className="title">customer list</h5>
              <div className="device-card">
                {customerList.map((item) => (
                  <ListItemWrap
                    key={item.customerId}
                    name={item.name}
                    company={item.company_name}
                    assignee={item.deviceCount}
                    date={new Date(item.join_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    endDate="15 Aug 2023"
                  />
                ))}
              </div>
            </Col>
          </Row>
          {/* ===== listing::end ===== */}
        </div>

        <div className="tank-detail-wrap">
          <h5 className="title">active devices</h5>
          <div className="device-card status-card">
            <ListItemWrap
              name="Turbo Fluidity"
              company="Trigiy India Pvt Ltd"
              flow="100.98"
              active
            />

            <ListItemWrap name="Turbo Fluidity" inactive />
          </div>

          <h5 className="title">inactive devices</h5>
          <div className="device-card status-card">
            <ListItemWrap
              name="Turbo Fluidity"
              company="Trigiy India Pvt Ltd"
              flow="100.98"
              active
            />

            <ListItemWrap name="Turbo Fluidity" inactive />
          </div>
        </div>
      </div>

      <AddCustomer show={customer} onHide={() => setCustomer(false)} />
      <AddDealer show={dealer} onHide={() => setDealer(false)} />
      <AddDevice show={device} onHide={() => setDevice(false)} />
    </div>
  );
};

export default AdminPanel;
