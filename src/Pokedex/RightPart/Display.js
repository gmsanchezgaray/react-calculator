import React, { useContext, useEffect } from "react";
import PokedexContext from "../../context";

const Display = () => {
  const { display, setDisplay, redLed } = useContext(PokedexContext);

  useEffect(() => {
    if (redLed) {
      document
        .querySelector(".caret-cursor")
        .classList.remove("caret-cursor-on");
      void document.querySelector(".caret-cursor").offsetWidth;
      document.querySelector(".caret-cursor").classList.add("caret-cursor-off");
      setDisplay("syntax.err");
    }
  }, [redLed]);

  return (
    <div id="show">
      <span className="caret-cursor caret-cursor-on">{display}</span>
    </div>
  );
};

export default Display;
