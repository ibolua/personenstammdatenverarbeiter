import React from "react";

import { usePersonForm } from "./PersonFormContext";

function Firstname() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, firstname: e.target.value });
  };

  return (
    <>
      <label htmlFor="firstname">Vorname</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={personData.firstname}
        onChange={handleChange}
      />
      {errors.firstname && <div style={{ color: "red" }}>{errors.firstname}</div>}
    </>
  );
}

export default Firstname;
