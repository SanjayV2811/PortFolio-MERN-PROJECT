import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import OwnerContextProvider from "./context/OwnerContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <OwnerContextProvider>
      <App />
    </OwnerContextProvider>
  </BrowserRouter>
);
