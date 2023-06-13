package com.example.zhinengpaiban.service;

import com.example.zhinengpaiban.DTO.KaifangDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface KaifangService {
    List<KaifangDTO> listKaifang();
    boolean addKaifang(KaifangDTO memberDTO); //增

    boolean deleteKaifang(Integer memberId); //删

    boolean updateKaifang(KaifangDTO memberDTO); //改

    KaifangDTO findKaifangById(Integer memberId); //通过id查询
    List<KaifangDTO> findKaifangByName(String memberName); //通过名称模糊查询
    List<KaifangDTO> findKaifangByShopId(String shopId); //通过所在门店模糊查询
    List<KaifangDTO> findKaifangByPosition(String position); //通过职位模糊查询

    //通过职位查询员工

}
