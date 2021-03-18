import React from "react";

import LeftPart from "./LeftPart";
import Flex from "./Flex";
import RightPart from "./RightPart";

const Pokedex = () => {
  return (
    <div className="pokedex">
      <LeftPart />
      <Flex />
      <RightPart />
    </div>
  );
};

export default Pokedex;
