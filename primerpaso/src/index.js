import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


const root = ReactDOM.createRoot(
  document.getElementById("root")
); /* el elemento que tiene id = root,es un div del index.html, aca dice que se renderiza */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
