package it.sandeliukai.inventory;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "InventoryItems Controller")
@RequestMapping(value = "/api/inventoryItems")
public class InventoryItemController {

    @Autowired
    private InventoryItemService inventoryItemService;

    public InventoryItemController(InventoryItemService inventoryItemService) {
        this.inventoryItemService = inventoryItemService;
    }


    private static Logger logger = LoggerFactory.getLogger(InventoryItemController.class);

    /*---Add new inventoryItem---*/

    @PostMapping
    @ApiOperation(value = "Save new inventoryItem", notes = "Creates new inventoryItem and saves to database")
    public void save(@RequestBody final InventoryItemEntry inventoryItemEntry){
        logger.info("A document has been created");
        inventoryItemService.create(inventoryItemEntry);
    }

    /*---Update existing inventoryItem by id---*/

    @PutMapping("/{id}")
    @ApiOperation(value = "Update existing inventory item")
    public void update(@PathVariable final Long id, @RequestBody InventoryItemEntry inventoryItemEntry){
        logger.info("A inventory item has been updated");
        inventoryItemService.update(id, inventoryItemEntry);
    }

    /*---get inventoryItem by id---*/

    @GetMapping(value = "/{id}")
    @ApiOperation(value = "Get inventory item by id", notes = "Returns specific inventory item by id")
    public InventoryItemForm getById(
            @ApiParam(value = "id", required = true)
            @PathVariable final Long id) {
        logger.info("Specific inventory item has been found");
        return inventoryItemService.get(id);
    }

    /*---get all inventoryItems---*/

    @GetMapping
    @ApiOperation(value = "Get all inventory items", notes = "Returns all inventory items from database")
    public List<InventoryItemForm> getAllDocuments(){
        logger.info("List of all inventory items");
        return inventoryItemService.listAll();
    }

    /*---Delete a inventoryItem by id---*/

    @DeleteMapping("/{id}")
    @ApiOperation(value = "Delete inventory item by id")
    public void delete(@ApiParam(value = "id", required = true) @PathVariable final Long id){
        logger.info("A inventory item has been deleted");
        inventoryItemService.delete(id);
    }


}
