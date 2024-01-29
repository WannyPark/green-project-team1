package com.lgy.spring_react;

import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public ResponseEntity<HashMap<String, String>> home() {
	public String home() {
//		HashMap<String, String> res = new HashMap<String, String>();
//		res.put("data", "Hi, react");
		
//		return new ResponseEntity<>(res, HttpStatus.OK);
		return "home";
	}
	
}
