import React from "react";

function Person({ person, onDelete, onEdit, onCreate}) {
  return (
    <div>
      {person.salutation} {person.firstname} {person.lastname} {person.email}
      {person.addresses.map((address) => (
        <div key={address.id}>
          {address.label} {address.streetname} {address.houseNumber} {address.postcode} {address.location}
        </div>
      ))}
      <button onClick={() => onDelete(person.id)}>Delete</button>
      <p></p>
      <button onClick={() => onEdit()}>Edit</button>
      <button onClick={() => onCreate()}>Create</button>

    </div>
  );
}

export default Person;
