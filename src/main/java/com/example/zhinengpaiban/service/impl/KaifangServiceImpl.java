package com.example.zhinengpaiban.service.impl;
import com.example.zhinengpaiban.DTO.KaifangDTO;

import com.example.zhinengpaiban.entity.KaifangEntity;
import com.example.zhinengpaiban.repository.KaifangRepository;

import com.example.zhinengpaiban.service.KaifangService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class KaifangServiceImpl implements KaifangService{

    @Autowired
    private KaifangRepository memberRepository;

    @Override
    public List<KaifangDTO> listKaifang() {
        List<KaifangEntity> memberEntities = memberRepository.findAll();
        List<KaifangDTO> res = new ArrayList<>();
        memberEntities.forEach(memberEntity -> {
            KaifangDTO memberDTO = new KaifangDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }

    // 添加员工
    @Override
    public boolean addKaifang(KaifangDTO memberDTO) {
        // 如果传入了 id并且 id已经存在，返回 false
        if (memberDTO.getMemberId() != null && memberRepository.existsById(memberDTO.getMemberId())) {
            return false;
        }
        KaifangEntity memberEntity = new KaifangEntity();
        BeanUtils.copyProperties(memberDTO, memberEntity);
        memberRepository.save(memberEntity);
        return true;
    }

    //删除员工
    @Override
    public boolean deleteKaifang(Integer memberId) {
        // 如果不存在该 id，返回 false
        if (!memberRepository.existsById(memberId)) {
            return false;
        }
        memberRepository.deleteById(memberId);
        return true;
    }

    //更新员工
    @Override
    public boolean updateKaifang(KaifangDTO memberDTO) {
        // 如果传入的 member对象没有 id或者根据 id没有在数据库中查找到，返回 false
        Integer memberId = memberDTO.getMemberId();
        if (memberId == null || !memberRepository.existsById(memberId)) {
            return false;
        }
        KaifangEntity memberEntity = new KaifangEntity();
        BeanUtils.copyProperties(memberDTO, memberEntity);
        memberRepository.save(memberEntity);
        return true;
    }

    //通过id查询员工
    @Override
    public KaifangDTO findKaifangById(Integer memberId) {
        KaifangDTO memberDTO = null;
        if (memberRepository.existsById(memberId)) {
            KaifangEntity memberEntity = memberRepository.findByMemberId(memberId);
            memberDTO = new KaifangDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
        }
        return memberDTO;
    }

    //通过名字查询员工
    @Override
    public List<KaifangDTO> findKaifangByName(String memberName) {
        List<KaifangEntity> memberEntities;
        if (memberName.trim().equals("")) {  // 如果传入 name为空，查询所有 member
            memberEntities = memberRepository.findAll();
        } else {
            memberName = "%" + memberName + "%";  // 模糊查询，加上通配符
            memberEntities = memberRepository.findByMemberNameLike(memberName);
        }
        List<KaifangDTO> res = new ArrayList<KaifangDTO>();
        memberEntities.forEach(memberEntity -> {
            KaifangDTO memberDTO = new KaifangDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }

    //通过所在门店查询员工
    @Override
    public List<KaifangDTO> findKaifangByShopId(String shopId) {
        List<KaifangEntity> memberEntities;
        if (shopId.trim().equals("")) {  // 如果传入 name为空，查询所有 member
            memberEntities = memberRepository.findAll();
        } else {
            memberEntities = memberRepository.findByShopId(shopId);
        }
        List<KaifangDTO> res = new ArrayList<KaifangDTO>();
        memberEntities.forEach(memberEntity -> {
            KaifangDTO memberDTO = new KaifangDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }

    //通过职位查询员工
    @Override
    public List<KaifangDTO> findKaifangByPosition(String position) {
        List<KaifangEntity> memberEntities;
        if (position.trim().equals("")) {  // 如果传入 name为空，查询所有 member
            memberEntities = memberRepository.findAll();
        } else {
            memberEntities = memberRepository.findByPosition(position);
        }
        List<KaifangDTO> res = new ArrayList<KaifangDTO>();
        memberEntities.forEach(memberEntity -> {
            KaifangDTO memberDTO = new KaifangDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }
}
