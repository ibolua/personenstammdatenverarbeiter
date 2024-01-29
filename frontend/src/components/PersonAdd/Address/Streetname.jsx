import React, { useState } from "react";

function Streetname({ onChange }) {
  return (
    <>
      <label htmlFor="streetname">Straße</label>
      <input
        type="text"
        id="streetname"
        name="streetname"
        onChange={(e) => onChange("streetname", e.target.value)}
      />
    </>
  );
}

export default Streetname;
