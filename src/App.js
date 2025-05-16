import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginQuiz from "./login";
import SurprisePage from "./surprise";

function App() {
  return (
    <BrowserRouter basename="/V-R">
      <Routes>
        <Route path="/" element={<LoginQuiz />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
