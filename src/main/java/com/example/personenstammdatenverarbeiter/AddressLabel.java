package com.example.personenstammdatenverarbeiter;

public enum AddressLabel {
    PRIVATE("Privat"),
    BUSINESS("Geschäftlich"),
    DELIVERY_ADDRESS("Lieferadresse");

    private String labelValue;

    private AddressLabel(String labelValue) {
        this.labelValue = labelValue;
    }

    public String getLabelValue() {
        return labelValue;
    }
}
