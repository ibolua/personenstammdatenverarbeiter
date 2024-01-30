import React from "react";

function Firstname({ onChange, error }) {
  return (
    <>
      <label htmlFor="firstname">Vorname</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default Firstname;
