package com.example.zhinengpaiban.controller;

import com.example.zhinengpaiban.DTO.ZhinengDTO;
import com.example.zhinengpaiban.service.ZhinengService;
import com.example.zhinengpaiban.result.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/zhineng")
public class ZhinengController {

    // @Autowired注解，注入Service服务
    @Autowired
    private final ZhinengService memberService;
    @Autowired
    public ZhinengController(ZhinengService memberService){
        this.memberService = memberService;
    }

    // 显示所有的员工信息
    @GetMapping
    public CommonResult<List> listZhineng(){
        List<ZhinengDTO> results = memberService.listZhineng();
        return new CommonResult<>(true, "显示成功", results);
    }
    @PutMapping("/modify")
    public CommonResult updateZhineng(@RequestBody ZhinengDTO dto){
        if(memberService.updateZhineng(dto)){
            return new CommonResult<>(true, "更新成功", null);
        }
        return new CommonResult<>(false, "更新失败", null);
    }
}
