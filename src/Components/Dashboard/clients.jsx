import React, { useEffect, useState } from "react";
import SideNav from "../SideNav";
import axios from "axios";
import { FaBell, FaPowerOff, FaFlag } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { BASE_URL } from "../../../utils/global";

function Clients() {
  const [inspection, setInspection] = useState([]);

  useEffect(() => {
    const fetchInspection = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getAllInspections`);
        setInspection(response.data.data); // Extract the data array
        console.log(response.data.data); // Check if it logs correctly
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInspection();
  }, []);

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
                  <th>ID</th>
                  <th>Inquiry Type</th>
                  <th>Information</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Property</th>
                  {/* <th>Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {inspection && inspection.length > 0 ? (
                  inspection.map((item, index) => (
                    <tr key={item._id || index}>
                      <td>{index + 1}</td>
                      <td>{item.inquiry_id || "N/A"}</td>
                      <td>{item.information_id || "N/A"}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.email}</td>
                      <td>{item.location_id}</td>{" "}
                      <td>{item.property_id || "N/A"}</td>
                      {/* <td>
                        <button>Edit</button>
                        <button>Delete</button>
                      </td> */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9">No inspections found.</td>
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
