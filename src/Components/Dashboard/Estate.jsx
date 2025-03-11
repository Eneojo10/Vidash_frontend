import React from "react";
import SideNav from "../SideNav";
import { FaBell } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function Banner() {
  return (
    <div>
      <div className="home-flex">
        <div className="sidenav">
          <SideNav />
        </div>

        <div className="color-grey">
          <div className="admin-mid-color">
            <div className="nav-icons">
              <div>
                <FaBell />
              </div>
              <div>
                <FaPowerOff />
              </div>

              <div>
                <FaFlag />
              </div>
              <div className="fasettings">
                <FaGear />
              </div>
            </div>
          </div>
          <div className="right-bar">
            <div className="white-board">
              <div className="white--board">
                <div className="banner-forms">
                  <div className="input">
                    <h3>Estate</h3>
                    <input type="amount" />
                  </div>

                  <div>
                    <button className="banner-btn">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
