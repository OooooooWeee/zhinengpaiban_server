import { getMember } from "../request/api/renyuan";

// 实现模糊查询
let keyword = document.querySelector('.keyword'); // 获取输入框
// let searchHelper = document.querySelector('.search-helper'); // 获取搜索的下拉列表

//表格数据
var datas = [{
    ID: '001',
    name: '王五',
    shop: '门店1',
    position: '经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '002',
    name: '张三',
    shop: '门店2',
    position: '经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '003',
    name: '王三',
    shop: '门店3',
    position: '经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '004',
    name: '刘齐',
    shop: '门店11',
    position: '经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '005',
    name: '刘齐',
    shop: '门店12',
    position: '经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '006',
    name: '刘齐',
    shop: '门店13',
    position: '副经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '007',
    name: '刘齐',
    shop: '门店1',
    position: '副经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '007',
    name: '刘齐',
    shop: '门店1',
    position: '副经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '007',
    name: '刘齐',
    shop: '门店1',
    position: '副经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '007',
    name: '刘齐',
    shop: '门店1',
    position: '副经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '007',
    name: '刘齐',
    shop: '门店1',
    position: '副经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '008',
    name: '刘齐',
    shop: '门店1',
    position: '副经理',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '009',
    name: '刘齐',
    shop: '门店1',
    position: '小组长',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '010',
    name: '刘齐',
    shop: '门店1',
    position: '小组长',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}, {
    ID: '011',
    name: '刘齐',
    shop: '门店1',
    position: '店员',
    workdaypreference: '周一 ~ 周五',
    hourspreference: '9：00 - 11：00',
    timepreference: '3小时',
    telephone: '12345678901',
    email: '1234567890@qq.com'
}];

showTable()
async function showTable() {
    var tbody = document.getElementById('tb_2')
    tbody.innerHTML = ''
    var str = ''

    let res = await getMember();
    console.log(res);
    datas = res.data.result;

    console.log(datas)
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].state == '删除') {
            continue
        }
        str += '<tr>'
        str += '<td>' + datas[i].ID + '</td>'
        str += '<td>' + datas[i].name + '</td>'
        str += '<td>' + datas[i].shop + '</td>'
        str += '<td>' + datas[i].position + '</td>'
        str += '<td>' + datas[i].workdaypreference + '</td>'
        str += '<td>' + datas[i].hourspreference + '</td>'
        str += '<td>' + datas[i].timepreference + '</td>'
        str += '<td>' + datas[i].telephone + '</td>'
        str += '<td>' + datas[i].email + '</td>'
        str += '<td><input  class="btnG1"  type="button" value="修改"  onclick = updateData("' + datas[i].name + '")></td>'
        str += '<td><input  class="btnG2"  type="button" value="删除"  onclick = deleteData("' + datas[i].name + '")></td>'
        str += '</tr>'
    }
    tbody.innerHTML = str
}

