import React from "react";

import Citrus from "./Citrus";
import NonCitrus from "./NonCitrus";
import Vegetables from "./Vegetables";

export class Fruits extends React.Component {
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* change code below this line */}
        <Citrus />
        <NonCitrus />
        {/* change code above this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        {/* change code above this line */}
        <Vegetables />
      </div>
    );
  }
}

export default TypesOfFood;
