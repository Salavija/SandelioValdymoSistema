package it.sandeliukai.client;

public class ClientForm {

    private long clientId;
    private String name;
    private String surname;
    private int birthdayDate;
    private int phoneNumber;
    private Client.Type type;

    public ClientForm(long clientId) {
        this.clientId = clientId;
    }

    public ClientForm(String name, String surname, int birthdayDate, int phoneNumber, Client.Type type) {
        this.name = name;
        this.surname = surname;
        this.birthdayDate = birthdayDate;
        this.phoneNumber = phoneNumber;
        this.type = type;
    }

    public long getClientId() {
        return clientId;
    }

    public void setClientId(long clientId) {
        this.clientId = clientId;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public int getBirthdayDate() {
        return birthdayDate;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public Client.Type getType() {
        return type;
    }
}
