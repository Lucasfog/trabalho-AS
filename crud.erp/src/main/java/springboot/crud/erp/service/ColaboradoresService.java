package springboot.crud.erp.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import springboot.crud.erp.domain.Colaboradores;
import springboot.crud.erp.repository.ColaboradoresRepository;

@Service
public class ColaboradoresService {

    private final ColaboradoresRepository colaboradoresRepository;

    public ColaboradoresService(ColaboradoresRepository colaboradoresRepository) {
        this.colaboradoresRepository = colaboradoresRepository;
    }

    public Colaboradores getColaboradores(Integer id) {
        return colaboradoresRepository.findColaboradoresById(id);
    }

    public List<Colaboradores> listColaboradores() {
        return colaboradoresRepository.findAll();
    }

    public void removerColaborador(int IdColaborador) {
        colaboradoresRepository.deleteById(IdColaborador);
    }

    public void alterarColaborador(Colaboradores colaboradores) {
        colaboradoresRepository.save(colaboradores);
    }

    public void inserirColaborador(Colaboradores colaboradores) {
        colaboradoresRepository.save(colaboradores);
    }
}
