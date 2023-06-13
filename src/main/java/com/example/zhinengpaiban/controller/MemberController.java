package com.example.zhinengpaiban.controller;

import com.example.zhinengpaiban.DTO.MemberDTO;
import com.example.zhinengpaiban.service.MemberService;
import com.example.zhinengpaiban.result.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/member")
public class MemberController {

    // @Autowired注解，注入Service服务
    @Autowired
    private final MemberService memberService;
    @Autowired
    public MemberController(MemberService memberService){
        this.memberService = memberService;
    }

    // 显示所有的员工信息
    @GetMapping
    public CommonResult<List> listMember(){
        List<MemberDTO> results = memberService.listMember();
        return new CommonResult<>(true, "显示成功", results);
    }

    //  添加员工
    @PostMapping("/add")
    public CommonResult<MemberDTO> addMember(@RequestBody MemberDTO dto){
        if(memberService.addMember(dto)){
            return new CommonResult<>(true, "添加成功", null);
        }
        return new CommonResult<>(false, "添加失败", null);
    }

    //  更新员工信息
    @PutMapping("/modify")
    public CommonResult updateMember(@RequestBody MemberDTO dto){
        if(memberService.updateMember(dto)){
            return new CommonResult<>(true, "更新成功", null);
        }
        return new CommonResult<>(false, "更新失败", null);
    }

    // 删除员工
    @DeleteMapping("/delete/{member_id}")
    public CommonResult deleteMember(@PathVariable("member_id") Integer memberId){
        if(memberService.deleteMember(memberId)){
            return new CommonResult<>(true, "删除成功", null);
        }
        return new CommonResult<>(false, "删除失败", null);
    }

    // 根据员工编号查找员工
    @GetMapping("/listbyid/{member_id}")
    public CommonResult<MemberDTO> findMemberById(@PathVariable("member_id") Integer memberId){
        MemberDTO result = memberService.findMemberById(memberId);
        if(result != null){
            return new CommonResult<>(true, "查找成功", result);
        }
        return new CommonResult<>(false, "查找失败", null);
    }

    // 根据员工姓名模糊查询
    @GetMapping("/listbyname/{member_name}")
    public CommonResult<List> findMemberByName(@PathVariable("member_name") String memberName){
        List<MemberDTO> results = memberService.findMemberByName(memberName);
        if(results != null){
            return new CommonResult<>(true, "查找成功", results);
        }
        return new CommonResult<>(false, "查找失败", null);
    }

    // 根据员工所在门店模糊查询
    @GetMapping("/listbyshop/{shop_id}")
    public CommonResult<List> findMemberByShopId(@PathVariable("shop_id") String shopId){
        List<MemberDTO> results = memberService.findMemberByShopId(shopId);
        if(results != null){
            return new CommonResult<>(true, "查找成功", results);
        }
        return new CommonResult<>(false, "查找失败", null);
    }

    // 根据员工职位模糊查询
    @GetMapping("/listbyposition/{position}")
    public CommonResult<List> findMemberByPosition(@PathVariable("position") String position){
        List<MemberDTO> results = memberService.findMemberByPosition(position);
        if(results != null){
            return new CommonResult<>(true, "查找成功", results);
        }
        return new CommonResult<>(false, "查找失败", null);
    }
}
