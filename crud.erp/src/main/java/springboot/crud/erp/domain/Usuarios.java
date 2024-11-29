package springboot.crud.erp.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
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
@Table(name = "usuarios")
public class Usuarios implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    @JsonProperty("idUsuario")
    private Integer idUsuario;

    @Column(name = "nome", nullable = false)
    @JsonProperty("nomeUsuario")
    private String nomeUsuario;

    @Column(name = "email", nullable = false)
    @JsonProperty("emailUsuario")
    private String emailUsuario;

    @Column(name = "senha", nullable = false)
    @JsonProperty("senhaUsuario")
    private String senhaUsuario;
    
    @Column(name = "data_criacao", nullable = false)
    @JsonProperty("dataCriacao")
    @JsonDeserialize(using = CustomDateDeserializer.class) // Para entrada
    @JsonFormat(pattern = "dd/MM/yyyy", shape = JsonFormat.Shape.STRING) // Para saída
    private Date dataCriacaoUsuario;
    
    @Column(name = "ativo", nullable = false)
    @JsonProperty("ativoUsuario")
    private Boolean ativoUsuario;
}
