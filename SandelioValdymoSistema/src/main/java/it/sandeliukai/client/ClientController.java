package it.sandeliukai.client;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "Clients Controller")
@RequestMapping(value = "/api/clients")
public class ClientController {

    private static final Logger LOG = LoggerFactory.getLogger(ClientService.class);

    @Autowired
    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

//    public boolean nameAndSurnameBirtdayUnique(Long id, String name, String surname, int birthdayDate) {
//        LOG.debug("Checking title '{}' uniqueness for partner id '{}'", name, surname, birthdayDate id);
//
//        BooleanExpression checkBy = notDeleted().and(byClient(loggedClient).and(asTitle(title)));
//
//        Partner partner = partnerRepo.findOne(checkBy);
//        return partner == null || partner.getId().equals(id);
//    }

    /*---Add new user---*/

    @PostMapping
    @ApiOperation(value = "Save new user", notes = "Creates new client and saves to database")
    public void save(@RequestBody final ClientEntry client){
        LOG.info("A client has been created");
        clientService.createClient(client);
    }

    /*---Update existing user by userId---*/

    @PutMapping("/{clientId}")
    @ApiOperation(value = "Update existing client")
    public void update(@PathVariable final Long userId, @RequestBody ClientEntry client){
        LOG.info("A client has been updated");
        clientService.updateClient(userId, client);
    }
//
//    /*---get user by id---*/
//
//    @GetMapping(value = "/{clientId}")
//    @ApiOperation(value = "Get client by id", notes = "Returns specific client by id")
//    public ClientForm getById(
//            @ApiParam(value = "clientId", required = true)
//            @PathVariable final Long clientId) {
//        LOG.info("Specific client has been found");
//        return clientService.get(clientId);
//    }


//    /*---get user by name and surname--*/
//
//    @GetMapping(value = "/{clientId}")
//    @ApiOperation(value = "Get user by id", notes = "Returns specific user by id")
//    public ClientForm getById(
//            @ApiParam(value = "clientId", required = true)
//            @PathVariable final Long clientId) {
//        LOG.info("Specific client has been found");
//        return clientService.get(clientId);
//    }

    /*---get all users---*/

    @GetMapping
    @ApiOperation(value = "Get all clients", notes = "Returns all clients from database")
    public List<ClientForm> getAllDocuments(){
        LOG.info("List of all clients");
        return clientService.findAllClients();
    }

    @DeleteMapping("/{clientId}")
    @ApiOperation(value = "Delete client by id")
    public void delete(@ApiParam(value = "clientId", required = true) @PathVariable final Long clientId){
        LOG.info("A client has been deleted");
        clientService.deleteClient(clientId);
    }
}
