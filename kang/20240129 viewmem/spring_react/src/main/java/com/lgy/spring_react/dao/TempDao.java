package com.lgy.spring_react.dao;

import java.util.ArrayList;

import com.lgy.spring_react.dto.BoardDto;
import com.lgy.spring_react.dto.TempDto;

public interface TempDao {
	public TempDto list(String id);
	public String getUserPw(String id);
	public void UserDelete(String id);
	public ArrayList<BoardDto> boardlist();

}
