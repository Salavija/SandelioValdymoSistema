package it.sandeliukai.client;

public class ClientEntry {

    private long clientId;
    private String name;
    private String surname;
    private int date;
    private int phoneNumber;

    private Client.Type type;

    public long clientId() {
        return clientId;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public int getDate() {
        return date;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public Client.Type getType() {
        return type;
    }


}
