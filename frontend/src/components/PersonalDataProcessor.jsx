import React from "react";
import PersonList from "./PersonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

function PersonalDataProcessor() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/persons" element={<PersonList />}></Route>
      </Routes>
    </Router>
  );
}

export default PersonalDataProcessor;
