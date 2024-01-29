import React from "react";

function Postcode({ onChange }) {
  return (
    <>
      <label htmlFor="postcode">PLZ</label>
      <input
        type="text"
        id="postcode"
        name="postcode"
        onChange={(e) => onChange("postcode", e.target.value)}
      />
    </>
  );
}

export default Postcode;
