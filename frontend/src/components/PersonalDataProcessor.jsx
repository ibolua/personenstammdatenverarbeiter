import React from "react";
import PersonList from "./PersonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import PersonAdd from "./PersonAdd/PersonAdd";
import { PersonFormProvider } from "./PersonAdd/PersonFormContext";

function PersonalDataProcessor() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/persons" element={<PersonList />}></Route>
        <Route
          path="/person-add"
          element={
            <PersonFormProvider>
              <PersonAdd />
            </PersonFormProvider>
          }></Route>
      </Routes>
    </Router>
  );
}

export default PersonalDataProcessor;
