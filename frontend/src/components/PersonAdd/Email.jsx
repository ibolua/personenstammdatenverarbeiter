import React from "react";

import { usePersonForm } from "./PersonFormContext";

function Email() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, email: e.target.value });
  };
  return (
    <>
      <div className="">
        <label htmlFor="email" className="block font-medium text-gray-700">
          E-Mail
        </label>
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        <input
          type="text"
          id="email"
          name="email"
          value={personData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default Email;
