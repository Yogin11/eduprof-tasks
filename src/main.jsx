import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { getUser, getUsers } from "./mystate.jsx";

import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App items={{ key_getUser: getUser, key_getUsers: getUsers }} />
  </BrowserRouter>
);
