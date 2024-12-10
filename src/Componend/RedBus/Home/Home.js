import React from 'react';
import Search from '../Search';
import BackImg from '../BackImg';
import Footer from '../Footer/Footer';
import Nav from '../NavBar/Nav';
import Add from '../Advertisement/Add';
import About from '../AboutSec/About';

import Primos from '../Primo/Primos';
import Trendying from '../Trendy/Trendying';

const Home = () => {
  return (
     <div>
            <Nav/>
     <BackImg className="background-bus"/>
      <Search/> 
       <Trendying/>
        <Add/>  
         <About/> 
       <Primos/>
      <Footer/> 
    </div>
  );
}

export default Home;
