import React from "react";
import salutationOptions from "../options/salutationOptions";
import addressLabelOptions from "../options/addressLabelOptions";

function Person({ person, onDelete, onEdit }) {
  function formatDate(input) {
    const [year, month, day] = input.split("-");
    return `${day}.${month}.${year}`;
  }

  return (
    <div className="">
      <div className="">
        <div className="text-lg font-semibold">
          {salutationOptions[person.salutation]} {person.firstname} {person.lastname}
        </div>
        <div className="text-sm text-gray-600">
          {person.email} | {formatDate(person.birthday)}
        </div>
      </div>

      <div className="pt-4">
        <div className="text-lg font-semibold">Adressen</div>
        {person.addresses.map((address) => (
          <div className="pb-4" key={address.id}>
            <div className="font-semibold">{addressLabelOptions[address.label]}</div>
            <div>
              {address.streetname} {address.houseNumber}, {address.postcode} {address.location}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <button
          className="mr-2 px-4 py-2 bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white border border-red-700 hover:border-transparent rounded"
          onClick={() => onDelete(person.id)}>
          Löschen
        </button>
        <button
          className="mr-2 px-4 py-2 hover:bg-ase-blue-2 bg-ase-primary-blue font-semibold text-white border border-ase-primary-blue hover:border-ase-blue-2 rounded"
          onClick={() => onEdit()}>
          Bearbeiten
        </button>
      </div>
    </div>
  );
}

export default Person;
