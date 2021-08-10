import React from "react";
import { FaHome } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
const SidePanel = () => {
  return (
    <div className="side">
      <div className="side-column-1">
        <div className="item-row-1">
        <div className="side-icon-1">
          <FaHome size="30"/>
        </div>
        <div className="side-icon-2">
          <FaUserFriends size="30"/>
        </div>
        <div className="side-icon-3">
          <FaRegCreditCard size="30"/>
        </div>
        <div className="side-icon-4">
          <FaRegCreditCard size="30"/>
        </div>
        <div className="side-icon-5">
          <FaRegCreditCard size="30"/>
        </div>
        <div className="side-icon-6">
          <FaStar size="25"/>
        </div>
  
        </div>
      </div>
      <div className="side-column-2">
        <div className="item-row-2">
        <div className="side-item-1"><span className="term">Term</span>Monitor</div>
        <div className="side-item-2">Add Keywords</div>
        <div className="side-item-3">Matches</div>
        <div className="side-item-3">Manage sources</div>
        <div className="side-item-3">Integration</div>
        <div className="side-item-3">Alerts</div>
        <div className="setting-column">
        <div className="side-item-4">Settings</div>
        <div className="side-icon-7">
          <FaSortDown size="20"/>
        </div>
        </div>
        <div className="billing-row">
        <div className="side-item-5">Billings</div>
        </div>
        </div>  
      </div>
      
    </div>
  );
};

export default SidePanel;
