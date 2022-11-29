import React from "react";
import { Routes,Route} from "react-router-dom";

import './App.css';
 import Home from "./Home.js";
  import Passenger from "./Passenger";
 import Arr from "./Arr";
// import Employ from "./Employ.js"
// import Airline from"./Airline";
// import Terminals from"./Terminals.js";
// import Terminald from"./Terminald.js";
import Baggage from"./Baggage.js";
import List from"./List.js";
// import Layout from './Layout';

function App() {
  return (
    
    <div className="App">
      <img  src="sitelogo.jpeg" alt="" className="logo" />
      {/* <Home />   */}

      <Routes>
        {/* <Route exact path="/" element={<Layout />}> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Passenger" element={<Passenger/>} />
          <Route path="/Arr" element={<Arr />} /> 
          <Route path="/Baggage" element={<Baggage />} /> 
          <Route path="/List" element={<List />} /> 
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
{/*     
       <Arr />  
      <Airline />
       <Terminals/> 
      <Terminald/>
      <Baggage />
       <List />  */}
       
       
    </div>
  );
}
export default App;
