package it.sandeliukai.inventory;

import it.sandeliukai.client.ClientRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class InventoryItemService {

    private static final Logger LOG = LoggerFactory.getLogger(InventoryItemService.class);

    @Autowired
    private InventoryItemRepo inventoryItemRepo;

    @Autowired
    private ClientRepo clientRepo;


    public InventoryItemService(InventoryItemRepo inventoryItemRepo) {
    this.inventoryItemRepo = inventoryItemRepo;
    }

    @Transactional
    public void create(InventoryItemEntry inventoryItemEntry) {
        InventoryItem inventoryItem = new InventoryItem();
        inventoryItem.setItemId(inventoryItemEntry.getItemId());
        inventoryItem.setTitle(inventoryItemEntry.getTitle());
        inventoryItem.setWeight(inventoryItemEntry.getWeight());
        inventoryItem.setSector(inventoryItemEntry.getSector());
        inventoryItem.setCreationDate(inventoryItemEntry.getCreationDate());
        inventoryItemRepo.save(inventoryItem);
    }

    @Transactional
    public InventoryItemForm get(Long id) {
        InventoryItem inventoryItem = inventoryItemRepo.getOne(id);
        if (inventoryItem != null) {
            return new InventoryItemForm(inventoryItem.getItemId(), inventoryItem.getTitle(), inventoryItem.getWeight(),
                    inventoryItem.getSector(), inventoryItem.getCreationDate());
        }
        return null;
    }

    @Transactional
    public List<InventoryItemForm> listAll() {
        return inventoryItemRepo.findAll().stream().map(inventoryItem ->
                new InventoryItemForm(inventoryItem.getItemId(), inventoryItem.getTitle(), inventoryItem.getWeight(),
                        inventoryItem.getSector(), inventoryItem.getCreationDate())).collect(Collectors.toList());
    }

    @Transactional
    public void update(long id, InventoryItemEntry inventoryItemEntry) {
        InventoryItem inventoryItem = inventoryItemRepo.getOne(id);//.orElse(null);
        if (inventoryItem != null) {
            inventoryItem.setTitle(inventoryItemEntry.getTitle());
            inventoryItem.setWeight(inventoryItemEntry.getWeight());
            inventoryItem.setSector(inventoryItemEntry.getSector());
        }
    }

    @Transactional
    public void delete(long id) {
        inventoryItemRepo.deleteById(id);
    }
}
