package com.example.zhinengpaiban.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class KaifangDTO {
    private Integer memberId;
    private String memberName;
    private String shopId;
    private String position;
    private String weektime;
    private String daytime;

}
