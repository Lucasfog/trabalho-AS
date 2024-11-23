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
import springboot.crud.erp.domain.Cargos;
import springboot.crud.erp.service.CargosService;

@RestController
public class CargosController {
    
    private CargosService cargosService;
    
    public CargosController(CargosService cargosService) {
        this.cargosService = cargosService;
    }
    
    @GetMapping(path = "/cargos/{id}")
    public Cargos getCargos(@PathVariable("id") Integer id) {
        return cargosService.getCargos(id);
    }
    
    @GetMapping(path = "/cargos")
    public List<Cargos> listCargos() {
        return cargosService.listCargos();
    }
    
    @GetMapping(path = "/removerCargo/{id}")
    public String removerCargo(HttpServletResponse response, @PathVariable("id") Integer id) throws IOException {
        cargosService.removerCargo(id);
        return "{\"mensagem\": \"Removido\"}";
    }
    
    @PostMapping(path = "/alterarCargo", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String alterarCargo(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Cargos cargos = mapper.readValue(dados, Cargos.class);
        cargosService.alterarCargo(cargos);
        return "{\"mensagem\": \"Alterado\"}";
    }

    @PostMapping(path = "/inserirCargo", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String inserirCargo(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Cargos cargos = mapper.readValue(dados, Cargos.class);
        cargosService.inserirCargo(cargos);
        return "{\"mensagem\": \"Inserido\"}";
    }
}
