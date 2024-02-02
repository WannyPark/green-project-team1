package com.lgy.board.service;

import java.util.ArrayList;

import com.lgy.board.dto.BoardDto;
import com.lgy.board.dto.planDto;

public interface BoardService {

		public ArrayList<BoardDto> list();
		public ArrayList<BoardDto> getHit();
	    public ArrayList<BoardDto> getBoardListPaging(int page, int pageSize);
	    public ArrayList<BoardDto> getBoardWriter(int page, int pageSize,String selec,String searchVal); 
	    public ArrayList<BoardDto> getBoardTitle(int page, int pageSize,String selec,String searchVal); 
	    public ArrayList<BoardDto> getCateMenu1(int page, int pageSize,int catemenu); 
	    public ArrayList<BoardDto> getCateMenu2(int page, int pageSize,int catemenu); 
	    public ArrayList<BoardDto> getCateMenu3(int page, int pageSize,int catemenu); 
	    public ArrayList<BoardDto> getCSearch1(int page, int pageSize,int catemenu2,String cateSelec,String cateVal); 
	    public ArrayList<BoardDto> getCSearch2(int page, int pageSize,int catemenu2,String cateSelec,String cateVal); 
	    public ArrayList<BoardDto> getCSearch3(int page, int pageSize,int catemenu2,String cateSelec,String cateVal); 
	    public ArrayList<planDto> plan(String gat_plan_id); 

		
}
