import React from "react";
import salutationOptions from "../options/salutationOptions";
import addressLabelOptions from "../options/addressLabelOptions";

function Person({ person, onDelete, onEdit, onCreate }) {
  return (
    <div>
      {salutationOptions[person.salutation]} {person.firstname} {person.lastname} {person.email}
      {person.addresses.map((address) => (
        <div key={address.id}>
          {addressLabelOptions[address.label]} {address.streetname} {address.houseNumber}{" "}
          {address.postcode} {address.location}
        </div>
      ))}
      <button onClick={() => onDelete(person.id)}>Delete</button>
      <p></p>
      <button onClick={() => onEdit()}>Edit</button>
    </div>
  );
}

export default Person;
