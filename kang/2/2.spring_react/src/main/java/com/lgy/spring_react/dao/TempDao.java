package com.lgy.spring_react.dao;

import java.util.ArrayList;

import com.lgy.spring_react.dto.TempDto;

public interface TempDao {
	public ArrayList<TempDto> list();
	public String getUserPw(String id);
	public void UserDelete(String id);
}
