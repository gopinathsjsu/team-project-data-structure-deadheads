import React from "react";
import {useNavigate} from 'react-router-dom';


function Passenger(){
  const nav=useNavigate();
function handleClick(){
   nav("/Arr")}
   function handleClick1(){
    nav("/Baggage")}
    return(
   
        <div id="Passenger">
      <h1 className="login_heading">Welcome to AirFly</h1>
      <button  onClick={handleClick} className="third">Flight Details</button>
      <button  onClick={handleClick1} className="third">Baggage Details</button>
        </div>
    )
}
export default Passenger;
