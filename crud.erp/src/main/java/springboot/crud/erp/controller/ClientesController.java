package springboot.crud.erp.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import springboot.crud.erp.domain.Clientes;
import springboot.crud.erp.service.ClientesService;

@RestController
public class ClientesController {

    private ClientesService clientesService;

    public ClientesController(ClientesService clientesService) {
        this.clientesService = clientesService;
    }

    @GetMapping(path = "/clientes/{id}")
    public Clientes getClientes(@PathVariable("id") Integer id) {
        return clientesService.getClientes(id);
    }

    @GetMapping(path = "/clientes")
    public List<Clientes> listChamados() {
        return clientesService.listClientes();
    }

    @GetMapping(path = "/removerCliente/{id}")
    public String removerCliente(HttpServletResponse response, @PathVariable("id") Integer id) throws IOException {
        clientesService.removerCliente(id);
        return "{\"mensagem\": \"Removido\"}";
    }

    @PostMapping(path = "/alterarCliente", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String alterarCliente(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Clientes clientes = mapper.readValue(dados, Clientes.class);
        clientesService.alterarCliente(clientes);
        return "{\"mensagem\": \"Alterado\"}";
    }

    @PostMapping(path = "/inserirCliente", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String inserirCliente(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Clientes clientes = mapper.readValue(dados, Clientes.class);
        clientesService.inserirCliente(clientes);
        return "{\"mensagem\": \"Inserido\"}";
    }
}
