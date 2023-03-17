import React from "react";
import "../styles/header.css";

import { Row } from "@mui/material";
import { Box } from "@mui/system";
const Header = () => {
  

  return (
    <>
      <div>
          <header>
            <div className="header-container">
              <h1 className="logo">Logo</h1>
              <div className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>

              <div className="nav_link hide">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#"> Service</a>
                <a href="#">Contact</a>
              </div>
              <div className="hero-img">
                {/* <img src={Hero} alt="" height="100vh" width="100vw" /> */}
              </div>
            </div>
          </header>
       </div>
    </>
  );
};

export default Header;
