import React, { useEffect, useState } from "react";
import "./Seat.css";
import CircleIcon from '@mui/icons-material/Circle';

const seatnoArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  seatnoArr2 = [11, 12, 13, 14, 15];

const Seat = () => {
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
      <section className="seat-book">
        <div className="seat-container">
            <div className="seat-amount">
                <div className="price">
                  <h3>Seat Price</h3>
                </div>
                <div className="rate">
                   <h5>1000</h5>
                    <h6>1500</h6>
                </div>

            </div>
      <div className="box-div">
        <div className="bus-div">
            <div className="lower">
                <h4>Lower Deck</h4>
            </div>
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
                  

          <div className="lower">
                <h4>Upper Deck</h4>
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
            <div className="tracking">
               <h4>Bording&Dropping</h4>
      
             <div className="live">
                 <CircleIcon id="circle"/>
                   <h5>New Busstop</h5>
             </div>


    <h6 className="brief">
         Preethi Bakery shop ,Madurai Road</h6>


          <div className="loc-track">
               <div className="live">
                 <CircleIcon id="circle"/>
                   <h5 >VR Mall</h5>
             </div>

                  <h6 className="brief1">Alhana Road </h6>
                  </div>
            </div>

          <div className="seat-number">
            <div className="set-no">
               <h5>Seat No</h5>
              </div>  

            <div className="low-size">{seatSelectArr.toString()}
            </div>
          
            </div>
            <div className="amt-detail">
           <div className="amt-head">
                 <h4>Fare Details</h4>
                <h5>Amount</h5>
                <p>Taxes calculated during payment</p>
           </div>
            <div className="price-bus">
              {seatamount == 0 ? null : seatamount}
              </div>
              </div>
             <div className="payment-but">
              <button className="proced">Payemnt proced</button></div>
          </div>
        </div>
      </div>
      </div>
      </section>
    </div>
  );
};

export default Seat;

