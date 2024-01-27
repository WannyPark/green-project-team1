package com.lgy.board.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lgy.board.dao.BoardDao;
import com.lgy.board.dto.BoardDto;
import com.lgy.board.service.BoardService;


@Controller
public class BoardCotroller {

	@Autowired
	private BoardService bService;
	
	@ResponseBody
	@RequestMapping(value="/boardCheck")
	public ResponseEntity<ArrayList<BoardDto>> boardCheck(Model model){
		ArrayList<BoardDto> list = bService.list();
		System.out.println(list.size()); 
        return new ResponseEntity<ArrayList<BoardDto>>(list, HttpStatus.OK);


        
	}
	@ResponseBody
	@RequestMapping(value="/getHit")
	public ResponseEntity<ArrayList<BoardDto>> getHit(Model model){
		ArrayList<BoardDto> getHit = bService.getHit();
		return new ResponseEntity<ArrayList<BoardDto>>(getHit, HttpStatus.OK);
		
		
		
	}

}
