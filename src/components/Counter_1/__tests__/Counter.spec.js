import React from "react";
import ReactDOM from "react-dom";
import {Counter} from '../index'

describe("Counter", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});