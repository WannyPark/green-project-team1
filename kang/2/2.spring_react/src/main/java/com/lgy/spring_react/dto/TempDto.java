package com.lgy.spring_react.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TempDto {

	private int idNum;
	private String id;
	private String mem_pwd;
	private int mem_grade;
	private String mem_name;
	private String mem_birthday;
	private String mem_email;
	private String mem_add;
	
	
}
