// 实现模糊查询
let keyword = document.querySelector('.keyword'); // 获取输入框
// let searchHelper = document.querySelector('.search-helper'); // 获取搜索的下拉列表

//表格数据
var datas = [
    { name: '门店1', address: '杭州拱墅区湖州街上塘街道', area: '99' },
    { name: '门店22', address: '杭州拱墅区湖州街上塘街道舟山东路', area: '66' },
    { name: '门店2', address: '武汉', area: '66' },
    { name: '门店3', address: '杭州', area: '33' },
    { name: '门店11', address: '苏州', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
    { name: '门店12', address: '汉口', area: '33' },
];
showTable()
function showTable() {
    var tbody = document.getElementById('tb_2')
    tbody.innerHTML = ''
    var str = ''
    console.log(datas)
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].state == '删除') {
            continue
        }
        str += '<tr>'
        str += '<td>' + datas[i].name + '</td>'
        str += '<td>' + datas[i].address + '</td>'
        str += '<td>' + datas[i].area + '</td>'
        str += '<td><input  class="btnG1"  type="button" value="修改"  onclick = updateData("' + datas[i].name + '")></td>'
        str += '<td><input  class="btnG2"  type="button" value="删除"  onclick = deleteData("' + datas[i].name + '")></td>'
        str += '</tr>'
    }
    tbody.innerHTML = str
}

function searchBtn() {
    var tb_2 = document.getElementById('tb_2');

    var str = ''
    tb_2.innerHTML = ''

    for (let i = 0; i < datas.length; i++) {
        if ((datas[i].name.indexOf(keyword.value) != -1) || (datas[i].address.indexOf(keyword.value) != -1)) {
            console.log(datas[i].name)
            str += '<tr>'
            str += '<td>' + datas[i].name + '</td>'
            str += '<td>' + datas[i].address + '</td>'
            str += '<td>' + datas[i].area + '</td>'
            str += '<td><input  class="btnG1"  type="button" value="修改"  onclick = updateData("' + datas[i].name + '")></td>'
            str += '<td><input  class="btnG2"  type="button" value="删除"  onclick = deleteData("' + datas[i].name + '")></td>'
            str += '</tr>'
        }
    }
    tb_2.innerHTML = str
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

function hidder() {
    document.getElementById('zhezhao').style.display = 'none'
    document.getElementById('zhezhao2').style.display = 'none'
}

function btnG() {
    document.getElementById('zhezhao2').style.display = 'block'
}
function addSure() {
    var ad = {
        name: document.getElementById('idNNN').value,
        address: document.getElementById('nameNNN').value,
        area: document.getElementById('shopNNN').value,
        // state: '上架'
    }
    datas.push(ad)
    document.getElementById('zhezhao2').style.display = 'none'
    alert('添加成功')
    showTable()
}
// { name: '门店12', address: '汉口', area: '33' }
var idN
function updateData(name) {
    var re = confirm('确定操作吗')
    if (!re) return
    document.getElementById('zhezhao').style.display = 'block'
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].name == name) {
            document.getElementById('idNN').value = name
            document.getElementById('nameNN').value = datas[i].address
            document.getElementById('shopNN').value = datas[i].area
            idN = i
        }
    }
}

function sureBtn() {
    datas[idN].name = document.getElementById('idNN').value
    datas[idN].address = document.getElementById('nameNN').value
    datas[idN].area = document.getElementById('shopNN').value
    document.getElementById('zhezhao').style.display = 'none'
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

// 定义数组，存储搜索内容
//let searchArr = ['门店1', '门店2', '门店3', '门店11', '门店12', '杭州拱墅区湖州街上塘街道', '武汉', '苏州', '杭州', '汉江'];
// 给输入框绑定内容改变事件
// keyword.oninput = function () {
//     searchHelper.innerHTML = '';
//     for (let i = 0; i < searchArr.length; i++) {
//         if (searchArr[i].indexOf(keyword.value) != -1) {
//             //添加到div中
//             searchHelper.innerHTML += '<p>' + searchArr[i] + '</p>';
//             //显示div
//             searchHelper.style.display = 'block';
//         }
//     }
// }
//失去焦点
// keyword.onblur = function () {
//     //隐藏div
//     searchHelper.style.display = 'none';
// }