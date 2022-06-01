import React from "react";
import logo from "./logo.svg";
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./components/pages/Home";
import { Products } from "./components/pages/Products";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
