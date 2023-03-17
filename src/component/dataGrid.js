import { Modal, Paper } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import arrayChunk from "lodash.chunk";
import "../styles/dataGrid.css";
import { Height } from "@mui/icons-material";

const DataGrid = () => {
  const [rocketData, setRocketData] = useState([]);
  const [productData, setProductData] = useState({});
  const [open, setOpen] = useState(false);
 const handleClose = () => setOpen(false)
 const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
 }
  var divStyle

  useEffect(() => {
    getRocketData();
  }, []);

  const setBoxImage = (data) => {
    if(data.flickr_images){
      divStyle = {
        backgroundImage: `url(${data.flickr_images[0]} )`,
    }
    }else{
      divStyle = {
        backgroundImage: `url(${data.image} )`
    }
    }
     
  }

  const setProductImage = (data) => {
    console.log("hii",data)
    if(data.flickr_images){
      divStyle = {
        backgroundImage: `url(${data.flickr_images[0]} )`,
    }
    }else{
      divStyle = {
        backgroundImage: `url(${data.image} )`
    }
    }
     
  }

  const getRocketData = async () => {
    let result = [];
    let rockets = await axios
      .get(`https://api.spacexdata.com/v3/rockets`)
      .then((r) => {
        return r.data;
      });

    let ships = await axios
      .get(`https://api.spacexdata.com/v3/ships`)
      .then((r) => {
        return r.data;
      });

    result = [...rockets, ...ships];
    const chunkedData = arrayChunk(result, 3);
    setRocketData(chunkedData);
  };

  console.log("rocketData", rocketData);

  return (
    <div>
      <div className="container">
        {rocketData &&
          rocketData.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="row mt-3">
                {row.map((col, colIndex) => {
                  return (
                    <div key={colIndex} className="col-xl-4 col-lg-3 col-md-3 col-sm-1 col-xs-1">
                      {setBoxImage(col)}
                      <Paper>
                        <Box className="grid_box" sx={divStyle} onClick={()=>{setOpen(true);setProductData(col);setProductImage(col)}}>
                          <h3>{col?.rocket_name ? col?.rocket_name : col?.ship_name }</h3>
                          <p>Type:{col?.rocket_name ? "Rocket" : "Ship"}</p>
                          <p>Year Built:{col?.rocket_name ? col?.first_flight : col?.year_built}</p>
                        </Box>
                      </Paper>
                    </div>
                  );
                })}
              </div>
            );
          })}

<div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
      
                  <Paper  sx={style} className="d-flex w-75">
                        <div className="product-image-wrapper w-50" style={divStyle}>&nbsp;</div>
                        <div className="w-50 p-3">
                          <h3>Name: {productData.rocket_name ? productData.rocket_name : productData.ship_name}</h3>
                          <p>Id: {productData.rocket_name ? productData.rocket_id : productData.ship_id}</p>
                          <p>Year Built: {productData.rocket_name ? productData.first_flight : productData.year_built}</p>
                          <p>Mass(kg): {productData.rocket_name ? productData.mass.kg : productData.weight_kg}</p>
                          <p>Mass(lb): {productData.rocket_name ? productData.mass.lb : productData.weight_lbs}</p>
                          <p>Type: {productData.rocket_name ? productData.rocket_type : productData.ship_type}</p>
                          <p>Company: {productData.rocket_name ? productData.company : productData.home_port}</p>
                          <p style={{wordWrap: "break-word"}}>Website: <a href={productData.wikipedia ? `${productData.wikipedia}` : `${productData.url}`}>{productData.wikipedia ? productData.wikipedia : productData.url}</a></p>
                        </div>
                  </Paper>
       
            </Modal>
          </div>
      </div>
    </div>
  );
};

export default DataGrid;
