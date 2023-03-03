import React from "react";
import { Link } from "react-router-dom";

const SidebarIcon = (props) => {
  return (
    <Link to={props.link} className={`sidebar-icon-wrap ${props.active}`}>
      {props.icon}
    </Link>
  );
};

export default SidebarIcon;
