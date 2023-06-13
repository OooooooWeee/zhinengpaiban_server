//表格数据
var datas = [{
    1: null,
    2: '张三,王五',
    3: '张三,王五',
    4: '张三,王五,刘六',
    5: '张三,王五,刘六',
    6: '王五,刘六',
    7: '王五,刘六',
    8: '明明,曼曼',
}]
shi = [["张三(经理)", "", "", "", "", "", ""], ["", "赵六(门店经理)", "", "", "", "", ""], ["", "", "李四(小组长)", "", "", "", ""], ["", "", "", "赵六(门店经理)", "", "", ""], ["", "", "", "", "赵六(门店经理)", "", ""], ["", "", "", "赵六(门店经理)", "", "", ""], ["", "", "", "", "", "", "王五(店员)"]];
var color = ['#FAEBD7', '#FCE6C9', '#FFDEAD', '#FFC0CB', '#F4A460', '#F0E68C', '#FFFFCD', '#B0E0E6', '#87CEEB', '#40E0D0', '#33A1C9', '#03A89E', '#7FFFD4', '#7CFC00', '#00C957', '#3D9140']

// #shi=[["张三(经理)","","","","","",""],["","赵六(门店经理)","","","","",""],["","","李四(小组长)","","","",""],["","","","赵六(门店经理)","","",""],["","","","","赵六(门店经理)","",""],["","","","赵六(门店经理)","","",""],["","","","","","","王五(店员)"]];
// '#ADADAD',

week();

function handleChange() {
    var obj = document.getElementById('lllll'); // 定位id
    var index = obj.selectedIndex; // 选中索引
    var value = obj.options[index].value; // 选中值
    // alert(value);
    week(value);
}

function week(i) {
    var tbody = document.querySelector('tbody');
    if (i == '' || i == null) {
        i = 0;
    } else[
        i = i - 1
    ]
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var td = document.createElement('td');
    td.innerHTML = null;
    td.style.backgroundColor = '#ADADAD';
    tr.appendChild(td);
    for (var k in shi[i]) {
        var td = document.createElement('td');
        td.innerHTML = shi[i][k];
        td.style.backgroundColor = color[k];
        tr.appendChild(td);
    }
}
/*
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
        td.innerHTML = datas[i][k];
        td.style.backgroundColor = color[k - 1];
        tr.appendChild(td);
    }
}
*/