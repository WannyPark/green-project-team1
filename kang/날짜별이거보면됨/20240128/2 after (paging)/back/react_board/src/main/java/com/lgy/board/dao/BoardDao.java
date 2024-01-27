package com.lgy.board.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.lgy.board.dto.BoardDto;

public interface BoardDao {
	public ArrayList<BoardDto> list();
	public ArrayList<BoardDto> getHit();
	public ArrayList<BoardDto> getBoardListPaging(@Param("start") int start, @Param("end") int end);

}
