import React from "react";

import { usePersonForm } from "./PersonFormContext";

function Email() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, email: e.target.value });
  };
  return (
    <>
      <label htmlFor="email">E-Mail</label>
      <input type="text" id="email" name="email" value={personData.email} onChange={handleChange} />
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
    </>
  );
}

export default Email;
