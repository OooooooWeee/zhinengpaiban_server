package com.example.zhinengpaiban.entity;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "forecast", schema = "paiban", catalog = "")
public class YuceEntity {
    @Id
    @Column(name = "shop_id")
    private int shopId;

    @Basic
    @Column(name = "shop_name")
    private String shopName;

    @Basic
    @Column(name = "date")
    private  String date;

    @Basic
    @Column(name = "time_start")
    private  String timeStart;

    @Basic
    @Column(name = "time_end")
    private String timeEnd;

    @Basic
    @Column(name = "passengerflow")
    private int passengerFlow;
}
