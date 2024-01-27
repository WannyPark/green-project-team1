package com.lgy.board.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lgy.board.dao.BoardDao;
import com.lgy.board.dto.BoardDto;
import com.lgy.board.service.BoardService;


@Controller
public class BoardCotroller {

	@Autowired
	private BoardService bService;
	
	@ResponseBody
    @RequestMapping(value = "/boardCheck")
    public ResponseEntity<ArrayList<BoardDto>> boardCheck(
            @RequestParam(defaultValue = "1") int page, 
            @RequestParam(defaultValue = "10") int pageSize) {

        // 페이징을 위한 메소드 호출
        ArrayList<BoardDto> list = bService.getBoardListPaging(page, pageSize);
        System.out.println(list.size()); 
        System.out.println(page);
        System.out.println(pageSize);
        return new ResponseEntity<ArrayList<BoardDto>>(list, HttpStatus.OK);
    }
	@ResponseBody
	@RequestMapping(value="/getHit")
	public ResponseEntity<ArrayList<BoardDto>> getHit(Model model){
		ArrayList<BoardDto> getHit = bService.getHit();
		return new ResponseEntity<ArrayList<BoardDto>>(getHit, HttpStatus.OK);
	}
	
	
	

	
}
