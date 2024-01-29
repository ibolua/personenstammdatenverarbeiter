import React from "react";

function Birthday({ onChange }) {
  return (
    <>
      <label htmlFor="birthday">Geburtstag</label>
      <input type="text" id="birthday" name="birthday" onChange={(e) => onChange(e.target.value)} />
    </>
  );
}

export default Birthday;
