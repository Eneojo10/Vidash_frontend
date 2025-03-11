import React, { useState, useEffect } from "react";
import SideNav from "../SideNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBell } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { TiWeatherSunny } from "react-icons/ti";
import { BASE_URL } from "../../../utils/global";

function Home() {
  const [news, setNews] = useState([]);
  const [messages, setMessages] = useState([]); 
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.currentsapi.services/v1/latest-news?country=ng&apiKey=h6liSC4Wdp8yOyL_97qmDJPYA_LF_lftOZqSlq991mskknC9"
        );
        console.log(response);

        const latestNews = response.data.news.slice(0, 4);
        setNews(latestNews);
      } catch (error) {
        toast.error("Error fetching News");
        console.error("Error fetching News");
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "https://your-api-endpoint.com/messages"
        ); // Replace with your actual API
        setMessages(response.data.messages);
      } catch (error) {
        toast.error("Error fetching messages");
        console.error("Error fetching messages");
      }
    };

    fetchNews();
    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getTotalEstatesCount`);
        setTotal(response.data);
        console.log(response);
        
      }catch(error) {
        console.error(response.data);
      }
    };

    fetchTotal();
  }, []);

  return (
    <div className="homepage">
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
            <div className="middle-details">
              <div className="dashboard">
                <div>
                  <h2>Dashboard</h2>
                  {/* <p>Welcome to Compass</p> */}
                </div>
                <div className="compass">
                  <div className="com">
                    <h5>Compass </h5>
                  </div>
                  <div>
                    <h3>/</h3>
                  </div>
                  <div className="com-dash">
                    <h5>Dashboard</h5>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="cards-diplay">
                <div className="dashboard-cards">
                  <div className="card--one">
                    <div className="card-one">
                      <div className="total-client">
                        <p>128</p>
                        <br />
                        <br />
                        <h4>New Project</h4>
                      </div>
                      <br />
                      <div className="progress---container">
                        <div
                          className="progress---bar1"
                          style={{ width: "67%" }}
                        ></div>
                        <span className="change">Change 23%</span>
                      </div>
                    </div>
                    <br />
                  </div>

                  <div className="card--one">
                    <div className="card-one">
                      <div className="total-client">
                        <p>758</p>
                        <br />
                        <br />
                        <h4>Total Project</h4>
                      </div>
                      <br />
                      <div className="progress---container">
                        <div
                          className="progress---bar2"
                          style={{ width: "67%" }}
                        ></div>
                        <span className="change">Change 23%</span>
                      </div>
                    </div>
                  </div>
                  <div className="card--one">
                    <div className="card-three">
                      <div className="total-client">
                        <p>1,500</p>
                        <br />
                        <br />
                        <h4>Total Client</h4>
                      </div>
                      <br />
                      <div className="progress---container">
                        <div
                          className="progress---bar3"
                          style={{ width: "67%" }}
                        ></div>
                        <span className="change">Change 23%</span>
                      </div>
                    </div>
                  </div>
                  <div className="card--one">
                    <div className="card-three">
                      <div className="total-client">
                        <p>{total}</p>
                        <br />
                        <br />
                        <h4>Total Estate</h4>
                      </div>
                      <br />
                      <div className="progress---container">
                        <div
                          className="progress---bar4"
                          style={{ width: "67%" }}
                        ></div>
                        <span className="change">Change 23%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="annual-report">
                <div className="ann-ual">
                  <h4>
                    <span className="city">city:</span>Abuja
                  </h4>
                </div>
                <br />
                <div className="ann-uall">
                  <h4>
                    <span className="city">DAY -</span>12:07PM
                  </h4>
                </div>
                <div className="degree">
                  <div className="degree-flex">
                    <div>
                      <h1>34</h1>
                    </div>
                    <div className="degree-icon">
                      <TiWeatherSunny />
                    </div>
                  </div>
                </div>
              </div>
              <div className="reportss">
                <div className="d1">
                  <div>
                    <h4>Wind</h4>
                  </div>
                  <div>
                    <h4>ESE 17 mph</h4>
                  </div>
                </div>
              </div>
              <div className="reportss1">
                <div className="d2">
                  <div>
                    <h4>Humidity</h4>
                  </div>
                  <div>
                    <h4>72%</h4>
                  </div>
                </div>
              </div>
              <div className="reportss">
                <div className="d3">
                  <div>
                    <h4>Pressure</h4>
                  </div>
                  <div>
                    <h4>25.56 in</h4>
                  </div>
                </div>
              </div>
              <div className="reportss1">
                <div className="d4">
                  <div>
                    <h4>Cloud Cover</h4>
                  </div>
                  <div>
                    <h4>80%</h4>
                  </div>
                </div>
              </div>
              <div className="reportss">
                <div className="d5">
                  <div>
                    <h4>Ceiling</h4>
                  </div>
                  <div>
                    <h4>25280 ft</h4>
                  </div>
                </div>
              </div>
              <br />
              <div className="footer-cards">
                <div className="fc1"></div>
                <div className="fc1"></div>
                <div className="fc1"></div>
                <div className="fc1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
