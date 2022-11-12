import React from "react";
import logo from "./docs/logo.svg";

function UIRender(props) {
  const carData = props.data;
  console.log("Car Data:" + carData);
    return (
      <div className="box" style={{ marginRight: "55px" }}>
        <div className="capital text">{carData.bodyType}</div>
        <div className="text">
          <span style={{ marginRight: "10px" }}>{carData.modelName}</span>{" "}
          {carData.modelType}
        </div>
        <img className="mainImage" src={carData.imageUrl} alt="car" height="250px"></img>
        <div className="links">
          <button className="btn">
            LEARN
            <img className="logo" alt="car logo" src={logo} height="20px"></img>
          </button>
          <button className="btn">
            SHOP
            <img className="logo" alt="logo" src={logo} height="20px"></img>
          </button>
        </div>
      </div>
    );
}

export default UIRender;
