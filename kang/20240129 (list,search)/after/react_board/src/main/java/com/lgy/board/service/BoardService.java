package com.lgy.board.service;

import java.util.ArrayList;

import com.lgy.board.dto.BoardDto;

public interface BoardService {

		public ArrayList<BoardDto> list();
		public ArrayList<BoardDto> getHit();
	    public ArrayList<BoardDto> getBoardListPaging(int page, int pageSize);
	    public ArrayList<BoardDto> getBoardWriter(int page, int pageSize,String selec,String searchVal); 
	    public ArrayList<BoardDto> getBoardTitle(int page, int pageSize,String selec,String searchVal); 

		
}
