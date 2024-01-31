import React from "react";
import { usePersonForm } from "../PersonFormContext";

function HouseNumber({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "houseNumber", e.target.value);
  };

  const error =
    errors.addresses && errors.addresses[index] ? errors.addresses[index].houseNumber : null;

  return (
    <>
      <div className="">
        <label htmlFor="houseNumber" className="block font-medium text-gray-700">
          Hausnummer
        </label>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <input
          type="text"
          id={`houseNumber-${index}`}
          name="houseNumber"
          value={personData.houseNumber}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default HouseNumber;
