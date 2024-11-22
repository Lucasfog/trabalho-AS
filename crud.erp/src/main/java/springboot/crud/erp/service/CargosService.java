package springboot.crud.erp.service;

import org.springframework.stereotype.Service;
import springboot.crud.erp.domain.Cargos;
import springboot.crud.erp.repository.CargosRepository;

@Service
public class CargosService {

    private final CargosRepository cargosRepository;

    public CargosService(CargosRepository cargosRepository) {
        this.cargosRepository = cargosRepository;
    }

    public Cargos getCargos(Integer id) {
        Cargos cargo = cargosRepository.findCargosById(id);
        System.out.println("Cargos encontrado: " + cargo);
        return cargo;
    }

}
