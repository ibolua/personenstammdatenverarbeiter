import React from "react";
import addressLabelOptions from "../../../options/addressLabelOptions";
import { usePersonForm } from "../PersonFormContext";

function AddressLabel({ index }) {
  const { personData, handleAddressChange, errors } = usePersonForm();

  const handleChange = (e) => {
    handleAddressChange(index, "label", e.target.value);
  };

  const error = errors.addresses && errors.addresses[index] ? errors.addresses[index].label : null;

  return (
    <>
      <label htmlFor="label" className="block font-medium text-gray-700">
        Label
      </label>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <select
        id={`label-${index}`}
        name="label"
        value={personData.addresses[index].label}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="" disabled>
          Bitte auswählen
        </option>
        {Object.entries(addressLabelOptions).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}

export default AddressLabel;
