import React, { useState } from "react";

function Location({ onChange }) {
  return (
    <>
      <label htmlFor="location">Ort</label>
      <input
        type="text"
        id="location"
        name="location"
        onChange={(e) => onChange("location", e.target.value)}
      />
    </>
  );
}

export default Location;