//模糊查询
function searchBtn() {
    var tb_2 = document.getElementById('tb_2');
    var find = document.getElementById('inputI').value
    var find2 = ""
    var find3 = ""
    var xx = document.getElementById('sel2')
    for (i = 0; i < xx.options.length; i++) {
        if (xx.options[i].selected) {
            find2 = xx.options[i].firstChild.nodeValue;
            console.log(find2)
        }
    }
    var xx2 = document.getElementById('sel')
    for (i = 0; i < xx2.options.length; i++) {
        if (xx2.options[i].selected) {
            find3 = xx2.options[i].firstChild.nodeValue;
            console.log(find3)
        }
    }

    var str = ''
    tb_2.innerHTML = ''
    var a = 0, b = 0;

    if (find == '' || find == null) { a = 1; }
    if (find2 == '所有职位') { b = 1; }

    if (a == 1 && b == 1) {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].state == '删除') { continue }
            if (datas[i].shop.includes(find3)) {
                console.log(datas[i].name)
                str += '<tr>'
                str += '<td>' + datas[i].ID + '</td>'
                str += '<td>' + datas[i].name + '</td>'
                str += '<td>' + datas[i].shop + '</td>'
                str += '<td>' + datas[i].position + '</td>'
                str += '<td>' + datas[i].workdaypreference + '</td>'
                str += '<td>' + datas[i].hourspreference + '</td>'
                str += '<td>' + datas[i].timepreference + '</td>'
                str += '<td>' + datas[i].telephone + '</td>'
                str += '<td>' + datas[i].email + '</td>'
                str += '<td><input  class="btnG1"  type="button" value="修改"  onclick = updateData("' + datas[i].name + '")></td>'
                str += '<td><input  class="btnG2"  type="button" value="删除"  onclick = deleteData("' + datas[i].name + '")></td>'
                str += '</tr>'
            }
        }
    }
    if (a == 0 && b == 1) {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].state == '删除') { continue }
            if ((datas[i].name.includes(find) || datas[i].ID.includes(find)) && datas[i].shop.includes(find3)) {
                console.log(datas[i].name)
                str += '<tr>'
                str += '<td>' + datas[i].ID + '</td>'
                str += '<td>' + datas[i].name + '</td>'
                str += '<td>' + datas[i].shop + '</td>'
                str += '<td>' + datas[i].position + '</td>'
                str += '<td>' + datas[i].workdaypreference + '</td>'
                str += '<td>' + datas[i].hourspreference + '</td>'
                str += '<td>' + datas[i].timepreference + '</td>'
                str += '<td>' + datas[i].telephone + '</td>'
                str += '<td>' + datas[i].email + '</td>'
                str += '<td><input  class="btnG1"  type="button" value="修改"  onclick = updateData("' + datas[i].name + '")></td>'
                str += '<td><input  class="btnG2"  type="button" value="删除"  onclick = deleteData("' + datas[i].name + '")></td>'
                str += '</tr>'
            }
        }
    }
    if (a == 1 && b == 0) {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].state == '删除') { continue }
            if (datas[i].position.includes(find2) && datas[i].shop.includes(find3)) {
                console.log(datas[i].name)
                str += '<tr>'
                str += '<td>' + datas[i].ID + '</td>'
                str += '<td>' + datas[i].name + '</td>'
                str += '<td>' + datas[i].shop + '</td>'
                str += '<td>' + datas[i].position + '</td>'
                str += '<td>' + datas[i].workdaypreference + '</td>'
                str += '<td>' + datas[i].hourspreference + '</td>'
                str += '<td>' + datas[i].timepreference + '</td>'
                str += '<td>' + datas[i].telephone + '</td>'
                str += '<td>' + datas[i].email + '</td>'
                str += '<td><input  class="btnG1"  type="button" value="修改"  onclick = updateData("' + datas[i].name + '")></td>'
                str += '<td><input  class="btnG2"  type="button" value="删除"  onclick = deleteData("' + datas[i].name + '")></td>'
                str += '</tr>'
            }
        }
    }
    if (a == 0 && b == 0) {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].state == '删除') { continue }
            if (datas[i].position.includes(find2) && (datas[i].name.includes(find) || datas[i].ID.includes(find)) && datas[i].shop.includes(find3)) {
                console.log(datas[i].name)
                str += '<tr>'
                str += '<td>' + datas[i].ID + '</td>'
                str += '<td>' + datas[i].name + '</td>'
                str += '<td>' + datas[i].shop + '</td>'
                str += '<td>' + datas[i].position + '</td>'
                str += '<td>' + datas[i].workdaypreference + '</td>'
                str += '<td>' + datas[i].hourspreference + '</td>'
                str += '<td>' + datas[i].timepreference + '</td>'
                str += '<td>' + datas[i].telephone + '</td>'
                str += '<td>' + datas[i].email + '</td>'
                str += '<td><input  class="btnG1"  type="button" value="修改"  onclick = updateData("' + datas[i].name + '")></td>'
                str += '<td><input  class="btnG2"  type="button" value="删除"  onclick = deleteData("' + datas[i].name + '")></td>'
                str += '</tr>'
            }
        }
    }
    tb_2.innerHTML = str
}

