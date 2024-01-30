package com.lgy.board.service;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lgy.board.dao.BoardDao;
import com.lgy.board.dto.BoardDto;




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
		
		
}
