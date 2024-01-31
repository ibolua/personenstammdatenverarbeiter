import React from "react";
import { usePersonForm } from "../PersonFormContext";

function Location({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "location", e.target.value);
  };

  const error =
    errors.addresses && errors.addresses[index] ? errors.addresses[index].location : null;

  return (
    <>
      <div className="">
        <label htmlFor="location" className="block font-medium text-gray-700">
          Ort
        </label>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <input
          type="text"
          id={`location-${index}`}
          name="location"
          value={personData.location}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default Location;
