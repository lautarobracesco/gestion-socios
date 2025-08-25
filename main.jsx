import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SociosProvider } from "./context/socios-provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SociosProvider>
      <App />
    </SociosProvider>
  </React.StrictMode>
);
