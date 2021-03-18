import React, { useEffect, useContext } from "react";
import PokedexContext from "../../context";
import iddleImg from "./idle.jpg";
import errorImg from "./error.jpg";
import successImg from "./success.jpg";
import waitingImg from "./waiting.jpg";

const Pikachu = () => {
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
    pikachuFace,
    setPikachuFace,
  } = useContext(PokedexContext);

  useEffect(() => {
    if (redLed) {
      setPikachuFace("static/media/error.9f39805d.jpg");
    }
  }, [redLed]);

  useEffect(() => {
    if (yellowLed) {
      setPikachuFace("static/media/waiting.74c1102f.jpg");
    }
  }, [yellowLed]);

  useEffect(() => {
    if (blueLed) {
      setPikachuFace("static/media/success.fda6cac4.jpg");
      setTimeout(() => {
        setPikachuFace("static/media/idle.424d7b6d.jpg");
      }, 1500);
    }
  }, [blueLed]);

  return (
    <div className="frame">
      <img id="state" src={pikachuFace} alt="Status Pikachu" />
    </div>
  );
};

export default Pikachu;
