import React from "react";

function Lastname({ onChange, error }) {
  return (
    <>
      <label htmlFor="lastname">Nachname</label>
      <input type="text" id="lastname" name="lastname" onChange={(e) => onChange(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default Lastname;
