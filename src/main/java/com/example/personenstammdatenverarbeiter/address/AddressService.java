package com.example.personenstammdatenverarbeiter.address;

import java.util.List;

public interface AddressService {
    Address addAddressToPerson(long personId, Address address);

    List<Address> getAllAddressesForPerson(long personId);

    void deleteAddressFromPerson(long personId, long addressId);

}
