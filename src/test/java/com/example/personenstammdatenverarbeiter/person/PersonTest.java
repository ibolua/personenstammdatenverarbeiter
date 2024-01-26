package com.example.personenstammdatenverarbeiter.person;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.example.personenstammdatenverarbeiter.address.Address;
import com.example.personenstammdatenverarbeiter.address.AddressLabel;

public class PersonTest {

    private final Salutation TEST_SALUTATION = Salutation.MALE;
    private final String TEST_FIRSTNAME = "John";
    private final String TEST_LASTNAME = "Stone";
    private final String TEST_EMAIL = "john.stone@person.net";
    private final LocalDate TEST_BIRTHDAY = LocalDate.parse("1995-05-05");

    private final AddressLabel PRIVATE_LABEL = AddressLabel.PRIVATE;
    private final String PRIVATE_STREET = "Private Street";
    private final String PRIVATE_HOUSENUMBER = "17";
    private final String PRIVATE_POSTCOE = "12345";
    private final String PRIVATE_LOCATION = "Private City";

    private final AddressLabel BUSINESS_LABEL = AddressLabel.BUSINESS;
    private final String BUSINESS_STREET = "Business Street";
    private final String BUSINESS_HOUSENUMBER = "42";
    private final String BUSINESS_POSTCODE = "67890";
    private final String BUSINESS_CITY = "Business City";

    private final AddressLabel DELIVERY_LABEL = AddressLabel.DELIVERY_ADDRESS;
    private final String DELIVERY_STREET = "Delivery Street";
    private final String DELIVERY_HOUSENUMBER = "10";
    private final String DELIVERY_POSTCODE = "98765";
    private final String DELIVERY_CITY = "Delivery City";

    private Person createTestPerson() {
        Person person = new Person();
        person.setSalutation(TEST_SALUTATION);
        person.setFirstname(TEST_FIRSTNAME);
        person.setLastname(TEST_LASTNAME);
        person.setEmail(TEST_EMAIL);
        person.setBirthday(TEST_BIRTHDAY);
        person.setAddresses(createTestAddresses());
        return person;
    }

    private List<Address> createTestAddresses() {
        List<Address> addresses = new ArrayList<>();

        Address a1 = createPrivateAddress();
        Address a2 = createBusinessAddress();
        Address a3 = createDeliverAddress();

        addresses.add(a1);
        addresses.add(a2);
        addresses.add(a3);
        return addresses;
    }

    private Address createPrivateAddress() {
        Address address = new Address();
        address.setLabel(PRIVATE_LABEL);
        address.setStreetname(PRIVATE_STREET);
        address.setHouseNumber(PRIVATE_HOUSENUMBER);
        address.setPostcode(PRIVATE_POSTCOE);
        address.setLocation(PRIVATE_LOCATION);
        return address;
    }

    private Address createBusinessAddress() {
        Address address = new Address();
        address.setLabel(BUSINESS_LABEL);
        address.setStreetname(BUSINESS_STREET);
        address.setHouseNumber(BUSINESS_HOUSENUMBER);
        address.setPostcode(BUSINESS_POSTCODE);
        address.setLocation(BUSINESS_CITY);
        return address;
    }

    private Address createDeliverAddress() {
        Address address = new Address();
        address.setLabel(DELIVERY_LABEL);
        address.setStreetname(DELIVERY_STREET);
        address.setHouseNumber(DELIVERY_HOUSENUMBER);
        address.setPostcode(DELIVERY_POSTCODE);
        address.setLocation(DELIVERY_CITY);
        return address;
    }

    @Test
    @DisplayName("Test toString method of Person for including essential attributes")
    public void toString_includesEssentialPersonAttributes() {
        Person person = new Person();

        person.setSalutation(TEST_SALUTATION);
        person.setFirstname(TEST_FIRSTNAME);
        person.setLastname(TEST_LASTNAME);

        String tostr = person.toString();
        assertTrue(tostr.contains(TEST_SALUTATION.toString()));
        assertTrue(tostr.contains(TEST_FIRSTNAME));
        assertTrue(tostr.contains(TEST_LASTNAME));
    }

    @Test
    @DisplayName("Test birthday from person")
    public void getBirthDayFromPerson_returnsCorrectValue() {
        Person person = new Person();
        person.setBirthday(TEST_BIRTHDAY);
        LocalDate retrievedBirthday = person.getBirthday();
        assertEquals(TEST_BIRTHDAY, retrievedBirthday, "Birthday should match the set value");
    }

    @Test
    @DisplayName("Test email from person")
    public void getEmailFromPerson_returnsCorrectValue() {
        Person person = new Person();
        person.setEmail(TEST_EMAIL);
        String retrievedEmail = person.getEmail();
        assertEquals(TEST_EMAIL, retrievedEmail);
    }

    @Test
    @DisplayName("Test empty addresses from person")
    public void getAddressesFromPerson_returnsEmptyListIfNoAddressIsSet() {
        Person person = new Person();
        List<Address> addresses = person.getAddresses();
        assertNotNull(addresses);
        assertTrue(addresses.isEmpty(), "There should be no address in this list");
    }

    @Test
    @DisplayName("Test addresses from person")
    public void getAddressesFromPerson_returnsCorrectValues() {
        Person person = new Person();
        List<Address> testAddresses = createTestAddresses();
        person.setAddresses(testAddresses);
        assertEquals(person.getAddresses(), testAddresses);
    }

    @Test
    @DisplayName("Compare two persons with equal attributes")
    public void equals_twoPersonsEqual_returnTrue() {
        Person p1 = createTestPerson();
        Person p2 = createTestPerson();

        assertEquals(p1, p2, "Two instances of Person with identical attributes should be equal");
    }

    @Test
    @DisplayName("Compare two persons with different attributes")
    public void equals_twoPersonsDifferent_returnFalse() {
        Person p1 = createTestPerson();
        Person p2 = createTestPerson();

        p2.getAddresses().get(0).setHouseNumber("999");
        assertNotEquals(p1, p2, "Two instances of Person with different attributes should not be equal");
    }

    @Test
    @DisplayName("Compare two persons with different salutations")
    public void equals_differentSalutations_false() {
        Person p1 = createTestPerson();
        Person p2 = createTestPerson();
        p2.setSalutation(Salutation.FEMALE);
        assertNotEquals(p1, p2, "Persons with different salutations should not be equal");
    }

    @Test
    @DisplayName("Compare two persons with different first names")
    public void equals_differentFirstNames_false() {
        Person p1 = createTestPerson();
        Person p2 = createTestPerson();
        p2.setFirstname("another first name");
        assertNotEquals(p1, p2, "Persons with different first names should not be equal");
    }

    @Test
    @DisplayName("Compare two persons with different last names")
    public void equals_differentLastNames_false() {
        Person p1 = createTestPerson();
        Person p2 = createTestPerson();
        p2.setLastname("another last name");
        assertNotEquals(p1, p2, "Persons with different last names should not be equal");
    }

    @Test
    @DisplayName("Compare two persons with different emails")
    public void equals_differentEmails_false() {
        Person p1 = createTestPerson();
        Person p2 = createTestPerson();
        p2.setEmail("another.first.another.last.name@example.com");
        assertNotEquals(p1, p2, "Persons with different emails should not be equal");
    }

    @Test
    @DisplayName("Compare two persons with different birthdays")
    public void equals_differentBirthdays_false() {
        Person p1 = createTestPerson();
        Person p2 = createTestPerson();
        p2.setBirthday(LocalDate.parse("1999-09-09"));
        assertNotEquals(p1, p2, "Persons with different birthdays should not be equal");
    }

}
