package com.lgy.spring_react.service;

import java.util.ArrayList;

import com.lgy.spring_react.dto.BoardDto;
import com.lgy.spring_react.dto.TempDto;

public interface TempService {

	public TempDto list(String id);
	public ArrayList<BoardDto> boardlist();	
 
	
//	public int checkPw(String id, String pw);
//	public int checkDelete(String id, String pw);
}
