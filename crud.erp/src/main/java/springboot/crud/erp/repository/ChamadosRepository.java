package springboot.crud.erp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import springboot.crud.erp.domain.Chamados;

@Repository
public interface ChamadosRepository extends JpaRepository<Chamados, Integer> {
    
    @Query("SELECT c FROM Chamados c WHERE c.idChamado = ?1")
    Chamados findChamadosById(Integer id);
}
