package springboot.crud.erp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import springboot.crud.erp.domain.Cargos;

@Repository
public interface CargosRepository extends JpaRepository<Cargos, Integer> {

    @Query("SELECT c FROM Cargos c WHERE c.idCargo = ?1")
    Cargos findCargosById(Integer id);
}
