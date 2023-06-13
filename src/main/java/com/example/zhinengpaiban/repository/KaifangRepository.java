package com.example.zhinengpaiban.repository;

import com.example.zhinengpaiban.entity.KaifangEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface KaifangRepository extends JpaRepository<KaifangEntity, Integer> {
    // 根据员工ID查询
    KaifangEntity findByMemberId(int memberId);
    // 根据员工姓名查询
    List<KaifangEntity> findByMemberNameLike(String memberName);
    // 根据员工所在门店查询
    List<KaifangEntity> findByShopId(String shopId);
    // 根据员工职位查询
    List<KaifangEntity> findByPosition(String position);
}
