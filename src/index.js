import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("root");

// ReactDOM.render(_que__, __donde__);
ReactDOM.render(<BadgeNew />, container);
