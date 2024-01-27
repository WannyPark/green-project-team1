package com.lgy.board.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class pageDto {
	private String boardNum;
	private int page;
	private int pageSize;
	private int totalCount;
}
