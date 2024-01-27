package com.lgy.board.dao;

import java.util.ArrayList;

import com.lgy.board.dto.BoardDto;

public interface BoardDao {
	public ArrayList<BoardDto> list();
	public ArrayList<BoardDto> getHit();
}
