import { useState, useEffect } from "react";

import PokedexContext from "./index";

export default function PokedexProvider({ children }) {
  const [display, setDisplay] = useState("");
  const [messagePikachu, setMessagePikachu] = useState("Calculate something");
  const [pikachuFace, setPikachuFace] = useState(
    "static/media/idle.424d7b6d.jpg"
  );

  const [greenLed, setGreenLed] = useState(false);
  const [yellowLed, setYellowLed] = useState(false);
  const [redLed, setRedLed] = useState(false);
  const [blueLed, setBlueLed] = useState(false);

  const [attribute, setAttribute] = useState("");
  const [valuesToOperate, setValuesToOperate] = useState([]);
  const [readyToShow, setReadyToShow] = useState(false);

  useEffect(() => {
    if (readyToShow) {
      makeACalculation(attribute);
      setReadyToShow(false);
      setValuesToOperate([]);
    }
  }, [readyToShow]);

  useEffect(() => {
    //!Check the Errors
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

      document
        .querySelector(".caret-cursor")
        .classList.remove("caret-cursor-on");
      void document.querySelector(".caret-cursor").offsetWidth;
      document.querySelector(".caret-cursor").classList.add("caret-cursor-off");
      setDisplay("syntax.err");
      // // statusPikachu.src = './assets/error.jpg'; //? Status Pikachu
      // caption.innerText = `Something it's wrong`;
      // setTimeout(()=>{
      //     statusPikachu.src = './assets/idle.jpg'; //? Reset the values ​​after an error.
      //     caption.innerText = 'Calculate something'; //? Reset the values ​​after an error.
      // },2000)
    }
  }, [redLed]);

  useEffect(() => {
    document.querySelector(".l-yellow").classList.remove("l-yellow-on");
    void document.querySelector(".l-yellow").offsetWidth;
    document.querySelector(".l-yellow").classList.add("l-yellow-on");
    // statusPikachu.src = './assets/waiting.jpg'; //? Status Pikachu
    // caption.innerText = `Calculating...`;
  }, [yellowLed]);

  useEffect(() => {
    document.querySelector(".l-blue").classList.remove("l-blue-on");
    void document.querySelector(".l-blue").offsetWidth;
    document.querySelector(".l-blue").classList.add("l-blue-on");
    // statusPikachu.src = './assets/success.jpg'; //? Status Pikachu
    // caption.innerText = 'I gotcha!!!';
    // setTimeout(()=>{
    //     statusPikachu.src = './assets/idle.jpg'; //? Reset the values ​​after an error.
    //     caption.innerText = 'Calculate something'; //? Reset the values ​​after an error.
    // },1000)
  }, [blueLed]);

  // ────────────────────────────────────────────────────────────────────────────────

  //*Number Buttons callback
  const addNumber = (event) => {
    if (!redLed) {
      setDisplay(display.concat(event.target.name));
      setGreenLed(true);
    }
  };

  //* Dot Button (.) callback
  const addDot = (event) => {
    if (!redLed && !display.includes(".")) {
      setDisplay(display.concat(event.target.name));
      setGreenLed(true);
      if (display === "") {
        setDisplay("0".concat(event.target.name));
        setGreenLed(true);
      }
    }
  };

  //* Switch value Button (+/-) callback
  const switchValue = () => {
    if (!redLed) {
      if (display.includes("-") && display.charAt(0) === "-") {
        setDisplay(display.substr(1));
      } else {
        if (display.charAt(0) !== "-") {
          setDisplay("-" + display);
        }
      }
    }
  };

  //*Clear All Button callback
  const clearAll = () => {
    setDisplay("");
    setRedLed(false);
    document
      .querySelector(".caret-cursor")
      .classList.remove("caret-cursor-off");
    void document.querySelector(".caret-cursor").offsetWidth;
    document.querySelector(".caret-cursor").classList.add("caret-cursor-on");
  };

  //* < Button (Delete 1 value) callback
  const backspace = () => {
    if (!redLed) {
      setDisplay(display.slice(0, -1));
    }
  };

  //* Attribute (operation)
  const operations = (event) => {
    if (!redLed) {
      if (display !== "" && display !== "-") {
        setYellowLed(true);
        setAttribute(event.target.name);
        setValuesToOperate([Number(display)]);
        setDisplay("");
      }
    }
  };

  //* Equal Button callback
  const calculate = () => {
    if (!redLed) {
      if (valuesToOperate.length === 1) {
        setValuesToOperate([...valuesToOperate, Number(display)]);
        if (attribute !== "") {
          setReadyToShow(true);
          setBlueLed(true);
        }
      }
    }
  };

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
    <PokedexContext.Provider
      value={{
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
        addNumber,
        messagePikachu,
        setMessagePikachu,
        pikachuFace,
        setPikachuFace,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}
