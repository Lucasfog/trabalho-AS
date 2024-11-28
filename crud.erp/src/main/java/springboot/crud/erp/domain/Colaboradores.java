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
@Table(name = "colaboradores")
public class Colaboradores implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_colaborador")
    @JsonProperty("idColaborador")
    private Integer idColaborador;

    @Column(name = "nome_colaborador", nullable = false)
    @JsonProperty("nomeColaborador")
    private String nomeColaborador;

    @Column(name = "genero", nullable = false)
    @JsonProperty("generoColaborador")
    private String generoColaborador;

    @Column(name = "cpf", nullable = false)
    @JsonProperty("cpfColaborador")
    private String cpfColaborador;

    @Column(name = "cep", nullable = false)
    @JsonProperty("cepColaborador")
    private String cepColaborador;
    
    @Column(name = "endereco", nullable = false)
    @JsonProperty("enderecoColaborador")
    private String enderecoColaborador;
    
    @Column(name = "numero", nullable = false)
    @JsonProperty("numeroColaborador")
    private Integer numeroColaborador;
    
    @Column(name = "bairro", nullable = false)
    @JsonProperty("bairroColaborador")
    private String bairroColaborador;
    
    @Column(name = "cidade", nullable = false)
    @JsonProperty("cidadeColaborador")
    private String cidadeColaborador;
    
    @Column(name = "estado", nullable = false)
    @JsonProperty("estadoColaborador")
    private String estadoColaborador;
   
    @Column(name = "id_cargo", nullable = false)
    @JsonProperty("idCargoColaborador")
    private Integer idCargoColaborador;

    @Column(name = "salario", nullable = false)
    @JsonProperty("salarioColaborador")
    private Integer salarioColaborador;
    
}