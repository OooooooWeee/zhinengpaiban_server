
var datas = [];
window.onload=function(){
member1 = window.member;
console.log(member1.length);
console.log(member1[1].memberId);
}

for(var a=0;a<member1.length;a++){

    datas.push(
        {
            id:member1[a].memberId,
            name:member1[a].memberName,
            shop:member1[a].shopId,
            position:member1[a].position,
            workdaypreference:member1[a].weektime,
            hourspreference:member1[a].daytime,
            timepreference:member1[a].time,
            telephone:member1[a].phone,
            email:member1[a].mail,
        }
    );
}
// 实现模糊查询
let keyword = document.querySelector('.keyword'); // 获取输入框
let searchHelper = document.querySelector('.search-helper'); // 获取搜索的下拉列表

// 定义数组，存储搜索内容
let searchArr = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '王五', '张三', '刘齐', '王三'];

// 给输入框绑定内容改变事件
keyword.oninput = function () {
    searchHelper.innerHTML = '';
    for (let i = 0; i < searchArr.length; i++) {
        if (searchArr[i].indexOf(keyword.value) != -1) {
            //添加到div中
            searchHelper.innerHTML += '<p>' + searchArr[i] + '</p>';
            //显示div
            searchHelper.style.display = 'block';
        }
    }
}
//失去焦点
keyword.onblur = function () {
    //隐藏div
    searchHelper.style.display = 'none';
}

//表格数据
// var datas = [{
//     id: '001',
//     name: '王五',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '002',
//     name: '张三',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '003',
//     name: '王三',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '004',
//     name: '刘齐',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '005',
//     name: '刘齐',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '006',
//     name: '刘齐',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '007',
//     name: '刘齐',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '008',
//     name: '刘齐',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '009',
//     name: '刘齐',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '010',
//     name: '刘齐',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }, {
//     id: '011',
//     name: '刘齐',
//     shop: '门店1',
//     position: '经理',
//     workdaypreference: '周一 ~ 周五',
//     hourspreference: '9：00 - 11：00',
//     timepreference: '3小时',
//     telephone: '12345678901',
//     email: '1234567890@qq.com'
// }];


//往tbody 里面创建行
var tbody = document.querySelector('tbody');
for (var i = 0; i < datas.length; i++) { // 外面的for循环管行 tr
    // 创建 tr行
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    // 行里面创建单元格(跟数据有关系的单元格) td 单元格的数量取决于每个对象里面的属性个数  for循环遍历对象 datas[i]
    for (var k in datas[i]) { // 里面的for循环管列 td
        // 创建单元格
        var td = document.createElement('td');
        // 把对象里面的属性值 datas[i][k] 给 td
        // console.log(datas[i][k]);
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
    }
}

//表格行点击变色
(() => {
    var trs = document.querySelectorAll("#tb_2 tr")
    for (let i = 0; i < trs.length; i++) {
        trs[i].onclick = function fn() {
            //排它思想
            trs.forEach((el) => {
                el.style.backgroundColor = "#ECF5F2"
            })
            trs[i].style.backgroundColor = "lightblue"
        }
    }
})()




/*
function selectRow(target) {
    var sTable = document.getElementById("ServiceListTable")
    for (var i = 1; i < sTable.rows.length; i++) //遍历除第一行外的所有行
    {
        if (sTable.rows[i] != target) //判断是否当前选定行
        {
            sTable.rows[i].bgColor = "#ffffff"; //设置背景色
            sTable.rows[i].onmouseover = resumeRowOver; //增加onmouseover 事件
            sTable.rows[i].onmouseout = resumeRowOut;//增加onmouseout 事件
        } else {
            sTable.rows[i].bgColor = "#d3d3d3";
            sTable.rows[i].onmouseover = ""; //去除鼠标事件
            sTable.rows[i].onmouseout = ""; //去除鼠标事件
        }
    }
}
//移过时tr的背景色
function rowOver(target) {
    target.bgColor ="#e4e4e4";
}
//移出时tr的背景色
function rowOut(target) {
    target.bgColor ='#ffffff';
}
//恢复tr的的onmouseover事件配套调用函数
function resumeRowOver() {
    rowOver(this);
}
//恢复tr的的onmouseout事件配套调用函数
function resumeRowOut() { rowOut(this); }
*/

/*
$("#tbody tr").click(function(){ //给每个tr 绑定点击事件  主要锁定每个tr
    var trs = $(this).parent().find('tr'); //获取所有tr
    if(trs.hasClass('on')){ //判断这些tr 有没有Class ‘on'’
        trs.removeClass('on');//把class on 移除
    }
    $(this).addClass('on');//点击的tr 添加 on class 用于改变样式
});
*/