package com.example.zhinengpaiban.service;

import com.example.zhinengpaiban.DTO.MemberDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MemberService {
    List<MemberDTO> listMember();
    boolean addMember(MemberDTO memberDTO); //增

    boolean deleteMember(Integer memberId); //删

    boolean updateMember(MemberDTO memberDTO); //改

    MemberDTO findMemberById(Integer memberId); //通过id查询
    List<MemberDTO> findMemberByName(String memberName); //通过名称模糊查询
    List<MemberDTO> findMemberByShopId(String shopId); //通过所在门店模糊查询
    List<MemberDTO> findMemberByPosition(String position); //通过职位模糊查询
}
