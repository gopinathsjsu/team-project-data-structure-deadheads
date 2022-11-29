import React from "react";
import {useNavigate} from 'react-router-dom'
// import {useState , useEfect} from "react";
// import axios from 'axios';

function Arr(){
//  const [arr,setarr]=useState();
//  useEfect(()=>{
//   const fetcharr1 =async ()=>{
//     try {
//       const res =await axios.get("http://localhost:4000/arrivaln");
//       setarr(res.data);
//     } catch (error) {
//       console.log(err)     
//     }
//   }
//  },[])
const navigate=useNavigate();
function handleClick(){
   navigate("/List")
}
    return(
        <div className="Arr">
            <div className="ar">
                <h1>Arrival
                </h1>
                <label className="h2">Date : </label>
  
  <input className="drop" type="date" name="" value="" />
  <label className="h2">Duration: </label>
  <select className="drop" >
    <option value="">1 HOUR</option>
    <option value="">2 HOUR</option>
    <option value="">4 HOUR</option>
    
  </select>
  <br></br>
  <button  type="submit" className="submit" onClick={handleClick}>Submit</button>
</div>

            <div className="ar">
            <h1>Departure
                </h1>
                <label className="h2" >Date : </label>
  
  <input className="drop" type="date" name="" value="" />
  <label className="h2">Duration : </label>
  <select className="drop" >
    <option value="">1 HOUR</option>
    <option value="">2 HOUR</option>
    <option value="">4 HOUR</option>
  </select>
  <br></br>
  <button className="submit" onClick={handleClick}>Submit</button>
            </div>

        </div>
    )
}
export default Arr;