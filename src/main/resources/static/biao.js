var userarr = [
    { id1: '1',name1:'杭州...有限公司1', dates: '2022/3/2', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '2',name1:'杭州...有限公司2', dates: '2023/6/7', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '3', name1:'杭州...有限公司3',dates: '2023/8/2', t1: '8:00', t2: '10:00',n:'1'},
    { id1: '4', name1:'杭州...有限公司4',dates: '2023/2/2', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '5',name1:'杭州...有限公司5', dates: '2023/6/6', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '6',name1:'杭州...有限公司6', dates: '2023/2/6', t1: '8:00', t2: '10:00',n:'1' },
    { id1: '11',name1:'杭州...有限公司11', dates: '2022/3/2', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '12',name1:'杭州...有限公司12', dates: '2023/6/7', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '13', name1:'杭州...有限公司13',dates: '2023/8/2', t1: '8:00', t2: '10:00',n:'1'},
    { id1: '14', name1:'杭州...有限公司14',dates: '2023/2/2', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '15',name1:'杭州...有限公司15', dates: '2023/6/6', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '16',name1:'杭州...有限公司16', dates: '2023/2/6', t1: '8:00', t2: '10:00',n:'1' },
    { id1: '21',name1:'杭州...有限公司21', dates: '2022/3/2', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '22',name1:'杭州...有限公司22', dates: '2023/6/7', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '23', name1:'杭州...有限公司23',dates: '2023/8/2', t1: '8:00', t2: '10:00',n:'1'},
    { id1: '24', name1:'杭州...有限公司24',dates: '2023/2/2', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '25',name1:'杭州...有限公司25', dates: '2023/6/6', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '26',name1:'杭州...有限公司26', dates: '2023/2/6', t1: '8:00', t2: '10:00',n:'1' },
    { id1: '31',name1:'杭州...有限公司31', dates: '2022/3/2', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '32',name1:'杭州...有限公司32', dates: '2023/6/7', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '33', name1:'杭州...有限公司33',dates: '2023/8/2', t1: '8:00', t2: '10:00',n:'1'},
    { id1: '34', name1:'杭州...有限公司34',dates: '2023/2/2', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '35',name1:'杭州...有限公司35', dates: '2023/6/6', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '36',name1:'杭州...有限公司36', dates: '2023/2/6', t1: '8:00', t2: '10:00',n:'1' },
    { id1: '25',name1:'杭州...有限公司25', dates: '2023/6/6', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '26',name1:'杭州...有限公司26', dates: '2023/2/6', t1: '8:00', t2: '10:00',n:'1' },
    { id1: '31',name1:'杭州...有限公司31', dates: '2022/3/2', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '32',name1:'杭州...有限公司32', dates: '2023/6/7', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '33', name1:'杭州...有限公司33',dates: '2023/8/2', t1: '8:00', t2: '10:00',n:'1'},
    { id1: '34', name1:'杭州...有限公司34',dates: '2023/2/2', t1: '8:00', t2: '10:00',n:'2' },
    { id1: '35',name1:'杭州...有限公司35', dates: '2023/6/6', t1: '8:00', t2: '10:00',n:'0' },
    { id1: '36',name1:'杭州...有限公司36', dates: '2023/2/6', t1: '8:00', t2: '10:00',n:'1' }
  ]
  
  showTable()
  function sureBtn1() {
    //  = document.getElementById('accNN').value
    // userarr[idN].name1 = document.getElementById('pwdNN').value
    // userarr[idN].dates = document.getElementById('goodsNN').value
    // userarr[idN].t1 = document.getElementById('NN4').value
    // userarr[idN].t2 = document.getElementById('NN5').value
    // userarr[idN].n = document.getElementById('NN6').value
    
    // document.getElementById('zhezhao3').style.display = 'none';
    // showTable()
  }
  function showTable() {
    var tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
  
    var str = ''
  
    console.log(userarr)
    for (let i = 0; i < userarr.length; i++) {
      if (userarr[i].state == '删除') {
        continue
      }
      str += '<tr>'
      // str +=
      //   "<td> <input type='checkbox' value='" +
      //   userarr[i].username +
      //   "' name='user'  onclick='oneChose()' >  </td>"
      str += '<td>' + userarr[i].id1 + '</td>'
      str += '<td>' + userarr[i].name1 + '</td>'
      str += '<td>' + userarr[i].dates + '</td>'
      str += '<td>' + userarr[i].t1 + '</td>'
      str += '<td>' + userarr[i].t2 + '</td>'
      str += '<td>' + userarr[i].n + '</td>'
      str +=
        '<td><input  class="btnG"  type="button" value=" 修改"  onclick=' +
        'updateDataFun("' +
        userarr[i].name1 +
        '")' +
        '></td><td><input  class="btnG"  type="button" value=" 删除"  onclick=' +
        'delDataFun("' +
        userarr[i].name1 +
        '")' +
        '></td>'
  
      str += '</tr>'
    }
  
    tbody.innerHTML = str
    goPage(1,18)
  }
  function stateHandle(name1) {
    var re = confirm('确定操作吗')
    if (!re) return
    for (let j = 0; j < userarr.length; j++) {
      if (userarr[j].name1 == name1) {
        userarr[j].state = userarr[j].state == '上架' ? '下降' : '上架'
      }
    }
    showTable()
  }
  
  function hidder() {
    document.getElementById('zhezhao').style.display = 'none'
    document.getElementById('zhezhao2').style.display = 'none'
    document.getElementById('zhezhao3').style.display = 'none'
  }
  
  var idN
  function updateDataFun(name1) {
    var re = confirm('确定操作吗')
    if (!re) return
    document.getElementById('zhezhao').style.display = 'block'
    for (let i = 0; i < userarr.length; i++) {
      if (userarr[i].name1 == name1) {
        document.getElementById('accNN').value = userarr[i].id1
        document.getElementById('pwdNN').value = name1
        document.getElementById('goodsNN').value = userarr[i].dates
        document.getElementById('NN4').value = userarr[i].t1
        document.getElementById('NN5').value = userarr[i].t2
        document.getElementById('NN6').value = userarr[i].n
        idN = i
      }
    }
  }
  
  function sureBtn() {
    userarr[idN].id1 = document.getElementById('accNN').value
    userarr[idN].name1 = document.getElementById('pwdNN').value
    userarr[idN].dates = document.getElementById('goodsNN').value
    userarr[idN].t1 = document.getElementById('NN4').value
    userarr[idN].t2 = document.getElementById('NN5').value
    userarr[idN].n = document.getElementById('NN6').value
    document.getElementById('zhezhao').style.display = 'none'
    showTable()
  }
  function delDataFun(name1) {
    var re = confirm('确定操作吗')
    if (!re) return
  
    for (let i = 0; i < userarr.length; i++) {
      if (userarr[i].name1 == name1) {
        userarr[i].state = '删除'
        alert('删除成功')
      }
    }
    showTable()
  }
  function btnG() {
    document.getElementById('zhezhao2').style.display = 'block'
  }
  function addSure() {
    var ad = {
      id1: document.getElementById('accNNN').value,
      name1: document.getElementById('pwdNNN').value,
      dates: document.getElementById('goodsNNN').value,
      t1: document.getElementById('NNN4').value,
      t2: document.getElementById('NNN5').value,
      n: document.getElementById('NNN6').value,
      // state: '上架'
    }
    userarr.push(ad)
    document.getElementById('zhezhao2').style.display = 'none'
    alert('添加成功')
    showTable()
  }
  
  function allChose() {
    var allBtn = document.getElementById('allChose').checked
    var list = document.getElementsByName('user')
    for (let i = 0; i < list.length; i++) {
      list[i].checked = allBtn
    }
  }
  function oneChose() {
    console.log('aaaa')
    var list = document.getElementsByName('user')
    var sum = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked) {
        sum++
      }
    }
    if (sum == list.length) {
      document.getElementById('allChose').checked = true
    } else {
      document.getElementById('allChose').checked = false
    }
  }
  function findBtnFun() {
    var find = document.getElementById('inputN').value
    var find2=""
    var xx =document.getElementById('selSex')
    for(i=0;i<xx.options.length;i++){
      if(xx.options[i].selected){
        find2=xx.options[i].firstChild.nodeValue;
        
      }
    }
    var tbody = document.getElementById('tbody')
    var a=0,b=0;
    var str = ''
    if (find == '' || find == null) {
      // showTable()
      a=1;
      // return
    }
    if (find2 == '所有门店') {
      // showTable()
      find2=""
      b=1;
      // return
    }
    find2=parseInt(find2.split("").reverse().join("")) 
    console.log(find2)
    tbody.innerHTML = ''
    if(a==0&&b==1){
      for (let i = 0; i < userarr.length; i++) {
        if (userarr[i].state == '删除') {
          continue
        }
        if (userarr[i].name1.includes(find)) {
          console.log(userarr[i].name1)
    
          str += '<tr>'
          // str +=
          //   "<td> <input type='checkbox' value='" +
          //   userarr[i].id1 +
          //   "' name='user'  onclick='oneChose()' >  </td>"
            str += '<td>' + userarr[i].id1 + '</td>'
            str += '<td>' + userarr[i].name1 + '</td>'
            str += '<td>' + userarr[i].dates + '</td>'
            str += '<td>' + userarr[i].t1 + '</td>'
            str += '<td>' + userarr[i].t2 + '</td>'
            str += '<td>' + userarr[i].n + '</td>'
          str +=
            '<td><input  class="btnG" type="button" value=" 修改"  onclick=' +
            'updateDataFun("' +
            userarr[i].name1 +
            '")' +
            '></td><td><input  class="btnG"  type="button" value=" 删除"  onclick=' +
            'delDataFun("' +
            userarr[i].name1 +
            '")' +
            '></td>'
    
          str += '</tr>'
        }
      }

    }
    if(a==1&&b==1){
      for (let i = 0; i < userarr.length; i++) {
        if (userarr[i].state == '删除') {
          continue
        }
        if (1) {
          console.log(userarr[i].name1)
    
          str += '<tr>'
          // str +=
          //   "<td> <input type='checkbox' value='" +
          //   userarr[i].id1 +
          //   "' name='user'  onclick='oneChose()' >  </td>"
            str += '<td>' + userarr[i].id1 + '</td>'
            str += '<td>' + userarr[i].name1 + '</td>'
            str += '<td>' + userarr[i].dates + '</td>'
            str += '<td>' + userarr[i].t1 + '</td>'
            str += '<td>' + userarr[i].t2 + '</td>'
            str += '<td>' + userarr[i].n + '</td>'
          str +=
            '<td><input  class="btnG" type="button" value=" 修改"  onclick=' +
            'updateDataFun("' +
            userarr[i].name1 +
            '")' +
            '></td><td><input  class="btnG"  type="button" value=" 删除"  onclick=' +
            'delDataFun("' +
            userarr[i].name1 +
            '")' +
            '></td>'
    
          str += '</tr>'
        }
      }

    }
    if(a==1&&b==0){
      for (let i = 0; i < userarr.length; i++) {
        if (userarr[i].state == '删除') {
          continue
        }
        if (userarr[i].id1.includes(find2)) {
          console.log(userarr[i].id1)
    
          str += '<tr>'
          // str +=
          //   "<td> <input type='checkbox' value='" +
          //   userarr[i].id1 +
          //   "' name='user'  onclick='oneChose()' >  </td>"
            str += '<td>' + userarr[i].id1 + '</td>'
            str += '<td>' + userarr[i].name1 + '</td>'
            str += '<td>' + userarr[i].dates + '</td>'
            str += '<td>' + userarr[i].t1 + '</td>'
            str += '<td>' + userarr[i].t2 + '</td>'
            str += '<td>' + userarr[i].n + '</td>'
          str +=
            '<td><input  class="btnG" type="button" value=" 修改"  onclick=' +
            'updateDataFun("' +
            userarr[i].name1 +
            '")' +
            '></td><td><input  class="btnG"  type="button" value=" 删除"  onclick=' +
            'delDataFun("' +
            userarr[i].name1 +
            '")' +
            '></td>'
    
          str += '</tr>'
        }
      }

    }
    if(a==0&&b==0){
      for (let i = 0; i < userarr.length; i++) {
        if (userarr[i].state == '删除') {
          continue
        }
        if (userarr[i].id1.includes(find2)&&userarr[i].name1.includes(find)) {
          console.log(userarr[i].id1)
    
          str += '<tr>'
          // str +=
          //   "<td> <input type='checkbox' value='" +
          //   userarr[i].id1 +
          //   "' name='user'  onclick='oneChose()' >  </td>"
            str += '<td>' + userarr[i].id1 + '</td>'
            str += '<td>' + userarr[i].name1 + '</td>'
            str += '<td>' + userarr[i].dates + '</td>'
            str += '<td>' + userarr[i].t1 + '</td>'
            str += '<td>' + userarr[i].t2 + '</td>'
            str += '<td>' + userarr[i].n + '</td>'
          str +=
            '<td><input  class="btnG" type="button" value=" 修改"  onclick=' +
            'updateDataFun("' +
            userarr[i].name1 +
            '")' +
            '></td><td><input  class="btnG"  type="button" value=" 删除"  onclick=' +
            'delDataFun("' +
            userarr[i].name1 +
            '")' +
            '></td>'
    
          str += '</tr>'
        }
      }

    }
    tbody.innerHTML = str
    goPage(1,18)
  }
  
  function goPage(pno,psize){
    var itable = document.getElementById("0");
    var num = itable.rows.length;//表格所有行数(所有记录数)
    // console.log("hangshu"+num);
    // console.log(num);
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
  //总共分几页
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize+1;//开始显示的行 31
    var endRow = currentPage * pageSize;//结束显示的行  40
    endRow = (endRow > num)? num : endRow;  //40
    console.log(endRow);
    //遍历显示数据实现分页
	for(var i=1;i<(num+1);i++){
	    var irow = itable.rows[i-1];
	    if(i>=startRow && i<=endRow){
	      irow.style.display = "block";
	    }else{
	      irow.style.display = "none";
	    }
	}
    var tempStr2 = "共 "+num+" 条记录  分 "+totalPage+" 页  当前第 "+currentPage+" 页 ";
    var tempStr=""
    if(currentPage>1){
    	tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">首页</a>";
    	tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><上一页</a>"
    }else{
    	tempStr += " 首页  ";
    	tempStr += " <上一页  ";
    }
    if(currentPage<totalPage){
    	tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页></a>";
    	tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">尾页</a>";
    }else{
    	tempStr += " 下一页> ";
    	tempStr += " 尾页";
    }
    document.getElementById("barcon").innerHTML = tempStr2;
    document.getElementById("barcon2").innerHTML = tempStr;
}

  