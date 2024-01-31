import React from "react";

import { usePersonForm } from "./PersonFormContext";

function Lastname() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, lastname: e.target.value });
  };

  return (
    <>
      <label htmlFor="lastname">Nachname</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={personData.lastname}
        onChange={handleChange}
      />
      {errors.lastname && <div style={{ color: "red" }}>{errors.lastname}</div>}
    </>
  );
}

export default Lastname;
