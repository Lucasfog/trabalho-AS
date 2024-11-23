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
import springboot.crud.erp.domain.Chamados;
import springboot.crud.erp.service.ChamadosService;

@RestController
public class ChamadosController {

    private ChamadosService chamadosService;

    public ChamadosController(ChamadosService chamadosService) {
        this.chamadosService = chamadosService;
    }

    @GetMapping(path = "/chamados/{id}")
    public Chamados getChamados(@PathVariable("id") Integer id) {
        return chamadosService.getChamados(id);
    }

    @GetMapping(path = "/chamados")
    public List<Chamados> listChamados() {
        return chamadosService.listChamados();
    }

    @GetMapping(path = "/removerChamado/{id}")
    public String removerChamado(HttpServletResponse response, @PathVariable("id") Integer id) throws IOException {
        chamadosService.removerChamado(id);
        return "{\"mensagem\": \"Removido\"}";
    }

    @PostMapping(path = "/alterarChamado", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String alterarChamado(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Chamados chamados = mapper.readValue(dados, Chamados.class);
        chamadosService.alterarChamado(chamados);
        return "{\"mensagem\": \"Alterado\"}";
    }

    @PostMapping(path = "/inserirChamado", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String inserirChamado(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Chamados chamados = mapper.readValue(dados, Chamados.class);
        chamadosService.inserirChamado(chamados);
        return "{\"mensagem\": \"Inserido\"}";
    }
}
