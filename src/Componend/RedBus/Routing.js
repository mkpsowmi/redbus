import React,{useReducer} from 'react';
import {Context} from "./Context";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initalState,stateReducer } from './Reducer';
// import Search from './Search';
import Home from './Home/Home';
import Travels from './BusDetail/Travels';
import Seat from './Seats/Seat';
// import Travel from './Componend/Travel/Travel.js'
const Routing = () => {
     const [state,dispatch]=useReducer(stateReducer,initalState)
      // console.log(state.buslist)
  return (
    <div>
    <Context.Provider value={{state,dispatch}}> 
        <HashRouter>
          <Routes>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="/Travels" element={<Travels/>}/>
             <Route path="/Seat" element={<Seat/>}/>


          </Routes>
        </HashRouter>
      </Context.Provider>
    </div>
  );
}

export default Routing;




