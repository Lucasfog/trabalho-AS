package springboot.crud.erp.service;

import java.util.List;
import org.springframework.stereotype.Service;
import springboot.crud.erp.domain.Usuarios;
import springboot.crud.erp.repository.UsuariosRepository;

@Service
public class UsuariosService {
    
    private final UsuariosRepository usuariosRepository;
    
    public UsuariosService(UsuariosRepository usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }

    public Usuarios getUsuarios(Integer id) {
        return usuariosRepository.findUsuariosById(id);
    }
    
    public List<Usuarios> listUsuarios() {
        return usuariosRepository.findAll();
    }
    
    public void removerUsuario(int IdUsuario) {
        usuariosRepository.deleteById(IdUsuario);
    }
    
    public void alterarUsuario(Usuarios usuarios) {
        usuariosRepository.save(usuarios);
    }
    
    public void inserirUsuario(Usuarios usuarios) {
        usuariosRepository.save(usuarios);
    }
    
}
