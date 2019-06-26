package it.sandeliukai.inventory;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryItemRepo extends JpaRepository<InventoryItem, Long> {
}
