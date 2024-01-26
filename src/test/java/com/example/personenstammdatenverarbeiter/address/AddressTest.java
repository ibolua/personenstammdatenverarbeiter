package com.example.personenstammdatenverarbeiter.address;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class AddressTest {

    private final AddressLabel PRIVATE_LABEL = AddressLabel.PRIVATE;
    private final String PRIVATE_STREET = "Private Street";
    private final String PRIVATE_HOUSENUMBER = "17";
    private final String PRIVATE_POSTCOE = "12345";
    private final String PRIVATE_LOCATION = "Private City";

    private Address createPrivateAddress() {
        Address address = new Address();
        address.setLabel(PRIVATE_LABEL);
        address.setStreetname(PRIVATE_STREET);
        address.setHouseNumber(PRIVATE_HOUSENUMBER);
        address.setPostcode(PRIVATE_POSTCOE);
        address.setLocation(PRIVATE_LOCATION);
        return address;
    }

    @Test
    @DisplayName("Test toString method of Address for including all attributes")
    public void toString_includesAllAddressAttributes() {
        Address address = createPrivateAddress();

        String tostr = address.toString();
        assertTrue(tostr.contains(PRIVATE_LABEL.toString()));
        assertTrue(tostr.contains(PRIVATE_STREET));
        assertTrue(tostr.contains(PRIVATE_HOUSENUMBER));
        assertTrue(tostr.contains(PRIVATE_POSTCOE));
        assertTrue(tostr.contains(PRIVATE_LOCATION));
    }

    @Test
    @DisplayName("Compare two equal instances of the same type")
    public void equals_sameInstance_true() {
        Address addr1 = createPrivateAddress();

        Address addr2 = addr1;
        assertTrue(addr1.equals(addr2), "Addresses should be equal");
    }

    @Test
    @DisplayName("Compare two addresses with equal attributes")
    public void equals_equalAttributeAddresses_true() {
        Address addr1 = createPrivateAddress();
        Address addr2 = createPrivateAddress();

        assertEquals(addr1, addr2, "Two instances of Address with identical attributes should be equal");
    }

    @Test
    @DisplayName("Compare an instance with a null object")
    public void equals_nullObject_false() {
        Address addr1 = createPrivateAddress();
        assertFalse(addr1.equals(null), "Null and non-null objects should not be equal");
    }

    @Test
    @DisplayName("Compare two addresses with different address labels")
    public void equals_differentAddressLabels_false() {
        Address addr1 = createPrivateAddress();
        Address addr2 = createPrivateAddress();
        addr2.setLabel(AddressLabel.DELIVERY_ADDRESS);
        assertNotEquals(addr1, addr2, "Two instances of Address with different address labels should not be equal");
    }

    @Test
    @DisplayName("Compare two addresses with different streetnames")
    public void equals_differentStreetnames_false() {
        Address addr1 = createPrivateAddress();
        Address addr2 = createPrivateAddress();
        addr2.setStreetname("another streetname");
        assertNotEquals(addr1, addr2, "Two instances of Address with different streetnames should not be equal");
    }

    @Test
    @DisplayName("Compare two addresses with different house numbers")
    public void equals_differentHouseNumbers_false() {
        Address addr1 = createPrivateAddress();
        Address addr2 = createPrivateAddress();
        addr2.setHouseNumber("99");
        assertNotEquals(addr1, addr2, "Two instances of Address with different house numbers should not be equal");
    }

    @Test
    @DisplayName("Compare two addresses with different postcodes")
    public void equals_differentPostcodes_false() {
        Address addr1 = createPrivateAddress();
        Address addr2 = createPrivateAddress();
        addr2.setPostcode("99999");
        assertNotEquals(addr1, addr2, "Addresses with different postcodes should not be equal");
    }

    @Test
    @DisplayName("Compare two addresses with different locations")
    public void equals_differentLocations_false() {
        Address addr1 = createPrivateAddress();
        Address addr2 = createPrivateAddress();
        addr2.setLocation("different location");
        assertNotEquals(addr1, addr2, "Addresses with different locations should not be equal");
    }

}
