package springboot.crud.erp.service;

import java.util.List;
import org.springframework.stereotype.Service;
import springboot.crud.erp.domain.Clientes;
import springboot.crud.erp.repository.ClientesRepository;

@Service
public class ClientesService {

    private final ClientesRepository clientesRepository;

    public ClientesService(ClientesRepository clientesRepository) {
        this.clientesRepository = clientesRepository;
    }

    public Clientes getClientes(Integer id) {
        return clientesRepository.findClientesById(id);
    }

    public List<Clientes> listClientes() {
        return clientesRepository.findAll();
    }

    public void removerCliente(int IdCliente) {
        clientesRepository.deleteById(IdCliente);
    }

    public void alterarCliente(Clientes clientes) {
        clientesRepository.save(clientes);
    }

    public void inserirCliente(Clientes clientes) {
        clientesRepository.save(clientes);
    }
}
