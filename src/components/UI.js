import React, { useState } from "react";
import logo from "./docs/chevron-circled.svg";
import UIRender from "./UIRender";
import "./UI.css";

function UI(props) {
  let data = props.data;
  let [filteredCars, setFilter] = useState(["suv", "estate", "sedan"]);
  let [activeCar, setActive] = useState("all");

  const showCars = () => {
    setFilter(["suv", "estate", "sedan"]);
    setActive("all");
  };

  const suvShow = () => {
    setFilter(["suv"]);
    setActive("suv");
  };

  const estateShow = () => {
    setFilter(["estate"]);
    setActive("estate");
  };
  const sedanShow = () => {
    setFilter(["sedan"]);
    setActive("sedan");
  };

  const previousSlide = () => {
    let box = document.querySelector(".container");
    box.scrollLeft = box.scrollLeft - window.innerWidth;
  };
  const nextSlide = () => {
    let box = document.querySelector(".container");
    box.scrollLeft = box.scrollLeft + window.innerWidth;
  };

  return (
    <div>
      <div className="btnBox">
        <button
          className={activeCar === "all" ? "filterBtn active" : "filterBtn"}
          onClick={showCars}
        >
          SHOW All
        </button>
        <button
          className={activeCar === "suv" ? "filterBtn active" : "filterBtn"}
          onClick={suvShow}
        >
          SUV
        </button>
        <button
          className={activeCar === "estate" ? "filterBtn active" : "filterBtn"}
          onClick={estateShow}
        >
          ESTATE
        </button>
        <button
          className={activeCar === "sedan" ? "filterBtn active" : "filterBtn"}
          onClick={sedanShow}
        >
          SEDAN
        </button>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {data &&
          data.map((idx) => (
            <>
              {filteredCars.includes(idx.bodyType) && (
                <UIRender data={idx}></UIRender>
              )}
            </>
          ))}
      </div>

      {(activeCar === "all" ||
        activeCar === "sedan" ||
        activeCar === "suv" ||
        activeCar === "estate") && (
        <div className="sliderBtn">
          <img
            src={logo}
            alt="logo"
            className="previousSlide"
            onClick={previousSlide}
            height="30px"
          ></img>
          <img
            src={logo}
            alt="logo"
            className="nextSlide"
            onClick={nextSlide}
            height="30px"
          ></img>
        </div>
      )}
    </div>
  );
}

export default UI;
