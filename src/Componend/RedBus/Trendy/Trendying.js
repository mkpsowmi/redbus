// import React from 'react';
import "./Trendy.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export default class CenterMode extends Component {
  render() {

    var settings = {
      dots: true,
      infinite: false,
      responsive: [

        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 5
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    
    var trendy = [
      {
        img: "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
        name: "BUS",
        para: "Save up to Rs 250 on bus tickets",
        date: "Valid till  31 Jul",
        stage: "FIRST",
        icon: <ContentCopyIcon />,
      },

      {
        img: "https://st.redbus.in/images/offers/superhit_rav/2_1.png",
        name: "BUS",
        para: "Save up to Rs 300 in AP,TS routes",
        date: "Valid till  31 Jul",
        stage: "SUPERHIT",
        icon: <ContentCopyIcon />,
      },
      {
        img: "https://st.redbus.in/Images/INDOFFER/BUS200/80x80.png",
        name: "BUS",
        para: "Save up to Rs 200 in Gujarat and MP routes.",
        date: "Valid till  31 Jul",
        stage: "BUS200",
        icon: <ContentCopyIcon />,
      },
      {
        img: "https://st.redbus.in/Images/INDOFFER/RB200/80x80.png",
        name: "BUS",
        para: "Save up to Rs 200 in Delhi, Rajasthan, ",
        date: "Valid till  31 Jul",
        stage: "RB200",
        icon: <ContentCopyIcon />,
      },
      {
        img: "https://st.redbus.in/Images/APSRTC/new/APSRTC_3.png",
        name: "BUS",
        para: "Save Up to Rs 250 on bus tickets",
        date: "Valid till  31 Jul",
        stage: "APSRTCNEW",
        icon: <ContentCopyIcon />,
      },
      {
        img: "https://st.redbus.in/Images/TSRTC/80x80.png",
        name: "BUS",
        para: "Save Up to Rs 250 on TSRTC bus tickets",
        date: "Valid till  31 Jul",
        stage: "TSRTC",
        icon: <ContentCopyIcon />,
      },
    ];
    return (
      <section className="trendy-sec">
        <div className="trendy-cond">
          <div className="trend-head">
            <h2>TRENDING OFFERS</h2>
          </div>
          <Slider {...settings}>
             
            {trendy.map((e, f) => {
              return (
                <div className="swip">
                  <div className="scroll" id={f}>
                    <div className="card-col">
                      <img src={e.img} />
                    </div>
                    <div className="card-col1">
                      <h6>{e.name}</h6>
                      <p>{e.para}</p>
                      <h5>{e.date}</h5>
                      <div className="date">
                        <h3>{e.stage}</h3>
                        <h4>{e.icon}</h4>
                      </div>
                    </div>
                  </div>
                  </div>
              );
            })}
           
          </Slider>
        </div>
      </section>
    );
  }
}
