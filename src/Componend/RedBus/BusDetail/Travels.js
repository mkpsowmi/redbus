import React, { useNavigate, useSearchParams } from "react-router-dom";
import CableIcon from "@mui/icons-material/Cable";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useEffect, useState } from "react";
import StarsIcon from "@mui/icons-material/Stars";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import WifiIcon from "@mui/icons-material/Wifi";
import VideocamIcon from "@mui/icons-material/Videocam";
import ContactsIcon from "@mui/icons-material/ImportContacts";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import FlareIcon from "@mui/icons-material/Flare";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import BatterySaverIcon from "@mui/icons-material/BatterySaver";
import "./Travels.css";
import { SnackbarContent } from "@mui/material";

const seatnoArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  seatnoArr2 = [11, 12, 13, 14, 15];

function Travels() {

  const [collecte]=useSearchParams();
  
  var data=collecte.get("info");
  console.log(data);

  let param=JSON.parse(data);
  console.log(param);



  var navi = useNavigate();
  var check = () => {
    navi("/Seat");
    //  let show = document.querySelector(".visited");
    //   show.classList.toggle("hidded");
   };

  const [seatSelectArr, setseatSelectArr] = useState([]);
  const [seatamount, setseatamount] = useState();

  let seatPrice = 1000;

  useEffect(() => {
    seatPriceUpdate();
  }, [seatSelectArr]);

  const seatPriceUpdate = () => {
    // console.log("eeee");
    let tempseats = seatSelectArr;
    let seatPriceTemp = tempseats.length * seatPrice;
    //console.log("price",seatPriceTemp);
    setseatamount(seatPriceTemp);
  };
  const seatSelectFn = (e) => {
    if (!e.target.classList.contains("seat-active")) {
      e.target.classList.add("seat-active");
    } else {
      e.target.classList.remove("seat-active");
    }
    let ss = e.target.innerText;

    let tempArr = seatSelectArr;
    if (!tempArr.includes(ss)) {
      tempArr.push(ss);
      // console.log(tempArr, "add");
      setseatSelectArr([...tempArr]);
    } else {
      tempArr = tempArr.filter((e) => e != ss);
      // console.log(tempArr, "delete");
      setseatSelectArr([...tempArr]);
    }
  };



 

  return (
    <div>
      <section className="buslist-sec">
        <div className="buslist-cond">
          <div className="buslist-col1">
            <div className="bus-detail">
              <div className="filter">
                <h5>FILTERS</h5>
                <hr className="brake" />
                <h4>
                  <TrendingUpIcon id="track" />
                  Live Tracking
                </h4>
                <hr className="brake" />
              </div>

              <div className="departure-time">
                <h5>DEPARTURE TIME</h5>

                <div className="depa">
                  <input type="checkbox" disabled />
                  &nbsp;
                  <WbTwilightIcon />
                  &nbsp;
                  <span className="bus-detil">Before 6 am</span>
                </div>

                <div className="depa">
                  <input type="checkbox" disabled />
                  &nbsp;
                  <WbSunnyIcon />
                  &nbsp;
                  <span className="bus-detil">6 am to 12 pm </span>
                </div>

                <div className="depa">
                  <input type="checkbox" disabled />
                  &nbsp;
                  <FlareIcon />
                  &nbsp;
                  <span className="bus-detil">12 pm to 6 pm</span>
                </div>

                <div className="depa">
                  <input type="checkbox" />
                  &nbsp;
                  <SettingsBrightnessIcon />
                  &nbsp;
                  <span className="bus-detils">After 6 pm</span>
                </div>
              </div>
              <hr className="brake" />

              <div className="bus-type">
                <h5>BUS TYPES</h5>
                <div className="seat-type">
                  <input type="checkbox" disabled />
                  &nbsp;
                  <span className="bus-types">SEATER</span>
                </div>

                <div className="seat-type">
                  <input type="checkbox" disabled />
                  &nbsp;
                  <span className="bus-type">SLEEPER</span>
                </div>

                <div className="seat-type">
                  <input type="checkbox" />
                  &nbsp;
                  <span className="bus-type">AC </span>
                </div>

                <div className="seat-type">
                  <input type="checkbox" />
                  &nbsp;
                  <span className="bus-type">NONAC</span>
                </div>
              </div>

              <hr className="brake" />

              <div className="amenities">
                <h5>AMENITIES</h5>

                <div className="bus-icon">
                  <WifiIcon id="amen" /> &nbsp;
                  <span className="bus-famous">WIFI</span>
                </div>

                <div className="bus-icon">
                  <CableIcon id="amen" /> &nbsp;
                  <span className="bus-famous">Charging Point</span>
                </div>

                <div className="bus-icon">
                  <AirlineSeatIndividualSuiteIcon id="amen" /> &nbsp;
                  <span className="bus-famous">Blankets</span>
                </div>

                <div className="bus-icon">
                  <LocalCafeIcon id="amen" /> &nbsp;
                  <span className="bus-famous">Tea/coffee</span>
                </div>

                <div className="bus-icon">
                  <PhoneAndroidIcon id="amen" /> &nbsp;
                  <span className="bus-famous">Emergency Number</span>
                </div>
              </div>
            </div>
          </div>

          <div className="buslist-col2">
            <div className="fount-list">
              <span className="short">5 Buses</span>
              <span className="sort">SORT BY:</span>
              <span className="time1">Departure</span>
              <span className="time2">Arrival</span>
              <span className="time3">Ratings</span>
              <span className="time4">Fare</span>
            </div>
            {param.buses.map((x, y) => {
              return (
                <div className="list-row" key={y}>
                  <div className="bus-list">
                    <div className="img-logos">
                      <img src="https://www.redbus.in/images/reviews/primo_logo.svg"></img>
                    </div>
                    <h4>{x.busname}</h4>
                    <h6>{x.bustype}</h6>
                    <div className="bus-icons">
                      <Tooltip title="TV">
                        <IconButton>
                          <LiveTvIcon id="facility-icon" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="USB device">
                        <IconButton>
                          <CableIcon id="facility-icon" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="WIFI">
                        <IconButton>
                          <WifiIcon id="facility-icon" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="CcTv">
                        <IconButton>
                          <VideocamIcon id="facility-icon" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>

                  <div className="timing-detail">
                    <div className="started">{x.srartTime}</div>
                    <div className="area">{x.startarea}</div>
                  </div>

                  <div className="reach-time">
                    <div className="ended">{x.endTime}</div>
                    <div className="end-area">{x.endplace}</div>
                  </div>

                  <div className="reach-value">
                    <StarHalfIcon id="star" />
                    {x.star}
                  </div>

                  <div className="amount">{x.Rate}</div>
                  <button className="seat" onClick={check}>
                    View seat
                  </button>
                </div>
                  

              );
            })}
                {/* <div  className="visited hidded">
      <div className="box-div">
        <div className="bus-div">
          <div className="main-div">
            {seatnoArr1.map((e) => {
              return (
                <div
                  className="double-seat"
                  onClick={(e) => seatSelectFn(e)}
                >{`L${e}`}</div>
              );
            })}

            {seatnoArr2.map((e) => {
              return (
                <div
                  className="single-seat"
                  onClick={(e) => seatSelectFn(e)}
                >{`L${e}`}</div>
              );
            })}
          </div>
          <div className="main-div">
            {seatnoArr1.map((e) => {
              return (
                <div
                  className="double-seat"
                  onClick={(e) => seatSelectFn(e)}
                >{`U${e}`}</div>
              );
            })}
            {seatnoArr2.map((e) => {
              return (
                <div
                  className="single-seat"
                  onClick={(e) => seatSelectFn(e)}
                >{`U${e}`}</div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="details">
            <div>{seatamount == 0 ? null : seatamount}</div>
            <div>{seatSelectArr.toString()}</div>
          </div>
        </div>
      </div>
    </div> */}


              
          </div>
        </div>

        
    

      </section>
    </div>
  );
}

export default Travels;





