import React, { useState } from "react";

function Birthday() {
  const [birthday, setBirthday] = useState("");

  const handleChange = (event) => {
    setBirthday(event.target.value);
  };
  return (
    <>
      <label htmlFor="birthday">Geburtstag</label>
      <input type="text" id="birthday" name="birthday" value={birthday} onChange={handleChange} />
    </>
  );
}

export default Birthday;
