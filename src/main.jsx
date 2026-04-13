import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HyperFlowV2 from "../HyperFlow.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HyperFlowV2 />
  </StrictMode>
);
