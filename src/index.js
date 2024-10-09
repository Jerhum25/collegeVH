import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Contact from "./pages/Contact/Contact";
import Eleves from "./pages/Eleves/Eleves";
import Professeurs from "./pages/Professeurs/Professeurs";
import Accueil from "./pages/Accueil/Accueil";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/professeurs" element={<Professeurs />} />
        <Route path="/classes" element={<Eleves />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
