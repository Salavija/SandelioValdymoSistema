package it.sandeliukai.client;

import it.sandeliukai.inventory.InventoryItem;
import jdk.nashorn.internal.objects.annotations.Property;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Client {

    public enum Type {
        SIMPLE, LOYAL
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Property
    @Column(name = "client_id")
    private Long clientId;

    @Column(nullable = false, name = "name")
    private String name;

    @Column(nullable = false, name = "surname")
    private String surname;

    @Column(nullable = false, name = "birthdayDate")
    private int birthdayDate;

    @Column(nullable = false, name = "phoneNumber")
    private int phoneNumber;

    @Column(nullable = false, name = "type")
    private Type type;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_of_inventoryItem",
            joinColumns = @JoinColumn(name = "client_id"), inverseJoinColumns = @JoinColumn(name = "item_id"))
    private Set<InventoryItem> inventoryItems = new HashSet<>();

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }


    public int getBirthdayDate() {
        return birthdayDate;
    }

    public void setBirthdayDate(int birthdayDate) {
        this.birthdayDate = birthdayDate;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Set<InventoryItem> getInventoryItems() {
        return inventoryItems;
    }

    public void setInventoryItems(Set<InventoryItem> inventoryItems) {
        this.inventoryItems = inventoryItems;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Client)) return false;
        Client client = (Client) o;
        return Objects.equals(clientId, client.clientId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(clientId);
    }
}
