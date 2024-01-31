import React from "react";
import salutationOptions from "../../options/salutationOptions";
import { usePersonForm } from "./PersonFormContext";

function Salutation() {
  const { personData, setPersonData, errors } = usePersonForm();

  const handleChange = (e) => {
    setPersonData({ ...personData, salutation: e.target.value });
  };
  return (
    <>
      <div className="">
        <label htmlFor="salutation" className="block font-medium text-gray-700">
          Anrede
        </label>
        {errors.salutation && <p className="mt-2 text-sm text-red-600">{errors.salutation}</p>}
        <select
          id="salutation"
          name="salutation"
          value={personData.salutation || ""}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="" disabled>
            Bitte auswählen
          </option>
          {Object.entries(salutationOptions).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Salutation;
