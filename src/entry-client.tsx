import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

if (import.meta.env.MODE === "development") {
  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  hydrateRoot(
    document.getElementById("root")!,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
