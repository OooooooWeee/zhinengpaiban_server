package com.example.zhinengpaiban.service;

import com.example.zhinengpaiban.DTO.ZhinengDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ZhinengService {
    List<ZhinengDTO> listZhineng();
    boolean updateZhineng(ZhinengDTO memberDTO); //改

//    ZhinengDTO findByZhinengId(Integer memberId); //通过id查询

    //通过id查询员工
    ZhinengDTO findZhinengById(Integer memberId);
}
