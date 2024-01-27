package com.lgy.board.service;

import java.util.ArrayList;

import com.lgy.board.dto.BoardDto;
import com.lgy.board.dto.pageDto;

public interface BoardService {

    public ArrayList<BoardDto> list();
    public ArrayList<BoardDto> getHit();


}
