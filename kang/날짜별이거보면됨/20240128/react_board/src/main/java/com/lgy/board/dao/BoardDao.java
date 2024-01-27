package com.lgy.board.dao;

import java.util.ArrayList;

import com.lgy.board.dto.BoardDto;
import com.lgy.board.dto.pageDto;

public interface BoardDao {
    
    public ArrayList<BoardDto> list();
    public ArrayList<BoardDto> getHit();
    public ArrayList<BoardDto> getPaginatedList(int start, int end);
	public ArrayList<BoardDto> getPaginatedList(pageDto pageDto);

}