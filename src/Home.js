import React from "react";
import {useNavigate} from 'react-router-dom'
function Home(){
  const navigate=useNavigate();
  function handleClick(){
     navigate("/Passenger")
  }

    return(
        <div className="loginmain">

            <h1 className="login_heading">Log In to AirFly</h1>
  <div className="form">
    <h1>Sign In Form</h1>
    <form className="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
       <button onClick={handleClick}>
      log in </button>
      

    </form>
  </div>
</div>
        
    )
}
export default Home;