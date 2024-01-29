import React from "react";
import PersonList from "./PersonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import PersonAdd from "./PersonAdd";

function PersonalDataProcessor() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/persons" element={<PersonList />}></Route>
        <Route path="/person-add" element={<PersonAdd />}></Route>
      </Routes>
    </Router>
  );
}

export default PersonalDataProcessor;
