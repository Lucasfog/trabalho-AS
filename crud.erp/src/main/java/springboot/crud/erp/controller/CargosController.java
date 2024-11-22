package springboot.crud.erp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import springboot.crud.erp.domain.Cargos;
import springboot.crud.erp.service.CargosService;

@RestController
public class CargosController {
    
    private CargosService cargosService;
    
    public CargosController(CargosService cargosService) {
        this.cargosService = cargosService;
    }
    
    @GetMapping(path = "/cargos/{id}")
    public Cargos getCargos(@PathVariable("id") Integer id) {
        return cargosService.getCargos(id);
    }
}
