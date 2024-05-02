import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
