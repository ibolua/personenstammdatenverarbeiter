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
        <div key={index}>
          <Address index={index} />
          {personData.addresses.length > 1 && (
            <button type="button" onClick={() => removeAddress(index)}>
              Löschen
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addAddress}>
        Add Address
      </button>
    </>
  );
}

export default AddressList;
