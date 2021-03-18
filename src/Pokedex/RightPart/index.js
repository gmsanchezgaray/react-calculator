import React, { useEffect, useContext } from "react";
import stroke from "../RightPart/stroke-right.svg";
import Buttons from "./Buttons";
import Display from "./Display";

import "../RightPart/rightPart.css";

import PokedexContext from "../../context";

const RightPart = () => {
  const {
    display,
    setDisplay,
    greenLed,
    setGreenLed,
    yellowLed,
    setYellowLed,
    redLed,
    setRedLed,
    blueLed,
    setBlueLed,
    attribute,
    setAttribute,
    valuesToOperate,
    setValuesToOperate,
    readyToShow,
    setReadyToShow,
  } = useContext(PokedexContext);

  useEffect(() => {
    if (readyToShow) {
      makeACalculation(attribute);
      setReadyToShow(false);
      setValuesToOperate([]);
    }
  }, [readyToShow]);

  //* Operation function
  const makeACalculation = (attribute) => {
    switch (attribute) {
      case "add":
        setDisplay(String(valuesToOperate[0] + valuesToOperate[1]).slice(0, 8));
        break;
      case "divide":
        setDisplay(String(valuesToOperate[0] / valuesToOperate[1]).slice(0, 8));
        break;
      case "multiply":
        setDisplay(String(valuesToOperate[0] * valuesToOperate[1]).slice(0, 8));
        break;
      case "subtract":
        setDisplay(String(valuesToOperate[0] - valuesToOperate[1]).slice(0, 8));
        break;
    }
  };

  return (
    <div id="right-part">
      <img className="stroke-right" src={stroke} alt="decoration pokedex" />
      <div className="wrapper-right">
        <Display />
        <Buttons />
      </div>
    </div>
  );
};

export default RightPart;
