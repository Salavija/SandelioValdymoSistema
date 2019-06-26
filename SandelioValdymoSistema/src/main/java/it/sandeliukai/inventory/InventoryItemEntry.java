package it.sandeliukai.inventory;

import java.time.LocalDate;

public class InventoryItemEntry {

    private long itemId;
    private String title;
    private float weight;
    private int sector;
    private LocalDate creationDate;

    public InventoryItemEntry(long itemId, String title, float weight, int sector, LocalDate creationDate) {
        this.itemId = itemId;
        this.title = title;
        this.weight = weight;
        this.sector = sector;
        this.creationDate = creationDate;
    }

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public int getSector() {
        return sector;
    }

    public void setSector(int sector) {
        this.sector = sector;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }
}
