import React from "react";

function Birthday({ onChange, error }) {
  return (
    <>
      <label htmlFor="birthday">Geburtstag</label>
      <input type="date" id="birthday" name="birthday" onChange={(e) => onChange(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default Birthday;
