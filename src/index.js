import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
import "./index.css"

ReactDOM.render(<App />, document.getElementById("root"));

(function initStyleChanger() {
  console.log(process.env.PUBLIC_URL);
  let linkelem = document.createElement("link");
  linkelem.setAttribute("id", "extra-styles");
  linkelem.setAttribute("rel", "stylesheet");
  linkelem.setAttribute(
      "href", process.env.PUBLIC_URL + "/v1.css"
    );
  document.head.appendChild(linkelem);
})();