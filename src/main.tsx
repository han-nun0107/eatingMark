import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout.tsx";
import { EatingMarkProvider } from "./context/eatingMarkProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EatingMarkProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EatingMarkProvider>
  </StrictMode>
);
