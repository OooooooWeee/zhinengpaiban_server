package com.example.zhinengpaiban.repository;

import com.example.zhinengpaiban.entity.YuceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface YuceReposirory extends JpaRepository<YuceEntity,Integer> {
    YuceEntity  findByShopId(int shopId);
    List<YuceEntity> findByDate(String date);
    List<YuceEntity> findByShopNameLike(String name);
}
