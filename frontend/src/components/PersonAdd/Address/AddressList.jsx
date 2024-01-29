import React, { useState } from "react";
import Address from "./Address";

function AddressList({ onAddressChange }) {
  const [addresses, setAddresses] = useState([{}]);

  const addAddressFormular = () => {
    setAddresses([...addresses, {}]);
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
          <Address onChange={(name, value) => onAddressChange(index, name, value)} />
          {addresses.length > 1 && (
            <button type="button" onClick={() => removeAddress(index)}>
              Löschen
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addAddressFormular}>
        Add Address
      </button>
    </>
  );
}

export default AddressList;
