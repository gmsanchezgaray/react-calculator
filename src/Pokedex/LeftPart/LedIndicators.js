import React, { useContext, useEffect } from "react";
import PokedexContext from "../../context";

const LedIndicators = () => {
  const {
    display,
    greenLed,
    setGreenLed,
    yellowLed,
    redLed,
    setRedLed,
    blueLed,
  } = useContext(PokedexContext);

  useEffect(() => {
    //*Check the Errors
    if (display.length > 8) {
      setGreenLed(false);
      setRedLed(true);
    }

    if (display === "-.") {
      setGreenLed(false);
      setRedLed(true);
    }

    if (greenLed) {
      document.querySelector(".l-green").classList.remove("l-green-on");
      void document.querySelector(".l-green").offsetWidth;
      document.querySelector(".l-green").classList.add("l-green-on");
    }
  }, [display]);

  useEffect(() => {
    if (redLed) {
      document.querySelector(".l-red").classList.remove("l-red-on");
      void document.querySelector(".l-red").offsetWidth;
      document.querySelector(".l-red").classList.add("l-red-on");
    }
  }, [redLed]);

  useEffect(() => {
    if (yellowLed) {
      document.querySelector(".l-yellow").classList.remove("l-yellow-on");
      void document.querySelector(".l-yellow").offsetWidth;
      document.querySelector(".l-yellow").classList.add("l-yellow-on");
    }
  }, [yellowLed]);

  useEffect(() => {
    if (blueLed) {
      document.querySelector(".l-blue").classList.remove("l-blue-on");
      void document.querySelector(".l-blue").offsetWidth;
      document.querySelector(".l-blue").classList.add("l-blue-on");
    }
  }, [blueLed]);

  return (
    <div id="top-indicators">
      <div className="indicators-container">
        <div className="l-blue"></div>
        <div className="l-red"></div>
        <div className="l-yellow"></div>
        <div className="l-green"></div>
      </div>
    </div>
  );
};

export default LedIndicators;
