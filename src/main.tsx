import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import DataContextProvider from "./context/provider.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <DataContextProvider>
         <App />
      </DataContextProvider>
   </StrictMode>,
);
