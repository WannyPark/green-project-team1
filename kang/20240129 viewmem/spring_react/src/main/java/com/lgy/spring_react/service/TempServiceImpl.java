package com.lgy.spring_react.service;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lgy.spring_react.dao.TempDao;
import com.lgy.spring_react.dto.BoardDto;
import com.lgy.spring_react.dto.TempDto;

import lombok.extern.slf4j.Slf4j;

@Service("TempService")
@Slf4j
public class TempServiceImpl implements TempService {

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public TempDto list(String id) {
		log.info("@# BServiceImpl.list() start");
		TempDao dao = sqlSession.getMapper(TempDao.class);
		TempDto list = dao.list(id);
		
		log.info("@# BServiceImpl.list() end");
		return list;
	}
	
	public int checkPw(String id, String pw) {
		TempDao dao = sqlSession.getMapper(TempDao.class);
		String userPw = dao.getUserPw(id);
		if (userPw.equals(pw)) {
			return 1;
		} else {
			return 0;
		}
	}

	public int checkDelete(String id, String pw) {
		TempDao dao = sqlSession.getMapper(TempDao.class);
		String userPw = dao.getUserPw(id);
		System.out.println(id+pw+userPw);
		if (userPw.equals(pw)) {
			dao.UserDelete(id);
			
			return 1;
		} else {
			return 0;
		}
	}
	@Override
	public ArrayList<BoardDto> boardlist() {
		TempDao dao = sqlSession.getMapper(TempDao.class);
		ArrayList<BoardDto> boardlist = dao.boardlist();
		return boardlist;
	}

}

