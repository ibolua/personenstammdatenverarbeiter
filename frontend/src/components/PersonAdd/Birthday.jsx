import React from "react";

import { usePersonForm } from "./PersonFormContext";

function Birthday() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, birthday: e.target.value });
  };
  return (
    <>
      <div className="">
        <label htmlFor="birthday" className="block font-medium text-gray-700">
          Geburtstag
        </label>
        {errors.birthday && <p className="mt-2 text-sm text-red-600">{errors.birthday}</p>}
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={personData.birthday}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default Birthday;
