import React, { useContext, useState } from "react";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TextField from "@mui/material/TextField";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DateRangeIcon from "@mui/icons-material/DateRange";
// import {Context}  from  "./Context"
import Button from "@mui/material/Button";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Searchs from "./Searchs.json";

const Search = () => {
  //  const [state]=useContext(Context);
  //  console.log(state.buslist);

  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");
  let [dat, setDate] = useState("");
  let [error, SetError] = useState(false);

  var first = (e) => {
    setFrom(e.target.value);
    console.log(e.target.value);
  };

  var end = (e) => {
    setTo(e.target.value);
    console.log(e.target.value);
  };

  var date = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  var pass = useNavigate();
  var submit = (e) => {
    e.preventDefault();
    if (from.length === 0 && to.length === 0 && dat.length === 0) {
      SetError(true);
    } else {
      from = from.toLocaleLowerCase();
      to = to.toLocaleLowerCase();
      var b = Searchs.detail.find((v) => {
        // return v.from===from&&v.to===to&&v.date===dat?  v.id:""
        if (v.from === from && v.to === to && v.date === dat) {
          return v;
        }
      });
      console.log(b);
      pass(`/Travels?info=${JSON.stringify(b)}`);
    }
  };

  return (
    <div>
      <section className="search-sec">
        <div className="search-container">
          <div className="search-row">
            <div className="place">
              <DirectionsBusIcon className="bus" />
              <TextField
                id="filled-basic"
                label="From"
                variant="filled"
                onChange={first}
                name="from"
              />
            </div>

            <CompareArrowsIcon className="arrow" />

            <div className="place2">
              <DirectionsBusIcon className="bus1" />
              <TextField
                id="filled-basic"
                label="To"
                variant="filled"
                onChange={end}
                name="to"
              />
            </div>

            <div className="place3">
              <CalendarMonthIcon className="calen" />
              <TextField 
                id="filled-basic"
                label="Date"
                variant="filled"
                onChange={date}
                name="date" className="date"
              />
            </div>

            <div className="search">
              <Button onClick={submit} variant="contained" id="ser-bus">
                SEARCH BUSES
              </Button>
            </div>
          </div>
          {error && from.length === 0 ? (
            <p id="alert">Enter 'From' and 'to'</p>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
