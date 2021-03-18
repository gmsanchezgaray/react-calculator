import "../LeftPart/leftPart.css";

import stroke from "../LeftPart/stroke-left.svg";
import StatusScreen from "./StatusScreen";
import Pikachu from "./Pikachu";
import LedIndicators from "./LedIndicators";

export default function LeftPart() {
  return (
    <div id="left-part">
      <div className="shadow-top"></div>
      <LedIndicators />
      <div id="left-part-inside">
        <img className="stroke-right" src={stroke} alt="decoration pokedex" />
        <div className="frame-screen">
          <div className="wrapper">
            <div className="btn-sm-red"></div>
            <div className="btn-sm-red"></div>
          </div>
          <Pikachu />
          <div className="wrapper">
            <div className="btn-md-red"></div>
            <div className="speaker"></div>
          </div>
        </div>
        <div className="wrapper">
          <div className="btn-lg-black"></div>
          <div className="wrapper">
            <span className="thin-btn"></span>
            <span className="thin-btn"></span>
          </div>
          <StatusScreen />
        </div>
      </div>
    </div>
  );
}
