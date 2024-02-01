package com.lgy.board.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.lgy.board.dto.BoardDto;

public interface BoardDao {
	public ArrayList<BoardDto> list();
	public ArrayList<BoardDto> getHit();
	public ArrayList<BoardDto> getBoardListPaging(@Param("start") int start, @Param("end") int end);
	public ArrayList<BoardDto> getBoardWriter(
			@Param("start") int page
			, @Param("end") int pageSize
			,@Param("selec")String selec
			,@Param("searchVal") String searchVal );
	public ArrayList<BoardDto> getBoardTitle(
			@Param("start") int page
			, @Param("end") int pageSize
			,@Param("selec")String selec
			,@Param("searchVal") String searchVal );
	public ArrayList<BoardDto> getCateMenu1(
			@Param("start") int page
			, @Param("end") int pageSize
			,@Param("catemenu") int catemenu );
	public ArrayList<BoardDto> getCateMenu2(
			@Param("start") int page
			, @Param("end") int pageSize
			,@Param("catemenu") int catemenu );
	public ArrayList<BoardDto> getCateMenu3(
			@Param("start") int page
			, @Param("end") int pageSize
			,@Param("catemenu") int catemenu );
	public ArrayList<BoardDto> getCSearch1(
			@Param("start") int page
			,@Param("end") int pageSize
			,@Param("catemenu2") int catemenu2 
			,@Param("cateSelec") String cateSelec
			,@Param("cateVal") String cateVal);
	public ArrayList<BoardDto> getCSearch2(
			@Param("start") int page
			, @Param("end") int pageSize
			,@Param("catemenu2") int catemenu2 
			,@Param("cateSelec") String cateSelec
			,@Param("cateVal") String cateVal);
	public ArrayList<BoardDto> getCSearch3(
			@Param("start") int page
			,@Param("end") int pageSize
			,@Param("catemenu2") int catemenu2 
			,@Param("cateSelec") String cateSelec
			,@Param("cateVal") String cateVal);
	

}
