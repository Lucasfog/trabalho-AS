package springboot.crud.erp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import springboot.crud.erp.domain.Usuarios;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuarios, Integer>{
    
    @Query("SELECT u FROM Usuarios u WHERE u.idUsuario = ?1")
    Usuarios findUsuariosById(Integer id);
}
