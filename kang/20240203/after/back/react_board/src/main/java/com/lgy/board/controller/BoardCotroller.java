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
import com.lgy.board.dto.planDto;
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
		
		System.out.println("controller+search"+page);
		System.out.println("controller+searchSize"+pageSize);
		
		if (selec.equals("boardWriter")) {
			ArrayList<BoardDto> search = bService.getBoardWriter(page, pageSize, selec, searchVal);	
			return new ResponseEntity<ArrayList<BoardDto>>(search, HttpStatus.OK);
			
		} else {
			ArrayList<BoardDto> search = bService.getBoardTitle(page, pageSize, selec, searchVal);
			
			return new ResponseEntity<ArrayList<BoardDto>>(search, HttpStatus.OK);
			
		}
	}
		@ResponseBody
		@RequestMapping(value = "/boardCate")
		public ResponseEntity<ArrayList<BoardDto>> boardCate(	
				@RequestParam(defaultValue = "1") int page, 
				@RequestParam(defaultValue = "30") int pageSize,
				@RequestParam int catemenu) {
		
			
			if (catemenu == 1 ) {
				System.out.println(catemenu);
				ArrayList<BoardDto> cate = bService.getCateMenu1(page, pageSize, catemenu);	
				return new ResponseEntity<ArrayList<BoardDto>>(cate, HttpStatus.OK);
				
			} else if (catemenu ==2 ){
				ArrayList<BoardDto> cate = bService.getCateMenu2(page, pageSize, catemenu);	
								
				return new ResponseEntity<ArrayList<BoardDto>>(cate, HttpStatus.OK);
				
			}else {
				
				ArrayList<BoardDto> cate = bService.getCateMenu3(page, pageSize, catemenu);					
				return new ResponseEntity<ArrayList<BoardDto>>(cate, HttpStatus.OK);	
				}
		}
		@ResponseBody
		@RequestMapping(value = "/cateSearch")
		public ResponseEntity<ArrayList<BoardDto>> cateSearch(
				@RequestParam(value = "page",defaultValue = "1") int page, 
				@RequestParam(value = "pageSize",defaultValue = "30") int pageSize,
			    @RequestParam(value = "catemenu2") int catemenu2,
			    @RequestParam(value = "cateSelec") String cateSelec,
			    @RequestParam(value = "cateVal") String cateVal) {
				
//				System.out.println("##page"+page);
//				System.out.println("##page"+pageSize);
//				System.out.println("##page"+catemenu2);
//				System.out.println("##page"+cateSelec);
//				System.out.println("##page"+cateVal);
				

				if (catemenu2 == 1) {
					System.out.println("1번 출력");
				System.out.println("##page"+page);
				System.out.println("##pageSize"+pageSize);
				System.out.println("##pagecatemenu2"+catemenu2);
					ArrayList<BoardDto>search  = bService.getCSearch1(page, pageSize, catemenu2,cateSelec,cateVal);	
					return new ResponseEntity<ArrayList<BoardDto>>(search, HttpStatus.OK);

				} else if (catemenu2 == 2){
					ArrayList<BoardDto>search  = bService.getCSearch2(page, pageSize, catemenu2,cateSelec,cateVal);	
					System.out.println("2번 출력");
										
					return new ResponseEntity<ArrayList<BoardDto>>(search, HttpStatus.OK);
					
				}else {
					
					ArrayList<BoardDto> search = bService.getCSearch3(page, pageSize, catemenu2,cateSelec,cateVal);	
					System.out.println("3번 출력");
					
					return new ResponseEntity<ArrayList<BoardDto>>(search, HttpStatus.OK);
					
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
	
	@ResponseBody
	@RequestMapping(value="/api/got_plan")
	public ResponseEntity<ArrayList<planDto>> plan(@RequestBody HashMap<String, String> map){
			
		System.out.println("Controller id"+map.get("gat_plan_id"));
		String gat_plan_id = map.get("gat_plan_id");
		ArrayList<planDto> plan = bService.plan(gat_plan_id);
		System.out.println("ctr"+plan);
//		ArrayList<planDto> plan = null;
		return new ResponseEntity<ArrayList<planDto>>(plan,HttpStatus.OK);
		
	}

	
	
	
	

	
}
