import AddressLabel from "./AddressLabel";
import Postcode from "./Postcode";
import Streetname from "./Streetname";
import HouseNumber from "./HouseNumber";
import Location from "./Location";

function Address() {
  return (
    <>
      <AddressLabel></AddressLabel>
      <Streetname></Streetname>
      <HouseNumber></HouseNumber>
      <Postcode></Postcode>
      <Location></Location>
    </>
  );
}

export default Address;
