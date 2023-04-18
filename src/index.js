import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import PSAKontrolle from "./PSA";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PSAKontrolle />
  </StrictMode>
);
