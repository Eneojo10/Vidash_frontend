import React, { useEffect, useState } from "react";
import SideNav from "../SideNav";
import { FaBell, FaPowerOff, FaFlag } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import axios from "axios";
import { BASE_URL } from "../../../utils/global";

function Clients() {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getAllSchedule`);
        setTour(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTour();
  }, []);

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return `${String(date.getMonth() + 1).padStart(2, "0")}/${String(
      date.getDate()
    ).padStart(2, "0")}/${date.getFullYear()}`;
  };

  return (
    <div className="home-flex">
      <div className="sidenav">
        <SideNav />
      </div>

      <div className="color-grey">
        <div className="right-bar">
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

          <div className="middle-table">
            <table className="clients-table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Tour Type</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {tour.length > 0 ? (
                  tour.map((item, index) => (
                    <tr key={item._id || index}>
                      <td>{index + 1}</td>
                      <td>{item.name || "N/A"}</td>
                      <td>{item.email || "N/A"}</td>
                      <td>{item.phone || "N/A"}</td>
                      <td>{item.tour_id || "N/A"}</td>
                      <td>{formatDate(item.date)}</td>
                      <td>{item.time_id || "N/A"}</td>
                      <td>{item.message || "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No schedules found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
