import React, { useEffect, useContext } from "react";
import PokedexContext from "../../context";

import iddleImg from "./idle.jpg";
import errorImg from "./error.jpg";
import successImg from "./success.jpg";
import waitingImg from "./waiting.jpg";

const Pikachu = () => {
  const {
    yellowLed,
    redLed,
    blueLed,
    pikachuFace,
    setPikachuFace,
  } = useContext(PokedexContext);

  useEffect(() => {
    setPikachuFace(iddleImg);
  }, []);

  useEffect(() => {
    if (redLed) {
      setPikachuFace(errorImg);
    }
  }, [redLed]);

  useEffect(() => {
    if (yellowLed) {
      setPikachuFace(waitingImg);
    }
  }, [yellowLed]);

  useEffect(() => {
    if (blueLed) {
      setPikachuFace(successImg);
      setTimeout(() => {
        setPikachuFace(iddleImg);
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
