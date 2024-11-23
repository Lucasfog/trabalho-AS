package springboot.crud.erp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import springboot.crud.erp.domain.Chamados;

public interface ChamadosRepository extends JpaRepository<Chamados, Integer> {
    
    @Query("SELECT c FROM Chamados c WHERE c.idChamado = ?1")
    Chamados findChamadosById(Integer id);
}
