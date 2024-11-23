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
@Table(name = "clientes")
public class Clientes implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    @JsonProperty("idCliente")
    private Integer idCliente;

    @Column(name = "razao_social", nullable = false)
    @JsonProperty("razaoSocialCliente")
    private String razaoSocial;

    @Column(name = "cnpj", nullable = false)
    @JsonProperty("cnpjCliente")
    private String cnpjCliente;

    @Column(name = "ie", nullable = false)
    @JsonProperty("ieCliente")
    private String ieCliente;

    @Column(name = "cep", nullable = false)
    @JsonProperty("cepCliente")
    private String cepCliente;
    
    @Column(name = "endereco", nullable = false)
    @JsonProperty("enderecoCliente")
    private String enderecoCliente;
    
    @Column(name = "numero", nullable = false)
    @JsonProperty("numeroCliente")
    private Integer numeroCliente;
    
    @Column(name = "bairro", nullable = false)
    @JsonProperty("bairroCliente")
    private String bairroCliente;
    
    @Column(name = "cidade", nullable = false)
    @JsonProperty("cidadeCliente")
    private String cidadeCliente;
    
    @Column(name = "estado", nullable = false)
    @JsonProperty("estadoCliente")
    private String estadoCliente;
   
}
