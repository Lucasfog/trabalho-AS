package springboot.crud.erp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import springboot.crud.erp.domain.Clientes;

public interface ClientesRepository extends JpaRepository<Clientes, Integer>{
    
    @Query("SELECT c from Clientes c WHERE c.idCliente = ?1")
    Clientes findClientesById(Integer id);
}
