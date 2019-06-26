package it.sandeliukai.client;

import it.sandeliukai.inventory.InventoryItemRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientService {

    private static final Logger LOG = LoggerFactory.getLogger(ClientService.class);

    @Autowired
    private ClientRepo clientRepo;

    @Autowired
    private InventoryItemRepo inventoryItemRepo;

    public ClientService() {
    }

    public ClientService(ClientRepo clientRepo, InventoryItemRepo inventoryItemRepo) {
        this.clientRepo = clientRepo;
        this.inventoryItemRepo = inventoryItemRepo;
    }

    @Transactional(readOnly = true)
    public List<ClientForm> findAllClients() {
        return clientRepo.findAll().stream().map((client) ->
                new ClientForm(
                        client.getName(),
                        client.getSurname(),
                        client.getBirthdayDate(),
                        client.getPhoneNumber(),
                        client.getType())).collect(Collectors.toList());
    }

//    @Transactional
//    public ClientEntry findByClientId(Long clientId) {
//        Client client  = clientRepo.getOne(clientId);
//        if (client != null) {
//            return new ClientEntry(
//                    client.getName(),
//                    client.getSurname(),
//                    client.getBirthdayDate(),
//                    client.getPhoneNumber())
//        }
//        return null;
//    }


//    @Transactional
//    public ClientEntry get(Long id) {
//        Client client = clientRepo.getOne(id);//.orElse(null);
//        if (client != null) {
//            return new ClientEntry(client.getClientId(), client.getName(), client.getSurname(), client.getBirthdayDate(),
//                    client.getType());
//        }
//        return null;
//    }

    @Transactional
    public void createClient(ClientEntry clientEntry) {
        Client client = new Client();
        client.setName(clientEntry.getName());
        client.setSurname(clientEntry.getSurname());
        client.setBirthdayDate(clientEntry.getDate());
        client.setPhoneNumber(clientEntry.getPhoneNumber());
        clientRepo.save(client);
    }

    @Transactional
    public void updateClient(Long clientId, ClientEntry clientEntry) {
        Client client = clientRepo.getOne(clientId);//.orElse(null);
        if(client!= null){
            client.setName(clientEntry.getName());
            client.setSurname(clientEntry.getSurname());
            client.setBirthdayDate(clientEntry.getDate());
        }
    }

    @Transactional
    public void deleteClient(long id){
        clientRepo.deleteById(id);
    }

}
