import React, { useState } from "react";
import Clock from "../../../utilities/Clock";
import Greeting from "../../../utilities/Greeting";
import FluidWrap from "./FluidWrap";
import TankContainer from "./TankContainer";

const UserAdminPanel = () => {
  const [listItems, setListItems] = useState([
    {
      name: "Turbo Fluidity 1",
      pinned: false,
      date: "23 aug 2023",
      flow: "100.98",
      totalFlow: "2100.98",
    },
    {
      name: "Turbo Fluidity 2",
      pinned: false,
      date: "23 aug 2023",
      flow: "100.98",
      totalFlow: "2100.98",
    },
    {
      name: "Turbo Fluidity 3",
      pinned: false,
      date: "23 aug 2023",
      flow: "100.98",
      totalFlow: "2100.98",
    },
    {
      name: "Turbo Fluidity 4",
      pinned: false,
      date: "23 aug 2023",
      flow: "100.98",
      totalFlow: "2100.98",
    },
  ]);

  const handlePinClick = (index, pinned) => {
    const newItems = [...listItems];
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
    setListItems(newItems);
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
          {listItems.map((item, index) => (
            <FluidWrap
              key={index}
              index={index}
              pinned={item.pinned}
              onPinClick={handlePinClick}
              isPinned={item.isPinned}
              name={item.name}
              date={item.date}
              flow={item.flow}
              totalFlow={item.totalFlow}
            />
          ))}
        </div>

        <div className="tank-detail-wrap">
          <div className="tank-detail">
            <TankContainer
              name="Tanki e chaatt"
              date="23 aug 2023"
              flow="2.25"
            />

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
