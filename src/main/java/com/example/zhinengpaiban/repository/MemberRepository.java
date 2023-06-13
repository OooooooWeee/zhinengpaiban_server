package com.example.zhinengpaiban.repository;

import com.example.zhinengpaiban.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface MemberRepository extends JpaRepository<MemberEntity, Integer> {
    // 根据员工ID查询
    MemberEntity findByMemberId(int memberId);
    // 根据员工姓名查询
    List<MemberEntity> findByMemberNameLike(String memberName);
    // 根据员工所在门店查询
    List<MemberEntity> findByShopId(String shopId);
    // 根据员工职位查询
    List<MemberEntity> findByPosition(String position);
}
