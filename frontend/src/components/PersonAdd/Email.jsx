import React from "react";

function Email({ onChange }) {
  return (
    <>
      <label htmlFor="email">E-Mail</label>
      <input type="text" id="email" name="email" onChange={(e) => onChange(e.target.value)} />
    </>
  );
}

export default Email;
