import React from "react";
import { usePersonForm } from "../PersonFormContext";

function Streetname({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "streetname", e.target.value);
  };

  const error =
    errors.addresses && errors.addresses[index] ? errors.addresses[index].streetname : null;

  return (
    <>
      <div className="">
        <label htmlFor="streetname" className="block font-medium text-gray-700">
          Straße
        </label>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <input
          type="text"
          id={`streetname-${index}`}
          name="streetname"
          value={personData.streetname}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default Streetname;
