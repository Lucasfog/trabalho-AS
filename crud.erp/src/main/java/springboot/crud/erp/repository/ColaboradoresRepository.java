package springboot.crud.erp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import springboot.crud.erp.domain.Colaboradores;

@Repository
public interface ColaboradoresRepository extends JpaRepository<Colaboradores, Integer> {

    @Query("SELECT c from Colaboradores c WHERE c.idColaborador = ?1")
    Colaboradores findColaboradoresById(Integer id);

}
