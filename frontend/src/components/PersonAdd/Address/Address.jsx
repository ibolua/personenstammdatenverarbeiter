import AddressLabel from "./AddressLabel";
import Postcode from "./Postcode";
import Streetname from "./Streetname";
import HouseNumber from "./HouseNumber";
import Location from "./Location";

function Address({ index }) {
  return (
    <>
      <AddressLabel index={index}></AddressLabel>
      <Streetname index={index}></Streetname>
      <HouseNumber index={index}></HouseNumber>
      <Postcode index={index}></Postcode>
      <Location index={index}></Location>
    </>
  );
}

export default Address;
