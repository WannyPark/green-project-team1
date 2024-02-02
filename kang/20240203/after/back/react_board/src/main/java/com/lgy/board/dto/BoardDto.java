package com.lgy.board.dto;

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
	private String cate;
	
	
	
	
	
//	CREATE TABLE BOARDD(
//			boardNum VARCHAR2(5),
//			boardTitle VARCHAR2(50),
//			boardWriter VARCHAR2(50),
//			boardDate VARCHAR2(50),
//			boardHit VARCHAR2(5)
//			);
}
