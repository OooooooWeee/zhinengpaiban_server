package com.example.zhinengpaiban.repository;


import com.example.zhinengpaiban.entity.MemberEntity;
import com.example.zhinengpaiban.entity.ZhinengEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface ZhinengRepository extends JpaRepository<ZhinengEntity, Integer> {
    // 根据员工ID查询
    ZhinengEntity findByZhinengId(int memberId);
}