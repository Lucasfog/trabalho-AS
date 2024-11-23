package springboot.crud.erp.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cargos")
public class Cargos implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cargo")
    @JsonProperty("idCargo")
    private Integer idCargo;

    @Column(name = "nome", nullable = false)
    @JsonProperty("nomeCargo")
    private String nomeCargo;

    @Column(name = "nivel", nullable = false)
    @JsonProperty("nivelCargo")
    private String nivelCargo;

    @Column(name = "salario_base", nullable = false)
    @JsonProperty("salarioBase")
    private Float salarioBase;

}