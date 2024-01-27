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
		
		
}
