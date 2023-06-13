import service from "..";

// 获取员工信息
export function getMember() {
    return service({
        method: "GET",
        url: "/member",
    })
}