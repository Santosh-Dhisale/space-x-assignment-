import { Box } from '@mui/material'
import React from 'react'
import Hero from "./hero-image.jpg";
import "../styles/header.css";


const Banner = () => {
  var divStyle = {
    backgroundImage: `url(${Hero} )`,
    width: "100%",
  };

  return (
    <div>
    <Box  style={divStyle}>
    <div  className="background d-flex flex-column">
    <h2 className="role text-white" style={{wordWrap:"break-word"}}>
      <p>Front End Developer</p>
    </h2>
    <h2 className="name text-white" style={{wordWrap:"break-word"}}><small>Designer & Developer</small></h2>
    <p className="description text-white" style={{wordWrap:"break-word"}}>
      A Front End Developer with Passionate about implementing and
      launching new Project<br></br>A Highly skill experience in UI
      Development various frontend Technologies. Strong in <br></br>
      design and integration problem solving skills. Hands on experience
      with developing website.
    </p>
    </div>
  </Box>

</div>
  )
}

export default Banner