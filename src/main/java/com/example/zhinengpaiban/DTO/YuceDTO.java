package com.example.zhinengpaiban.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class YuceDTO {
    private Integer shopId;
    private String shopName;
    private String date;
    private  String timeStart;
    private  String timeEnd;
    private int passengerFlow;

}
