import React from "react";
function Terminals(){
    return(
        <div id ="mainterminal">
             <h1>Modify Gate/Terminals Arrival</h1>
        <div id="Terminal">
            <label className="term">Terminal A: </label>
  <select className="drop2" >
    <option value="">A1</option>
    <option value="">A2</option>
    <option value="">A3</option>
    </select>
  <label className="term">Terminal Position: </label>
  <select className="drop2" >
    <option value="">ENABLE</option>
    <option value="">DISABLE</option>
</select>
     </div>

     <div id="Terminal">
            <label className="term">Terminal B: </label>
  <select className="drop2" >
    <option value="">B1</option>
    <option value="">B2</option>
    <option value="">B3</option>
    </select>
  <label className="term">Terminal Position: </label>
  <select className="drop2" >
    <option value="">ENABLE</option>
    <option value="">DISABLE</option>
</select>
     </div>

     <div id="Terminal">
       
            <label className="term">Terminal C: </label>
  <select className="drop2" >
    <option value="">C1</option>
    <option value="">C2</option>
    <option value="">C3</option>
    </select>
  <label className="term">Terminal Position: </label>
  <select className="drop2" >
    <option value="">ENABLE</option>
    <option value="">DISABLE</option>
</select>
     </div>

     </div>
     

     
    )
}
export default Terminals;