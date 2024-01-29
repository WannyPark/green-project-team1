package com.lgy.spring_react.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoardDto {

	private String boardNum;
	private String boardTitle;
	private String boardWriter;
	private String boardDate;
	private String boardHit;
	
}
