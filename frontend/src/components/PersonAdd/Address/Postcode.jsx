import React from "react";
import { usePersonForm } from "../PersonFormContext";

function Postcode({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "postcode", e.target.value);
  };

  const error =
    errors.addresses && errors.addresses[index] ? errors.addresses[index].postcode : null;

  return (
    <>
      <div className="">
        <label htmlFor="postcode" className="block font-medium text-gray-700">
          PLZ
        </label>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <input
          type="text"
          id={`postcode-${index}`}
          name="postcode"
          value={personData.postcode}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default Postcode;
