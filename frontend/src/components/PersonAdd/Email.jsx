import React from "react";

function Email({ onChange, error }) {
  return (
    <>
      <label htmlFor="email">E-Mail</label>
      <input type="text" id="email" name="email" onChange={(e) => onChange(e.target.value)} />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default Email;
