package com.example.personenstammdatenverarbeiter.address;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/address")
public class AddressController {
    Logger logger = LoggerFactory.getLogger(AddressController.class);

    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping("/{personId}")
    public ResponseEntity<Address> addAddressToPerson(@PathVariable Long personId, @RequestBody Address address) {
        Address savedAddress = addressService.addAddressToPerson(personId, address);
        return ResponseEntity.ok(savedAddress);
    }

    @GetMapping("/{personId}")
    public ResponseEntity<List<Address>> getAddressesByPerson(@PathVariable Long personId) {
        List<Address> addresses = addressService.getAllAddressesForPerson(personId);
        return ResponseEntity.ok(addresses);
    }

    @DeleteMapping("/{personId}/{addressId}")
    public ResponseEntity<Void> deleteAddressFromPerson(@PathVariable Long personId, @PathVariable Long addressId) {
        addressService.deleteAddressFromPerson(personId, addressId);
        return ResponseEntity.ok().build();
    }

}
