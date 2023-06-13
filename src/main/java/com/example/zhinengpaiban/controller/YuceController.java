package com.example.zhinengpaiban.controller;

import com.example.zhinengpaiban.DTO.YuceDTO;
import com.example.zhinengpaiban.result.CommonResult;
import com.example.zhinengpaiban.service.YuceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/yuce")
public class YuceController {
    @Autowired
    private final YuceService yuceService;
    @Autowired
    public YuceController(YuceService yuceService) {
        this.yuceService = yuceService;
    }
    @GetMapping
    public CommonResult<List> listYuce(){
        List<YuceDTO> results = yuceService.listYuce();
        return  new CommonResult<>(true,"显示成功",results);
    }

    @PostMapping("/add")
    public CommonResult<YuceDTO> addYuce(@RequestBody YuceDTO dto){
        if (yuceService.addYuce(dto)){
            return new CommonResult<>(true, "添加成功", null);
        }
        return new CommonResult<>(false, "添加失败", null);
    }

    @PutMapping("/modify")
    public CommonResult updateYuce(@RequestBody YuceDTO dto) {
        if (yuceService.updateYuce(dto)) {
            return new CommonResult<>(true, "更新成功", null);
        }
        return new CommonResult<>(false, "更新失败", null);
    }

    @DeleteMapping("delete/{shop_id}")
    public CommonResult deleteYuce(@PathVariable("shop_id") Integer shopId){
        if(yuceService.deleteYuce(shopId)){
            return new CommonResult<>(true, "删除成功", null);
        }
        return new CommonResult<>(false, "删除失败", null);
    }

    @GetMapping("/listbyShopId/{shop_id}")
    public CommonResult<YuceDTO> findYuceById(@PathVariable("shop_id") Integer shopId){
        YuceDTO result = yuceService.findYuceById(shopId);
        if(result!=null){
            return new CommonResult<>(true, "查找成功", result);
        }
        return new CommonResult<>(false, "查找失败", null);
    }

    @GetMapping("/listbyname/{shop_name}")
    public CommonResult<List>findYuceByName(@PathVariable("shop_name") String shopName){
        List<YuceDTO> results = yuceService.findYuceByName(shopName);
        if(results != null){
            return new CommonResult<>(true, "查找成功", results);
        }
        return new CommonResult<>(false, "查找失败", null);
    }

    @GetMapping("/listbydate/{date}")
    public CommonResult<List>findYuceByDate(@PathVariable("data") String date){
        List<YuceDTO> results = yuceService.findYuceByDate(date);
        if(results!=null){
            return new CommonResult<>(true, "查找成功", results);
        }
        return new CommonResult<>(false, "查找失败", null);
    }

}






