import React, { useState } from "react";
import logo from "./docs/chevron-circled.svg";
import UIRender from "./UIRender";
import "./UI.css";

function UI(props) {
  const data = props.data;

  const [filteredCars, setFilter] = useState(["suv", "estate", "sedan"]);
  const [activeCar, setActive] = useState("all");

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
}

export default UI;
