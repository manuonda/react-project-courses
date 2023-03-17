package com.zustand.domain;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity 
@Data
public class Contacto {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idcontacto")
	private Integer id;
	
	private String nombre;
	
	@Column(name = "fechaNac")
	private LocalDate fechaNacimiento;
	
	private String celular;
	private String email;
}
