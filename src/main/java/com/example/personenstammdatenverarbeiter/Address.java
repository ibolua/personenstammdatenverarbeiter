package com.example.personenstammdatenverarbeiter;

import com.example.personenstammdatenverarbeiter.person.Person;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Address {

    @Id
    @GeneratedValue
    private long id;

    private AddressLabel label;
    @NotBlank
    private String sreetname;
    @NotBlank
    private String houseNumber;
    @NotBlank
    private String postcode;
    @NotBlank
    private String location;

    @ManyToOne
    @JoinColumn(name = "person_id")
    @JsonBackReference
    private Person person;

    public long getId() {
        return id;
    }

    public AddressLabel getLabel() {
        return label;
    }

    public void setLabel(AddressLabel label) {
        this.label = label;
    }

    public String getSreetname() {
        return sreetname;
    }

    public void setSreetname(String sreetname) {
        this.sreetname = sreetname;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (id ^ (id >>> 32));
        result = prime * result + ((label == null) ? 0 : label.hashCode());
        result = prime * result + ((sreetname == null) ? 0 : sreetname.hashCode());
        result = prime * result + ((houseNumber == null) ? 0 : houseNumber.hashCode());
        result = prime * result + ((postcode == null) ? 0 : postcode.hashCode());
        result = prime * result + ((location == null) ? 0 : location.hashCode());
        result = prime * result + ((person == null) ? 0 : person.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Address other = (Address) obj;
        if (id != other.id)
            return false;
        if (label != other.label)
            return false;
        if (sreetname == null) {
            if (other.sreetname != null)
                return false;
        } else if (!sreetname.equals(other.sreetname))
            return false;
        if (houseNumber == null) {
            if (other.houseNumber != null)
                return false;
        } else if (!houseNumber.equals(other.houseNumber))
            return false;
        if (postcode == null) {
            if (other.postcode != null)
                return false;
        } else if (!postcode.equals(other.postcode))
            return false;
        if (location == null) {
            if (other.location != null)
                return false;
        } else if (!location.equals(other.location))
            return false;
        return true;
    }

}
