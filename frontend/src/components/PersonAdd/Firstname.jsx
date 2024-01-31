import React from "react";

import { usePersonForm } from "./PersonFormContext";

function Firstname() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, firstname: e.target.value });
  };

  return (
    <>
      <div className="">
        <label htmlFor="firstname" className="block font-medium text-gray-700">
          Vorname
        </label>
        {errors.firstname && <p className="mt-2 text-sm text-red-600">{errors.firstname}</p>}
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={personData.firstname}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default Firstname;
