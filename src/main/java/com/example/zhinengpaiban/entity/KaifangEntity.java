package com.example.zhinengpaiban.entity;


import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "member", schema = "paiban", catalog = "")
public class KaifangEntity {
    @Id
    @Column(name = "member_id")
    private int memberId;
    @Basic
    @Column(name = "member_name")
    private String memberName;
    @Basic
    @Column(name = "shop_id")
    private String shopId;
    @Basic
    @Column(name = "position")
    private String position;
    @Basic
    @Column(name = "weektime")
    private String weektime;
    @Basic
    @Column(name = "daytime")
    private String daytime;

}
