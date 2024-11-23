package springboot.crud.erp.service;

import java.util.List;
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
        return cargosRepository.findCargosById(id);
    }
    
    public List<Cargos> listCargos() {
        return cargosRepository.findAll();
    }
    
    public void removerCargo(int IdCargo) {
        cargosRepository.deleteById(IdCargo);
    }
    
    public void alterarCargo(Cargos cargos) {
        cargosRepository.save(cargos);
    }
    
    public void inserirCargo(Cargos cargos) {
        cargosRepository.save(cargos);
    }

}
