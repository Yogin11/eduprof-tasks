import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { getUser } from "./mystate.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   
        <App function={getUser} />
  </BrowserRouter>
);
