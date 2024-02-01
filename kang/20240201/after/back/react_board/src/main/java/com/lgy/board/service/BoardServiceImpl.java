package com.lgy.board.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lgy.board.dao.BoardDao;
import com.lgy.board.dto.BoardDto;

import lombok.extern.slf4j.Slf4j;



@Slf4j
@Service("BoardService")
public class BoardServiceImpl implements BoardService {

	
		@Autowired
		private SqlSession sqlSession;

		@Override
		public ArrayList<BoardDto> list() {
			BoardDao dao = sqlSession.getMapper(BoardDao.class);
			ArrayList<BoardDto> list = dao.list();
			return list;
		}

		@Override
		public ArrayList<BoardDto> getHit() {
			BoardDao dao = sqlSession.getMapper(BoardDao.class);
			ArrayList<BoardDto> getHit = dao.getHit();
			return getHit;
		}
	  @Override
	    public ArrayList<BoardDto> getBoardListPaging(int page, int pageSize) {
		  BoardDao dao = sqlSession.getMapper(BoardDao.class);
	        int start = (page - 1) * pageSize + 1;
	        int end = start + pageSize - 1;
	        return dao.getBoardListPaging(start, end);
	    }

	@Override
	public ArrayList<BoardDto> getBoardWriter(int page, int pageSize, String selec, String searchVal) {
		
			BoardDao dao = sqlSession.getMapper(BoardDao.class);
			int start = (page - 1) * pageSize + 1;
			
			int end = start + pageSize - 1;
			ArrayList<BoardDto> search = dao.getBoardWriter(start,end,selec,searchVal);
			System.out.println(search);
			
			return search;
}
	@Override
	public ArrayList<BoardDto> getBoardTitle(int page, int pageSize, String selec, String searchVal) {
		BoardDao dao = sqlSession.getMapper(BoardDao.class);
		int start = (page - 1) * pageSize + 1;
		int end = start + pageSize - 1;
		ArrayList<BoardDto> search = dao.getBoardTitle(start,end,selec,searchVal);
		
		return search;
	}
	@Override
	public ArrayList<BoardDto> getCateMenu1(int page, int pageSize,int catemenu) {
		BoardDao dao = sqlSession.getMapper(BoardDao.class);
		int start = (page - 1) * pageSize + 1;
		int end = start + pageSize - 1;
		ArrayList<BoardDto> cate = dao.getCateMenu1(start,end, catemenu);
		
		return cate;
	}
	@Override
	public ArrayList<BoardDto> getCateMenu2(int page, int pageSize, int catemenu) {
		BoardDao dao = sqlSession.getMapper(BoardDao.class);
		int start = (page - 1) * pageSize + 1;
		int end = start + pageSize - 1;
		ArrayList<BoardDto> cate = dao.getCateMenu2(start,end, catemenu);
		
		return cate;
	}
	@Override
	public ArrayList<BoardDto> getCateMenu3(int page, int pageSize,int catemenu) {
		BoardDao dao = sqlSession.getMapper(BoardDao.class);
		int start = (page - 1) * pageSize + 1;
		int end = start + pageSize - 1;
		ArrayList<BoardDto> cate = dao.getCateMenu3(start,end, catemenu);
		
		return cate;
	}
	
    public ArrayList<BoardDto> getCSearch1(int page, int pageSize,int catemenu2,String cateSelec,String cateVal){
		BoardDao dao = sqlSession.getMapper(BoardDao.class);

//	    int start = (Integer.parseInt(page) - 1) * Integer.parseInt(pageSize) + 1;
//	    int end = start + Integer.parseInt(pageSize) - 1;
		int start = (page - 1) * pageSize + 1;
		int end = start + pageSize - 1;
		ArrayList<BoardDto> Search = dao.getCSearch1(start,end, catemenu2,cateSelec,cateVal);
//		System.out.println("service==>"+Search);
//		System.out.println("service==>"+start);
//		System.out.println("service==>"+end);
//		System.out.println("service==>"+catemenu2);
//		System.out.println("service==>"+cateSelec);
//		System.out.println("service==>"+cateVal);
//	    System.out.println("SQL Query: " + dao.getCSearch1(start, end, catemenu2, cateSelec, cateVal));

		return Search;
    }; 
    public ArrayList<BoardDto> getCSearch2(int page, int pageSize,int catemenu2,String cateSelec,String cateVal){
		BoardDao dao = sqlSession.getMapper(BoardDao.class);

		int start = (page - 1) * pageSize + 1;
		int end = start + pageSize - 1;
    	ArrayList<BoardDto> Search = dao.getCSearch2(start,end, catemenu2,cateSelec,cateVal);
    	return Search;
    }; 
    public ArrayList<BoardDto> getCSearch3(int page, int pageSize,int catemenu2,String cateSelec,String cateVal){
		BoardDao dao = sqlSession.getMapper(BoardDao.class);

		int start = (page - 1) * pageSize + 1;
		int end = start + pageSize - 1;
    	ArrayList<BoardDto> Search = dao.getCSearch3(start,end, catemenu2,cateSelec,cateVal);
    	
    	return Search;
    }

}

	
		
		

