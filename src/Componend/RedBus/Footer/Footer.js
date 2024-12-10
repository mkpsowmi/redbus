import React from "react";
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div>
      <section className="footer-sec">
        <div className="footer-cond">
          <div className="footer-row">

            <div className="footer-col">
              <h2>Top RTCs</h2>
              <ul>
              <a href="#"><li>APSRTC</li></a>
              <a href="#"> <li>GSRTC</li></a>
              <a href="#"><li>MSRTC</li></a>
              <a href="#"><li>TNSTC</li></a>
              <a href="#"> <li>View All</li></a>
                
              </ul>
            </div>

            <div className="footer-col">
              <h2>Other</h2>
              <ul>
              <a href="#"> <li>TSRTC</li></a> 
              <a href="#"> <li>SBSTC</li></a> 
              <a href="#">  <li>RSRTC</li></a> 
              <a href="#"><li>Kerala RTC</li></a> 
              <a href="#"> <li>View All</li></a> 
                
              </ul>
            </div>



            <div className="footer-col">
              <h2>Top bus routes</h2>
              <ul>
              <a href="#">  <li>Hyderabad to Bangalore Bus</li></a>
              <a href="#">  <li>Bangalore to Chennai Bus</li></a>
              <a href="#"> <li>Pune to Bangalore Bus</li></a>
              <a href="#"> <li>Mumbai to Bangalore Bus</li></a>
              <a href="#"> <li>View All</li></a>
                
              </ul>
            </div>




            <div className="footer-col">
              <h2>Top cities</h2>
              <ul>
              <a href="#">  <li>Hyderabad Bus Tickets</li></a>
              <a href="#">  <li>Bangalore Bus Tickets</li></a>
              <a href="#">  <li>Chennai Bus Tickets</li></a>
              <a href="#">   <li>Pune Bus Tickets</li></a>
              <a href="#">  <li>View All</li></a>
                
              </ul>
            </div>




            <div className="footer-col">
              <h2>redRail</h2>
              <ul>
              <a href="#"> <li>Book Train Tickets</li></a>
              <a href="#"> <li>PNR Status</li></a>
              <a href="#"> <li>Live Train Status</li></a>
              <a href="#"><li>Train Seat Availability</li></a>
              <a href="#"> <li>Trains between Stations</li></a>
               
              </ul>
            </div>
        </div>
                  <hr className="line"></hr>

              <div className="footer-row1">
                <div className="footer-col2">
                    <div className="bus-img">
                            <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt=""/>
                    </div>
                    <p>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</p>
                </div>
            

                <div className="footer-col2">
                    <h2>About redBus</h2>
                  <ul>
                    <a href="#"><li>About us</li></a>
                    <a href="#"><li>Investor Relations</li></a>
                    <a href="#"><li>Contact us</li></a>
                    <a href="#"><li>Mobile version</li></a>
                    <a href="#"><li>redBus on mobile</li></a>
                    <a href="#"><li>Sitemap</li></a>
                    <a href="#"><li>Offers</li></a>
                    <a href="#"><li>Careers</li></a>
                    <a href="#"><li>Values</li></a>
                  </ul>
                </div>


                <div className="footer-col2">
                    <h2>Info</h2>
                  <ul>
                    <a href="#"><li>T&C</li></a>
                    <a href="#"><li>Privacy policy</li></a>
                    <a href="#"><li>FAQ</li></a>
                    <a href="#"><li>Blog</li></a>
                    <a href="#"><li>Busoperator registration</li></a>
                    <a href="#"><li>Agent registration</li></a>
                    <a href="#"><li>Insurance partner</li></a>
                    <a href="#"><li>User agreement</li></a>
                   
                  </ul>
                </div>



                <div className="footer-col2">
                    <h2>Global Sites</h2>
                  <ul>
                    <a href="#"><li>India</li></a>
                    <a href="#"><li>Singapore</li></a>
                    <a href="#"><li>Malaysia</li></a>
                    <a href="#"><li>Indonesia</li></a>
                    <a href="#"><li>Peru</li></a>
                    <a href="#"><li>Colombia</li></a>
                  </ul>
                </div>


                <div className="footer-col2">
                    <h2>Our Partners</h2>
                  <ul>
                    <a href="#"><li>Goibibo Bus</li></a>
                    <a href="#"><li>Goibibo Hotels</li></a>
                    <a href="#"><li>Makemytrip Bus</li></a>
                    <a href="#"><li>Makemytrip Hotels</li></a>
                  </ul>
                </div>


              </div>
 
              <hr className="line"></hr>
         

        <div className="footer-row2">
           <div className="footer-col3">
                      <a href="#"><h5>Ⓒ 2023 Redbus India Pvt Ltd. All rights reserved</h5></a>
           </div>
 
            <div className="footer-col3"> 
              <a href=""> <FacebookIcon className="media"/></a>
              <a href="">  <TwitterIcon className="media"/></a>
              <a href=""> <InstagramIcon className="media"/></a> 
              <a href=""> <LinkedInIcon className="media"/></a> 
           </div>
        </div>

        </div>
      </section>
         




    </div>
  );
};

export default Footer;
