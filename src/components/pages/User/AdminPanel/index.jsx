import React, { useState, useEffect } from "react";
import Clock from "../../../utilities/Clock";
import Greeting from "../../../utilities/Greeting";
import FluidWrap from "./FluidWrap";
import TankContainer from "./TankContainer";
import { useNavigate } from "react-router-dom";

const UserAdminPanel = () => {
  const [listDevices, setListDevices] = useState([]);
  const navigate = useNavigate()

  const headerToken = localStorage.getItem("accessToken");

  const getList = async () => {
    console.log(headerToken)
    fetch(`https://api.vncrobotics.com/view/devices`, {
      method: 'post',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${headerToken}`
      },
    }).then((res) =>
      res.json().then((data) => {
        console.log('res', data)

        if (data.length > 0) {
          setListDevices(data);
        }

        if (res.status === 403) {
          navigate('/login')
        }
      }))
  }

  useEffect(() => {
    getList()
  }, []);

  console.log("listDevices", listDevices);

  const handlePinClick = (index, pinned) => {
    const newItems = [...listDevices];
    const item = newItems.splice(index, 1)[0];
    item.pinned = pinned;
    item.isPinned = pinned;
    if (pinned) {
      newItems.unshift(item);
    } else {
      let i = 0;
      while (i < newItems.length && newItems[i].pinned) {
        i++;
      }
      newItems.splice(i, 0, item);
    }
    setListDevices(newItems);
  };

  return (
    <div className="home-screen">
      <div className="greeting-text">
        <Greeting />
        <Clock />
      </div>

      <h6 className="title">activate device</h6>
      <div className="user-detail">
        <div className="fluid-detail-wrap">
          <ul>
            {listDevices.map((item, index) => (
              <FluidWrap
                key={index}
                index={index}
                pinned={item.pinned}
                onPinClick={handlePinClick}
                isPinned={item.isPinned}
                name={item.alias_name}
              // date={item.date}
              // flow={item.flow}
              // totalFlow={item.totalFlow}
              />
              // <li key={item.deviceId}>{item.alias_name}</li>
            ))}
          </ul>
        </div>

        <div className="tank-detail-wrap">
          <div className="tank-detail">
            <TankContainer
              name="Tanki e chaatt"
              date="23 aug 2023"
              flow="2.25"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdminPanel;
