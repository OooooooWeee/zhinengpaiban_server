package com.example.zhinengpaiban.result;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommonResult<T> {
    private boolean success;
    private String message;
    private T data;
}

/**
 * CommonResult 使用示例代码
 *
 * @RestController
 * @RequestMapping("/example")
 * public class ExampleController {
 *
 *     @PostMapping("/add")
 *     public CommonResult<Example> addExample(@RequestBody Example example) {
 *         try {
 *             // 执行添加案例的逻辑
 *             // 如果添加成功
 *             Example savedExample = exampleService.save(example);
 *             return new CommonResult<>(true, "添加成功", savedExample);
 *         } catch (Exception e) {
 *             // 如果添加失败
 *             return new CommonResult<>(false, "添加失败", null);
 *         }
 *     }
 * }
 */