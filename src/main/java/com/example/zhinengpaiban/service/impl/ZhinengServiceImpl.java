package com.example.zhinengpaiban.service.impl;

import com.example.zhinengpaiban.DTO.ZhinengDTO;
import com.example.zhinengpaiban.entity.ZhinengEntity;
import com.example.zhinengpaiban.repository.ZhinengRepository;
import com.example.zhinengpaiban.service.ZhinengService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ZhinengServiceImpl implements ZhinengService{

    @Autowired
    private ZhinengRepository memberRepository;

    @Override
    public List<ZhinengDTO> listZhineng() {
        List<ZhinengEntity> memberEntities = memberRepository.findAll();
        List<ZhinengDTO> res = new ArrayList<>();
        memberEntities.forEach(memberEntity -> {
            ZhinengDTO memberDTO = new ZhinengDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
            res.add(memberDTO);
        });
        return res;
    }

    @Override
    public boolean updateZhineng(ZhinengDTO memberDTO) {
        // 如果传入的 member对象没有 id或者根据 id没有在数据库中查找到，返回 false
        Integer memberId = memberDTO.getZhinengId();
        if (memberId == null || !memberRepository.existsById(memberId)) {
            return false;
        }
        ZhinengEntity memberEntity = new ZhinengEntity();
        BeanUtils.copyProperties(memberDTO, memberEntity);
        memberRepository.save(memberEntity);
        return true;
    }

    //通过id查询员工
    @Override
    public ZhinengDTO findZhinengById(Integer memberId) {
        ZhinengDTO memberDTO = null;
        if (memberRepository.existsById(memberId)) {
            ZhinengEntity memberEntity = memberRepository.findByZhinengId(memberId);
            memberDTO = new ZhinengDTO();
            BeanUtils.copyProperties(memberEntity, memberDTO);
        }
        return memberDTO;
    }

}
