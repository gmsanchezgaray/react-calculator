import React, { useContext, useEffect } from "react";
import PokedexContext from "../../context";

const StatusScreen = () => {
  const {
    display,
    yellowLed,
    redLed,
    blueLed,
    messagePikachu,
    setMessagePikachu,
  } = useContext(PokedexContext);

  useEffect(() => {
    if (redLed) {
      if (display.length > 8) {
        setMessagePikachu("Out of memory. Use C");
      } else {
        setMessagePikachu(`Something it's wrong`);

        setTimeout(() => {
          setMessagePikachu("Use C");
        }, 2000);
      }
    }
  }, [redLed]);

  useEffect(() => {
    setMessagePikachu("Calculating...");
  }, [yellowLed]);

  useEffect(() => {
    setMessagePikachu("I gotcha!!!");
    setTimeout(() => {
      setMessagePikachu("Calculate something");
    }, 2000);
  }, [blueLed]);

  return (
    <div className="pikachu-speaker">
      <p id="caption">{messagePikachu}</p>
    </div>
  );
};

export default StatusScreen;
