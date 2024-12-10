import React from 'react';
import "./Nav.css"
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Nav = () => {
  return (
    <section className="nav-sec">
        <div className="nav-cond">
            <div className="nav-row">

                 <div className="nav-col">
                    <div className="red-bus">
                     <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"  alt=""></img>
                     </div>
                 </div>

                 <div className="nav-col1">
                     <div className="rdbus">
                        <div className='book'>
                            <img src="https://st.redbus.in/web/images/layout/rb_vertical.svg" alt=""></img>
                        </div>
                        <h6>Bus Tickets</h6>
                     </div>

                     <div className="rdbus">
                       <div className='book'>
                            <img src="https://st.redbus.in/web/images/layout/ryde_vertical.svg" alt=""></img>
                        </div>
                        <h6>Cab Rental</h6>
                     </div>

                     <div className="rdbus">
                     <div className='book'>
                        <img src="https://st.redbus.in/web/images/layout/rail_vertical.svg" alt=""></img>
                        </div>
                        <h6>Train Tickets</h6>
                     </div>
                     
                 </div>



                 <div className="nav-end">

                    <div className="account">
                        <div className="icon1">
                             <HeadsetMicIcon className="headset"/>
                         </div>
                         <div classname="head1">
                            <p> Help</p> 
                         </div>
                    </div>

                    <div className="account">
                        <div className="icon1">
                             <AccountCircleIcon className="headset"/>
                         </div>
                         <div classname="head1">
                            <p> Account</p> 
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  );
}

export default Nav;
