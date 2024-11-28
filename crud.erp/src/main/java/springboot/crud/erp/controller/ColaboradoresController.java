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
import springboot.crud.erp.domain.Colaboradores;
import springboot.crud.erp.service.ColaboradoresService;

@RestController
public class ColaboradoresController {

    private ColaboradoresService colaboradoresService;

    public ColaboradoresController(ColaboradoresService colaboradoresService) {
        this.colaboradoresService = colaboradoresService;
    }

    @GetMapping(path = "/colaboradores/{id}")
    public Colaboradores getColaboradores(@PathVariable("id") Integer id) {
        return colaboradoresService.getColaboradores(id);
    }

    @GetMapping(path = "/colaboradores")
    public List<Colaboradores> listColaboradores() {
        return colaboradoresService.listColaboradores();
    }

    @GetMapping(path = "/removerColaborador/{id}")
    public String removerColaborador(HttpServletResponse response, @PathVariable("id") Integer id) throws IOException {
        colaboradoresService.removerColaborador(id);
        return "{\"mensagem\": \"Removido\"}";
    }

    @PostMapping(path = "/alterarColaborador", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String alterarColaborador(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Colaboradores colaboradores = mapper.readValue(dados, Colaboradores.class);
        colaboradoresService.alterarColaborador(colaboradores);
        return "{\"mensagem\": \"Alterado\"}";
    }

    @PostMapping(path = "/inserirColaborador", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String inserirColaborador(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Colaboradores colaboradores = mapper.readValue(dados, Colaboradores.class);
        colaboradoresService.inserirColaborador(colaboradores);
        return "{\"mensagem\": \"Inserido\"}";
    }
}
