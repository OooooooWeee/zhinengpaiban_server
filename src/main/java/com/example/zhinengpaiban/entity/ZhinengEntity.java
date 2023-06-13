package com.example.zhinengpaiban.entity;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "zn", schema = "paiban", catalog = "")
public class ZhinengEntity {

    @Id
    @Column(name = "id")
    private int zhinengId;
    @Basic
    @Column(name = "yi")
    private String yi;
    @Basic
    @Column(name = "er")
    private String er;
    @Basic
    @Column(name = "san")
    private String san;
    @Basic
    @Column(name = "si")
    private String si;
    @Basic
    @Column(name = "wu")
    private String wu;
    @Basic
    @Column(name = "liu")
    private String liu;
    @Basic
    @Column(name = "qi")
    private String qi;

}