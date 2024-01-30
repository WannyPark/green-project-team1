package com.lgy.board.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
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
//        System.out.println(list.size()); 
//        System.out.println(page);
//        System.out.println(pageSize);
        return new ResponseEntity<ArrayList<BoardDto>>(list, HttpStatus.OK);
    }
	
	//검색을 위한 
	@ResponseBody
	@RequestMapping(value = "/boardSearch")
	public ResponseEntity<ArrayList<BoardDto>> boardSearch(
			@RequestParam(defaultValue = "1") int page, 
			@RequestParam(defaultValue = "30") int pageSize,
			@RequestParam String selec,
			@RequestParam String searchVal) {
		if (selec.equals("boardWriter")) {
			ArrayList<BoardDto> search = bService.getBoardWriter(page, pageSize, selec, searchVal);	
			System.out.println("page#@#@=>"+page);
			System.out.println("pageSize#@#@=>"+pageSize);
			return new ResponseEntity<ArrayList<BoardDto>>(search, HttpStatus.OK);
			
		} else {
			ArrayList<BoardDto> search = bService.getBoardTitle(page, pageSize, selec, searchVal);	
			
			System.out.println(selec);

			return new ResponseEntity<ArrayList<BoardDto>>(search, HttpStatus.OK);
			
		}
	}
		@ResponseBody
		@RequestMapping(value = "/boardCate")
		public ResponseEntity<ArrayList<BoardDto>> boardCate(	
				@RequestParam(defaultValue = "1") int page, 
				@RequestParam(defaultValue = "30") int pageSize,
				@RequestParam int catemenu) {
		

			System.out.println(page);
			System.out.println(pageSize);
			System.out.println(catemenu);
			if (catemenu == 1 ) {
				ArrayList<BoardDto> cate = bService.getCateMenu1(page, pageSize, catemenu);	
				System.out.println("page#@#@=>"+page);
				System.out.println("pageSize#@#@=>"+pageSize);
				System.out.println("catemenu=>"+catemenu);
				return new ResponseEntity<ArrayList<BoardDto>>(cate, HttpStatus.OK);
				
			} else if (catemenu ==2 ){
				ArrayList<BoardDto> cate = bService.getCateMenu2(page, pageSize, catemenu);	
				
				System.out.println(catemenu);
				
				return new ResponseEntity<ArrayList<BoardDto>>(cate, HttpStatus.OK);
				
			}else {
				
				ArrayList<BoardDto> cate = bService.getCateMenu3(page, pageSize, catemenu);	
				System.out.println(catemenu);
				
				return new ResponseEntity<ArrayList<BoardDto>>(cate, HttpStatus.OK);
				
			}
		}
//		
	
		// 페이징을 위한 메소드 호출
//		ArrayList<BoardDto> list = bService.getBoardListPaging(page, pageSize);
//		System.out.println(list.size()); 
//		System.out.println(pageSize);
//		System.out.println(selec);
//		System.out.println(searchVal);
//		System.out.println(search);
	@ResponseBody
	@RequestMapping(value="/getHit")
	public ResponseEntity<ArrayList<BoardDto>> getHit(Model model){
		ArrayList<BoardDto> getHit = bService.getHit();
		return new ResponseEntity<ArrayList<BoardDto>>(getHit, HttpStatus.OK);
	}
	
	
	

	
}
