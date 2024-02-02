package com.lgy.board.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class planDto {
	
	private String gat_plan_id;
	private String gat_plan_leader;
	private String gathering_gat_id;
	private String gat_plan_date;
	private String gat_plan_addr;
	private String gat_plan_title;
	private String gat_plan_desc;
}
