import React from "react";
import { MdTour } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faArrows,
  faPeopleGroup,
  faStreetView,
  faGripVertical
} from "@fortawesome/free-solid-svg-icons";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";
import image from '../image/vidashshelterLogo.png'

function SideNav() {
  return (
    <div className="color-white">
      <div className="left-bar">
        <div className="admin-color">
          <div className="v-dash">
            <div className="logo-image">
              <img src={image} alt=""/>
            </div>
            {/* <div className="estate-name">
              <h2>Vidash</h2>
            </div> */}
          </div>
        </div>
        <br />
        <br />
        <div className="dash-board">
          <div className="react-icons">
            <FontAwesomeIcon
              icon={faBars}
              style={{ marginTop: "3px", fontSize: "15px" }}
            />
            <Link to={"/"} className="line">
              <div className="side-fonts" style={{ marginTop: "-2px" }}>
                <span className="span">Dashboard</span>
              </div>
            </Link>
          </div>

          <br />
          <div className="react-icons-one">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ marginTop: "3px", fontSize: "15px" }}
            />
            <Link to={"/estate"} className="line">
              <div className="side-fonts" style={{ marginTop: "1px" }}>
                <span className="span">Estate</span>
              </div>
            </Link>
          </div>
          <br />
          <div className="react-icons-onee">
            <FontAwesomeIcon
              icon={faArrows}
              style={{ marginTop: "3px", fontSize: "15px" }}
            />
            <Link to={"/post"} className="line">
              <div className="side-fonts" style={{ marginTop: "2px" }}>
                <span className="span">Post</span>
              </div>
            </Link>
          </div>
          <br />
          <div className="react-icons--onee">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              style={{ marginTop: "3px", fontSize: "15px" }}
            />
            <Link to={"/inspection"} className="line">
              <div className="side-fonts" style={{ marginTop: "2px" }}>
                <span className="span">Inspection</span>
              </div>
            </Link>
            <br />
          </div><br/>
          <div className="react-icons-onee">
            <FontAwesomeIcon
              icon={faStreetView}
              style={{ marginTop: "3px", fontSize: "15px" }}
            />
            <Link to={"/tour"} className="line">
              <div className="side-fonts" style={{ marginTop: "2px" }}>
                <span className="span">Tour</span>
              </div>
            </Link>
          </div><br/>
          <div className="react-icons_onee">
            <FontAwesomeIcon
              icon={faGripVertical}
              style={{ marginTop: "3px", fontSize: "15px" }}
            />
            <Link to={"/tour"} className="line">
              <div className="side-fonts" style={{ marginTop: "0px" }}>
                <span className="span">Other</span>
              </div>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        
        
        <div className="xtra">
          <h5>-- Extra</h5>
        </div>
        <br />
        <br />
        <div className="traffic">
          <div>
            <h3>TRAFFIC THIS MONTH</h3>
          </div>
          <div>
            <h3>67%</h3>
          </div>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: "67%" }}></div>
        </div>
        <br />
        <br />

        <div className="server">
          <div>
            <h3>SERVER LOAD</h3>
          </div>
          <div>
            <h3>86%</h3>
          </div>
        </div>
        <div className="progress--container">
          <div className="progress--bar" style={{ width: "67%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
