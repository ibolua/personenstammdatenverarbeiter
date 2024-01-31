import React from "react";

import { usePersonForm } from "./PersonFormContext";

function Lastname() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, lastname: e.target.value });
  };

  return (
    <>
      <div className="">
        <label htmlFor="lastname" className="block font-medium text-gray-700">
          Nachname
        </label>
        {errors.lastname && <p className="mt-2 text-sm text-red-600">{errors.lastname}</p>}
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={personData.lastname}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default Lastname;
