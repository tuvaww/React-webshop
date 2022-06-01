import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./components/pages/Home";
import { Products } from "./components/pages/Products";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
