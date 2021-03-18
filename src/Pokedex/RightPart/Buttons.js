import React, { useContext } from "react";

import PokedexContext from "../../context";

const Buttons = () => {
  const {
    display,
    setDisplay,
    setGreenLed,
    setYellowLed,
    redLed,
    setRedLed,
    setBlueLed,
    attribute,
    setAttribute,
    valuesToOperate,
    setValuesToOperate,
    setReadyToShow,
    setMessagePikachu,
    setPikachuFace,
  } = useContext(PokedexContext);

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
    setMessagePikachu("Calculate something");
    setPikachuFace("static/media/idle.424d7b6d.jpg");
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
        setTimeout(() => {
          setYellowLed(false);
        }, 1000);
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
          setTimeout(() => {
            setBlueLed(false);
          }, 1000);
        }
      }
    }
  };

  return (
    <div className="buttons-container">
      <button
        id="switch"
        className="buttons-action"
        onClick={switchValue}
        name="switch"
      >
        +/-
      </button>
      <button
        className="op buttons-operations"
        onClick={operations}
        name="divide"
      >
        /
      </button>
      <button
        className="op buttons-operations"
        onClick={operations}
        name="multiply"
      >
        *
      </button>
      <button
        className="op buttons-operations"
        onClick={operations}
        name="subtract"
      >
        -
      </button>
      <button className="num" onClick={addNumber} name="7">
        7
      </button>
      <button className="num" onClick={addNumber} name="8">
        8
      </button>
      <button className="num" onClick={addNumber} name="9">
        9
      </button>
      <button className="op buttons-operations" onClick={operations} name="add">
        +
      </button>
      <button className="num" onClick={addNumber} name="4">
        4
      </button>
      <button className="num" onClick={addNumber} name="5">
        5
      </button>
      <button className="num" onClick={addNumber} name="6">
        6
      </button>
      <button id="C" className="buttons-action" onClick={clearAll}>
        C
      </button>
      <button className="num" onClick={addNumber} name="1">
        1
      </button>
      <button className="num" onClick={addNumber} name="2">
        2
      </button>
      <button className="num" onClick={addNumber} name="3">
        3
      </button>
      <button id="submit" onClick={calculate} className="button-result">
        =
      </button>
      <button className="num" onClick={addNumber} name="0">
        0
      </button>
      <button id="dot" onClick={addDot} name=".">
        .
      </button>
      <button id="delete" className="buttons-action" onClick={backspace}>
        &lt;
      </button>
    </div>
  );
};

export default Buttons;
