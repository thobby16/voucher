import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBell,
  faUser,
  faEdit,
  faTrash,
  faThumbsUp,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons";



library.add(faBell, faUser, faEdit, faTrash, faThumbsUp, faThumbsDown);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
