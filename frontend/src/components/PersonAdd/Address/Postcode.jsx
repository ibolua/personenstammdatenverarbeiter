import React, { useState } from "react";

function Postcode() {
  const [postcode, setPostcode] = useState("");

  const handleChange = (event) => {
    setPostcode(event.target.value);
  };
  return (
    <>
      <label htmlFor="postcode">PLZ</label>
      <input type="text" id="postcode" name="postcode" value={postcode} onChange={handleChange} />
    </>
  );
}

export default Postcode;
