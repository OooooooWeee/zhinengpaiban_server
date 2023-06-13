package com.example.zhinengpaiban.service.impl;

import com.example.zhinengpaiban.DTO.MemberDTO;
import com.example.zhinengpaiban.entity.MemberEntity;
import com.example.zhinengpaiban.repository.MemberRepository;
import com.example.zhinengpaiban.service.MemberService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public List<MemberDTO> listMember() {
        List<MemberEntity> memberEntities = memberRepository.findAll();
        List<MemberDTO> res = new ArrayList<>();
        memberEntities.forEach(memberEntity -> {
            MemberDTO memberDTO = new MemberDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }

    // 添加员工
    @Override
    public boolean addMember(MemberDTO memberDTO) {
        // 如果传入了 id并且 id已经存在，返回 false
        if (memberDTO.getMemberId() != null && memberRepository.existsById(memberDTO.getMemberId())) {
            return false;
        }
        MemberEntity memberEntity = new MemberEntity();
        BeanUtils.copyProperties(memberDTO, memberEntity);
        memberRepository.save(memberEntity);
        return true;
    }

    //删除员工
    @Override
    public boolean deleteMember(Integer memberId) {
        // 如果不存在该 id，返回 false
        if (!memberRepository.existsById(memberId)) {
            return false;
        }
        memberRepository.deleteById(memberId);
        return true;
    }

    //更新员工
    @Override
    public boolean updateMember(MemberDTO memberDTO) {
        // 如果传入的 member对象没有 id或者根据 id没有在数据库中查找到，返回 false
        Integer memberId = memberDTO.getMemberId();
        if (memberId == null || !memberRepository.existsById(memberId)) {
            return false;
        }
        MemberEntity memberEntity = new MemberEntity();
        BeanUtils.copyProperties(memberDTO, memberEntity);
        memberRepository.save(memberEntity);
        return true;
    }

    //通过id查询员工
    @Override
    public MemberDTO findMemberById(Integer memberId) {
        MemberDTO memberDTO = null;
        if (memberRepository.existsById(memberId)) {
            MemberEntity memberEntity = memberRepository.findByMemberId(memberId);
            memberDTO = new MemberDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
        }
        return memberDTO;
    }

    //通过名字查询员工
    @Override
    public List<MemberDTO> findMemberByName(String memberName) {
        List<MemberEntity> memberEntities;
        if (memberName.trim().equals("")) {  // 如果传入 name为空，查询所有 member
            memberEntities = memberRepository.findAll();
        } else {
            memberName = "%" + memberName + "%";  // 模糊查询，加上通配符
            memberEntities = memberRepository.findByMemberNameLike(memberName);
        }
        List<MemberDTO> res = new ArrayList<MemberDTO>();
        memberEntities.forEach(memberEntity -> {
            MemberDTO memberDTO = new MemberDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }

    //通过所在门店查询员工
    @Override
    public List<MemberDTO> findMemberByShopId(String shopId) {
        List<MemberEntity> memberEntities;
        if (shopId.trim().equals("")) {  // 如果传入 name为空，查询所有 member
            memberEntities = memberRepository.findAll();
        } else {
            memberEntities = memberRepository.findByShopId(shopId);
        }
        List<MemberDTO> res = new ArrayList<MemberDTO>();
        memberEntities.forEach(memberEntity -> {
            MemberDTO memberDTO = new MemberDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }

    //通过职位查询员工
    @Override
    public List<MemberDTO> findMemberByPosition(String position) {
        List<MemberEntity> memberEntities;
        if (position.trim().equals("")) {  // 如果传入 name为空，查询所有 member
            memberEntities = memberRepository.findAll();
        } else {
            memberEntities = memberRepository.findByPosition(position);
        }
        List<MemberDTO> res = new ArrayList<MemberDTO>();
        memberEntities.forEach(memberEntity -> {
            MemberDTO memberDTO = new MemberDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }
}
