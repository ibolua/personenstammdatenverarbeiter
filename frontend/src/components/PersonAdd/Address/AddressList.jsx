import React from "react";
import Address from "./Address";
import { usePersonForm } from "../PersonFormContext";

function AddressList() {
  const { personData, setPersonData, emptyAddressFields } = usePersonForm();

  const addAddress = () => {
    setPersonData({ ...personData, addresses: [...personData.addresses, emptyAddressFields] });
  };

  const removeAddress = (index) => {
    if (personData.addresses.length > 1) {
      const filteredAddresses = personData.addresses.filter((_, i) => i !== index);
      setPersonData({ ...personData, addresses: filteredAddresses });
    }
  };

  return (
    <>
      {personData.addresses.map((_, index) => (
        <div key={index} className="space-y-4">
          <Address index={index} />
          {personData.addresses.length > 1 && (
            <button
              type="button"
              onClick={() => removeAddress(index)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
              Diese Adresse Löschen
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addAddress}
        className="mt-4 px-4 py-2 bg-ase-secondary-mustard text-white rounded hover:bg-ase-tertiary-warmgrey transition-colors">
        Weitere Adresse hinzufügen
      </button>
    </>
  );
}

export default AddressList;
