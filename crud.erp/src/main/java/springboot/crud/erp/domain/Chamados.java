package springboot.crud.erp.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.io.Serializable;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "chamados")
public class Chamados implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_chamado")
    @JsonProperty("idChamado")
    private Integer idChamado;

    @Column(name = "titulo", nullable = false)
    @JsonProperty("tituloChamado")
    private String tituloChamado;

    @Column(name = "descricao", nullable = false)
    @JsonProperty("descricaoChamado")
    private String descricaoChamado;

    @Column(name = "data_abertura", nullable = false)
    @JsonProperty("dataAbertura")
    private Date dataAberturaChamado;
    
    @Column(name = "data_encerramento", nullable = false)
    @JsonProperty("dataEncerramento")
    private Date dataEncerramentoChamado;
    
    @Column(name = "prioridade", nullable = false)
    @JsonProperty("prioridadeChamado")
    private String prioridadeChamado;
    
    @Column(name = "id_cliente", nullable = false)
    @JsonProperty("idClienteChamado")
    private Integer idClienteChamado;
    
    @Column(name = "id_responsavel", nullable = false)
    @JsonProperty("idResponsavelChamado")
    private Integer idResponsavelChamado;
    
    @Column(name = "tipo_contato", nullable = false)
    @JsonProperty("tipoContato")
    private String tipoContato;
}