function hidder() {
    document.getElementById('zhezhao').style.display = 'none'
    document.getElementById('zhezhao2').style.display = 'none'
}

function btnG() {
    document.getElementById('zhezhao2').style.display = 'block'
}
function addSure() {
    var ad = {
        ID: document.getElementById('idNNN').value,
        name: document.getElementById('nameNNN').value,
        shop: document.getElementById('shopNNN').value,
        position: document.getElementById('NNN4').value,
        workdaypreference: document.getElementById('NNN5').value,
        hourspreference: document.getElementById('NNN6').value,
        timepreference: document.getElementById('NNN7').value,
        telephone: document.getElementById('NNN8').value,
        email: document.getElementById('NNN9').value,
        // state: '上架'
    }
    datas.push(ad)
    document.getElementById('zhezhao2').style.display = 'none'
    alert('添加成功')
    showTable()
}

var idN
function updateData(name) {
    var re = confirm('确定操作吗')
    if (!re) return
    document.getElementById('zhezhao').style.display = 'block'
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].name == name) {
            document.getElementById('idNN').value = datas[i].ID
            document.getElementById('nameNN').value = name
            document.getElementById('shopNN').value = datas[i].shop
            document.getElementById('NN4').value = datas[i].position
            document.getElementById('NN5').value = datas[i].workdaypreference
            document.getElementById('NN6').value = datas[i].hourspreference
            document.getElementById('NN7').value = datas[i].timepreference
            document.getElementById('NN8').value = datas[i].telephone
            document.getElementById('NN9').value = datas[i].email
            idN = i
        }
    }
}

function sureBtn() {
    datas[idN].ID = document.getElementById('idNN').value
    datas[idN].name = document.getElementById('nameNN').value
    datas[idN].shop = document.getElementById('shopNN').value
    datas[idN].position = document.getElementById('NN4').value
    datas[idN].workdaypreference = document.getElementById('NN5').value
    datas[idN].hourspreference = document.getElementById('NN6').value
    datas[idN].timepreference = document.getElementById('NN7').value
    datas[idN].telephone = document.getElementById('NN8').value
    datas[idN].email = document.getElementById('NN9').value
    document.getElementById('zhezhao').style.display = 'none'
    showTable()
}

function deleteData(name) {
    var re = confirm('确定操作吗')
    if (!re) return
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].name == name) {
            datas[i].state = '删除'
            alert('删除成功')
        }
    }
    showTable()
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
//往tbody 里面创建行
var tbody = document.querySelector('tbody');
for (var i = 0; i < datas.length; i++) { // 外面的for循环管行 tr
    // 创建 tr行
    var tr = document.createElement('tr');
    //tbody.appendChild(tr);
    // 行里面创建单元格(跟数据有关系的单元格) td 单元格的数量取决于每个对象里面的属性个数  for循环遍历对象 datas[i]
    for (var k in datas[i]) { // 里面的for循环管列 td
        // 创建单元格 
        var td = document.createElement('td');
        // 把对象里面的属性值 datas[i][k] 给 td  
        // console.log(datas[i][k]);
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
    }
    //绑定删除按钮
    var del_td = document.createElement("td");
    var del_btn = document.createElement("a");
    del_btn.innerText = "删除";
    del_btn.href = "#";
    //绑定单击事件，获取单击对象的父级的父级
    del_btn.onclick = function () {
        tbody.removeChild(this.parentNode.parentNode);
    }
    del_td.appendChild(del_btn);
    tr.appendChild(del_td);
    tbody.appendChild(tr);
}
*/


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


/*
// 定义数组，存储搜索内容
let searchArr = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '王五', '张三', '刘齐', '王三'];
给输入框绑定内容改变事件
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
失去焦点
keyword.onblur = function () {
    //隐藏div
    searchHelper.style.display = 'none';
}
*/