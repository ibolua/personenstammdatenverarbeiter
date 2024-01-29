import React, { useState } from "react";
import Address from "./Address";

function AddressList() {
  const [addresses, setAddresses] = useState([1]);

  const addAddressFormular = () => {
    setAddresses((addresses) => [...addresses, 1]);
  };

  const removeAddress = (index) => {
    if (addresses.length > 1) {
      setAddresses((addresses) => addresses.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      {addresses.map((_, index) => (
        <div key={index}>
          <Address></Address>
          <button type="button" onClick={() => removeAddress(index)}>
            Löschen
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addAddressFormular()}>
        Add Address
      </button>
    </>
  );
}

export default AddressList;
