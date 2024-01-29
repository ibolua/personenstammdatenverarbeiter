import AddressLabel from "./AddressLabel";
import Postcode from "./Postcode";
import Streetname from "./Streetname";
import HouseNumber from "./HouseNumber";
import Location from "./Location";

function Address({ onChange }) {
  return (
    <>
      <AddressLabel onChange={(name, value) => onChange(name, value)}></AddressLabel>
      <Streetname onChange={(name, value) => onChange(name, value)} />
      <HouseNumber onChange={(name, value) => onChange(name, value)}></HouseNumber>
      <Postcode onChange={(name, value) => onChange(name, value)}></Postcode>
      <Location onChange={(name, value) => onChange(name, value)}></Location>
    </>
  );
}

export default Address;
