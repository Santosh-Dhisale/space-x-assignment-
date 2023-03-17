import { Box } from '@mui/material'
import React from 'react'
import "../styles/header.css";


const SearchForm = () => {
  return (
    <div>
       <Box >
  <h4 className="mail d-flex flex-column justify-content-center align-items-center">
      <span >Enter your Email Address :</span>
  
      <div className="btn1 mt-5 mb-5">
        {" "}
        <input
          type="text"
          className="btn-3"
          placeholder="Your Message"
        />
      </div>
      <div className="btn2 mb-5">
        <button>Start the Course</button>
      </div>
    </h4>
  </Box>
    </div>
  )
}

export default SearchForm