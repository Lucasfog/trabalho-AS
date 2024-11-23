package springboot.crud.erp.service;

import java.util.List;
import org.springframework.stereotype.Service;
import springboot.crud.erp.domain.Chamados;
import springboot.crud.erp.repository.ChamadosRepository;

@Service
public class ChamadosService {

    private final ChamadosRepository chamadosRepository;

    public ChamadosService(ChamadosRepository chamadosrepository) {
        this.chamadosRepository = chamadosrepository;
    }

    public Chamados getChamados(Integer id) {
        return chamadosRepository.findChamadosById(id);
    }

    public List<Chamados> listChamados() {
        return chamadosRepository.findAll();
    }

    public void removerChamado(int IdChamado) {
        chamadosRepository.deleteById(IdChamado);
    }

    public void alterarChamado(Chamados chamados) {
        chamadosRepository.save(chamados);
    }

    public void inserirChamado(Chamados chamados) {
        chamadosRepository.save(chamados);
    }
}
