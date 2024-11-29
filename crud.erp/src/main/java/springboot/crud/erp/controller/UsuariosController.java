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
import springboot.crud.erp.domain.Usuarios;
import springboot.crud.erp.service.UsuariosService;

@RestController
public class UsuariosController {
    private UsuariosService usuariosService;
    
    public UsuariosController(UsuariosService usuariosService) {
        this.usuariosService = usuariosService;
    }
    
    @GetMapping(path = "/usuarios/{id}")
    public Usuarios getUsuarios(@PathVariable("id") Integer id) {
        return usuariosService.getUsuarios(id);
    }
    
    @GetMapping(path = "/usuarios")
    public List<Usuarios> listUsuarios() {
        return usuariosService.listUsuarios();
    }
    
    @GetMapping(path = "/removerUsuario/{id}")
    public String removerUsuario(HttpServletResponse response, @PathVariable("id") Integer id) throws IOException {
        usuariosService.removerUsuario(id);
        return "{\"mensagem\": \"Removido\"}";
    }
    
    @PostMapping(path = "/alterarUsuario", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String alterarUsuario(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Usuarios usuarios = mapper.readValue(dados, Usuarios.class);
        usuariosService.alterarUsuario(usuarios);
        return "{\"mensagem\": \"Alterado\"}";
    }

    @PostMapping(path = "/inserirUsuario", consumes = {"application/json", "application/x-www-form-urlencoded"})
    public String inserirUsuario(@RequestBody String dados) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Usuarios usuarios = mapper.readValue(dados, Usuarios.class);
        usuariosService.inserirUsuario(usuarios);
        return "{\"mensagem\": \"Inserido\"}";
    }
}
