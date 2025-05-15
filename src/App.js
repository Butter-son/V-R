import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginQuiz from "./login";
import SurprisePage from "./surprise";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginQuiz />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Router>
  );
}

export default App;
