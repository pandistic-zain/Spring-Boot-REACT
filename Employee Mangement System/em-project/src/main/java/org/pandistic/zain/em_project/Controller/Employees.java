package org.pandistic.zain.em_project.Controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employees {
    private long id;
    private String name;
    private String phone;
    private String email;
}

