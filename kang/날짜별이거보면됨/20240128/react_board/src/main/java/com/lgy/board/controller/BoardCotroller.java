package com.lgy.board.controller;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.lgy.board.dto.BoardDto;
import com.lgy.board.dto.pageDto;
import com.lgy.board.service.BoardService;

@Controller
public class BoardCotroller {

	@Autowired
	private BoardService bService;

	@ResponseBody
	@RequestMapping(value = "/boardCheck")
	public ResponseEntity<ArrayList<BoardDto>> boardCheck(Model model,
			@RequestParam(value = "page", defaultValue = "1") int page,
			@RequestParam(value = "pageSize", defaultValue = "30") int pageSize) {
		ArrayList<BoardDto> list = bService.getPaginatedList(page, pageSize);
		System.out.println(list.size());
		System.out.println(page);
        System.out.println(pageSize);
		return new ResponseEntity<ArrayList<BoardDto>>(list, HttpStatus.OK);
	}

	@ResponseBody
	@RequestMapping(value = "/getHit")
	public ResponseEntity<ArrayList<BoardDto>> getHit(Model model) {
		ArrayList<BoardDto> getHit = bService.getHit();
		return new ResponseEntity<ArrayList<BoardDto>>(getHit, HttpStatus.OK);
	}
	

}


