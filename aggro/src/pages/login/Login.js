import React, { useState } from "react";

import { Link, Route } from "react-router-dom";
import "./Login.css";
import LoginContent from "./LoginContent";
import Join from "./../join/Join";
import axios from "axios";
import Footer2 from "../../include/Footer2";
const Login = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    };

    let res = await axios.get("bigdata/user", config);
    setUser(res.data.data);
  };

  return (
    <div className="login-container">
      <LoginContent />
    </div>
    
  );
  
};
<Footer2 />
export default Login;
