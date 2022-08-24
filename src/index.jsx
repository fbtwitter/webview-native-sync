import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routing from "./routing";
import "./scss/style.scss";
import "react-loading-skeleton/dist/skeleton.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Routing />
  </StrictMode>
);
