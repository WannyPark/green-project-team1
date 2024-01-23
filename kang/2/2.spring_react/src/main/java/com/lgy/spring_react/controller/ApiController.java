package com.lgy.spring_react.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lgy.spring_react.dto.TempDto;
import com.lgy.spring_react.service.TempService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class ApiController {

	@Autowired
	private TempService service;
	
	@ResponseBody
	@RequestMapping(value="/api")
	public  ResponseEntity<ArrayList<TempDto>> api(Model model){
		log.info("@# api1 start");
		ArrayList<TempDto> list = service.list();
		model.addAttribute("list",list);
		
		
		System.out.println(list);
		log.info("@# api1 end");
		
		
		return new ResponseEntity<ArrayList<TempDto>>(list,HttpStatus.OK);	
	}
	
	@ResponseBody
	@RequestMapping(value="/api/checkPw")
	public int checkPw(HttpServletRequest request) {
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		int res = 0;
		res = service.checkPw(id, pw);
		
		return res;
	}
	
	@ResponseBody
	@RequestMapping(value="/api/checkDelete")
	public int deleteMem(HttpServletRequest request) {
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		int res = 0;
		res = service.checkDelete(id, pw);
		
		return res;
	}
	
//	@ResponseBody
//	@RequestMapping(value="/api/getMem")
//	public ResponseEntity<TempDto> api2() {
//		log.info("@# api2 start");
//		TempDto dto = null;
//		dto = service.getMem(2);
//		System.out.println(dto);
//		log.info("@# api2 end");
//		
//		return new ResponseEntity<TempDto>(dto,HttpStatus.OK);
//	}
//	
//	@ResponseBody
//	@RequestMapping(value="/api/reqMem")
//	public ResponseEntity<TempDto> api3(HttpServletRequest request) {
//		log.info("@# api3 start");
//		TempDto dto = null;
//		System.out.println(request.getParameter("seq"));
//		int seq = Integer.parseInt(request.getParameter("seq"));
//		dto = service.getMem(seq);
//		log.info("@# api3 end");
//		
//		return new ResponseEntity<TempDto>(dto,HttpStatus.OK);
//	}
//	
}
