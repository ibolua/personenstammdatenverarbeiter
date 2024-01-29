import React, { useState } from "react";

function Email() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <label htmlFor="email">E-Mail</label>
      <input type="text" id="email" name="email" value={email} onChange={handleChange} />
    </>
  );
}

export default Email;
