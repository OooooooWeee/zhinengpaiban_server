package com.example.zhinengpaiban.service.impl;

import com.example.zhinengpaiban.DTO.YuceDTO;
import com.example.zhinengpaiban.entity.YuceEntity;
import com.example.zhinengpaiban.repository.YuceReposirory;
import com.example.zhinengpaiban.service.YuceService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class YuceServiceImpl implements YuceService {
    @Autowired
    private YuceReposirory yuceReposirory;

    @Override
    public List<YuceDTO> listYuce() {
        List<YuceEntity> yuceEntities = yuceReposirory.findAll();
        List<YuceDTO> res = new ArrayList<>();
        yuceEntities.forEach(yuceEntity -> {
            YuceDTO yuceDTO = new YuceDTO();
            BeanUtils.copyProperties(yuceEntity, yuceDTO);
            res.add(yuceDTO);
        });
        return res;
    }

    @Override
    public boolean addYuce(YuceDTO yuceDTO) {
        if (yuceDTO.getShopId() != null && yuceReposirory.existsById(yuceDTO.getShopId())) {
            return false;
        }
        YuceEntity yuceEntity = new YuceEntity();
        BeanUtils.copyProperties(yuceDTO, yuceEntity);
        yuceReposirory.save(yuceEntity);
        return true;
    }

    @Override
    public boolean deleteYuce(Integer shopId) {
        if (!yuceReposirory.existsById(shopId)) {
            return false;
        }
        yuceReposirory.deleteById(shopId);
        return true;
    }

    @Override
    public boolean updateYuce(YuceDTO yuceDTO) {
        Integer shopId = yuceDTO.getShopId();
        if (shopId == null || !yuceReposirory.existsById(shopId)) {
            return false;
        }
        YuceEntity yuceEntity = new YuceEntity();
        BeanUtils.copyProperties(yuceDTO, yuceEntity);
        yuceReposirory.save(yuceEntity);
        return true;
    }
    @Override
    public YuceDTO findYuceById(Integer shopID) {
        YuceDTO yuceDTO = null;
        if(yuceReposirory.existsById(shopID)){
            YuceEntity yuceEntity = yuceReposirory.findByShopId(shopID);
            yuceDTO = new YuceDTO();
            BeanUtils.copyProperties(yuceEntity,yuceDTO);
        }
        return yuceDTO;
    }
    @Override
    public List<YuceDTO> findYuceByName(String shopName){
        List<YuceEntity> yuceEntities;
        if(shopName.trim().equals("")){
            yuceEntities = yuceReposirory.findAll();
        }else {
            shopName = "%" + shopName +"%";
            yuceEntities = yuceReposirory.findByShopNameLike(shopName);
        }
        List<YuceDTO> res = new ArrayList<YuceDTO>();
        yuceEntities.forEach(yuceEntity -> {
            YuceDTO yuceDTO = new YuceDTO();
            BeanUtils.copyProperties(yuceEntities,yuceDTO);
            res.add(yuceDTO);
        });
        return res;
    }
    @Override
    public List<YuceDTO>findYuceByDate(String Date){
        List<YuceEntity> yuceEntities;
        if(Date.trim().equals("")){
            yuceEntities = yuceReposirory.findAll();
        }else {
            yuceEntities = yuceReposirory.findByDate(Date);
        }
        List<YuceDTO> res = new ArrayList<>();
        yuceEntities.forEach(yuceEntity -> {
            YuceDTO yuceDTO = new YuceDTO();
            BeanUtils.copyProperties(yuceEntity,yuceDTO);
            res.add(yuceDTO);
        });
        return res;
    }
}
