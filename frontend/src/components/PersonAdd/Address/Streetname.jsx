import React, { useState } from "react";

function Streetname() {
  const [streetname, setStreetname] = useState("");

  const handleChange = (event) => {
    setStreetname(event.target.value);
  };
  return (
    <>
      <label htmlFor="streetname">Straße</label>
      <input
        type="text"
        id="streetname"
        name="streetname"
        value={streetname}
        onChange={handleChange}
      />
    </>
  );
}

export default Streetname;
