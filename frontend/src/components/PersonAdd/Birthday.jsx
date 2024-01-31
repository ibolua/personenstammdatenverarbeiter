import React from "react";

import { usePersonForm } from "./PersonFormContext";

function Birthday() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, birthday: e.target.value });
  };
  return (
    <>
      <label htmlFor="birthday">Geburtstag</label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        value={personData.birthday}
        onChange={handleChange}
      />
      {errors.birthday && <div style={{ color: "red" }}>{errors.birthday}</div>}
    </>
  );
}

export default Birthday;
