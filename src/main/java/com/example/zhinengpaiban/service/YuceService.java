package com.example.zhinengpaiban.service;

import com.example.zhinengpaiban.DTO.YuceDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface YuceService {
    List<YuceDTO> listYuce();
    boolean addYuce(YuceDTO yuceDTO);
    boolean deleteYuce(Integer shopId);
    boolean updateYuce(YuceDTO yuceDTO);
    YuceDTO findYuceById(Integer shopID);
    List<YuceDTO>findYuceByName(String shopName);
    List<YuceDTO>findYuceByDate(String date);
}
