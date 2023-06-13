
class Calendar {
  constructor({
    element,
    defaultDate
  }) {
    if (defaultDate instanceof Date) {
      this.defaultDate = defaultDate
    } else {
      this.defaultDate = new Date();
    }
    if (element instanceof HTMLElement) {
      this.element = element;
    }

    this.#init();
  }
  #color = ['#ADADAD', '#FAEBD7', '#FCE6C9', '#FFDEAD', '#FFC0CB', '#F4A460', '#F0E68C', '#FFFFCD', '#B0E0E6', '#87CEEB', '#40E0D0', '#33A1C9', '#03A89E', '#7FFFD4', '#7CFC00', '#00C957', '#3D9140']
   week1() {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (var k in this.#shi[0][i]) {
      var td = document.createElement('td');
      td.innerHTML = this.#shi[0][k];
      td.style.backgroundColor = this.#color[k - 1];
      tr.appendChild(td);
    }
  };
  week2() {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (var k in this.#shi[1][i]) {
      var td = document.createElement('td');
      td.innerHTML = this.#shi[1][k];
      td.style.backgroundColor = this.#color[k - 1];
      tr.appendChild(td);
    }
  }

  // private properties
  #year;
  // start from 1
  #month;
  #date;
  #dateString;
  #key;
  #flag;
  #b1;
  #b2;
  #b3;
  #b4;
  #b5;
  #b6;
  #b7;
  #n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00", "16:00 - 18:00", "18:00 - 20:00", "20:00 - 22:00"];
  #thistitle = "";
  #thisname = "";
  #thisxiugai = "";
  #ttt = "2023-4-16";
  #shi = [["张三(经理)", "", "", "", "", "", ""], ["", "赵六(门店经理)", "", "", "", "", ""], ["", "", "李四(小组长)", "", "", "", ""], ["", "", "", "赵六(门店经理)", "", "", ""], ["", "", "", "", "赵六(门店经理)", "", ""], ["", "", "", "赵六(门店经理)", "", "", ""], ["", "", "", "", "", "", "王五(店员)"]];
  #shi2 = [["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]];
  #tttz = "2023-4-23";
  #shiz = [["张3(经理)", "", "lll", "", "", "", ""], ["", "赵6(门店经理)", "", "", "", "", ""], ["", "", "李4(小组长)", "", "", "", ""], ["", "", "", "赵6(门店经理)", "", "", ""], ["", "", "", "", "赵6(门店经理)", "", ""], ["", "", "", "赵3(门店经理)", "", "", ""], ["", "", "", "", "", "", "王5(店员)"]];

  #linshi = "";
  #init = () => {
    const defaultYear = this.defaultDate.getFullYear();
    const defaultMonth = this.defaultDate.getMonth() + 1;
    const defaultDate = this.defaultDate.getDate();
    this.#setDate(defaultYear, defaultMonth, defaultDate);
    this.#listenEvents();
    this.#key = 0;
    this.#b1 = "1";
    this.#b2 = "1";
    this.#b3 = "1";
    this.#b4 = "1";
    this.#b5 = "1";
    this.#b6 = "1";
    this.#b7 = "1";
    if (this.#key === 0) {
      // dateEL.classList.add('selected');
      // dateEL2.classList.add('selected');
      // 
    }
  }
  #li = () => {

  }
  #listenEvents = () => {
    // DOMS
    const lastYearButton = this.element.querySelector('.lastYear');
    const lastMonthButton = this.element.querySelector('.lastMonth');
    const nextYearButton = this.element.querySelector('.nextYear');
    const nextMonthButton = this.element.querySelector('.nextMonth');


    // last year

    lastYearButton.addEventListener('click', () => {
      this.#year--;
      this.#setDate(this.#year, this.#month);

      this.#key = 0;
      // let strb=e.target.textContent;
      // let s=strb.split("").reverse().join("");
      // let ss=s[1];
      // let x=0;
      // if(s[2]!=' '){
      //   x=parseInt(ss)+10*parseInt(s[2]);
      // }
      // else {x=parseInt(ss);}
      // // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
      // console.log((parseInt(e.target.id)));
      // console.log(x);
      // e.target.classList.add('selected');
      const datesEL = this.element.querySelector('.dates');
      // const datesEL2 = this.element.querySelector('.dates2');
      // const datesEL3 = this.element.querySelector('.dates3');
      // const datesEL = this.element.querySelector('.dates2');
      // if (!reRender) {
      //   const dateELs = datesEL.querySelectorAll('.date');
      //   // const dateELs2 = datesEL2.querySelectorAll('.date2');
      //   // const dateELs3 = datesEL3.querySelectorAll('.date3');
      //   for (const el of dateELs) {
      //     el.classList.toggle('selected', el.title === this.#dateString);
      //   }
      //   // for (const el of dateELs2) {
      //   //   el.classList.toggle('selected', el.title === this.#dateString);
      //   // }
      //   // for (const el of dateELs3) {
      //   //   el.classList.toggle('selected', el.title === this.#dateString);
      //   // }
      //   return;
      // }
      // var str1='';
      // var str2='';
      // datesEL.innerHTML = '';
      // datesEL2.innerHTML = '';
      // const datesEL = this.element.querySelector('.dates');
      datesEL.innerHTML = '';
      // datesEL2.innerHTML = '';

      // datesEL3.innerHTML = '';

      const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
      const firstDay = this.#getDayOfFirstDate();
      const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
      const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

      let k = this.#key;


      if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
      else if (k == 5 && this.#flag == 0) { k = k + 1; }
      if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
      // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
      var op = 1 + 7 * k;

      for (let i = op; i <= op + 6; i++) {
        // console.log(k);
        const dateEL = document.createElement('button');
        // const dateEL2 = document.createElement('button');
        dateEL.classList.add('date');
        // dateEL2.classList.add('date2');
        let dateString;
        // let dateString2;
        let date;
        if (firstDay > 1 && i < firstDay) {
          // dates in last month
          date = dayCountInLastMonth - (firstDay - i) + 1;
          dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
          // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
        } else if (i >= dayCountInCurrentMonth + firstDay) {
          // dates in next month
          date = i - (dayCountInCurrentMonth + firstDay) + 1;
          dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
          // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
        } else {
          // dates in currrent month
          date = i - firstDay + 1;
          dateString = this.#getDateString(this.#year, this.#month, date);
          // dateString2 = this.#getDateString(this.#year, this.#month, date);
          dateEL.classList.add('currentMonth');
          // dateEL2.classList.add('currentMonth');
          if (date === this.#date) {
            // dateEL.classList.add('selected');
            // dateEL2.classList.add('selected');
          }
        }

        dateEL.textContent = date;
        dateEL.title = dateString;
        datesEL.append(dateEL);
        if (i == op) {
          this.#b1 = dateEL.title;
        }
        if (i == op + 1) this.#b2 = dateEL.title;
        if (i == op + 2) this.#b3 = dateEL.title;
        if (i == op + 3) this.#b4 = dateEL.title;
        if (i == op + 4) this.#b5 = dateEL.title;
        if (i == op + 5) this.#b6 = dateEL.title;
        if (i == op + 6) this.#b7 = dateEL.title;

      }
      const datesEL3 = this.element.querySelector('.shijians');
      datesEL3.innerHTML = '';
      // var n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00","14:00 - 16:00","16:00 - 18:00","18:00 - 20:00","20:00 - 22:00"];
      var n = this.#n;
      for (let i = 0; i <= 6; i++) {

        for (let j = 0; j <= 7; j++) {
          // const dateEL3 = document.createElement('input');
          // dateEL3.classList.add('shijian');

          let dateString;
          let dateString2;

          if (j == 0) {
            const dateEL3 = document.createElement('button');
            // document.getElementById("dateEL3").disabled=true;
            // dateEL3.style.pointerEvents='none';
            // dateEL3.classList.add('shijian');
            dateEL3.classList.add('biaoq');
            dateEL3.textContent = n[i];
            datesEL3.append(dateEL3);
          }
          if (j == 1) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b1;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 2) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b2;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 3) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b3;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 4) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b4;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 5) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b5;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 6) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b6;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 7) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b7;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
        }

      }

    });
    // next year
    nextYearButton.addEventListener('click', () => {
      this.#year++;
      this.#setDate(this.#year, this.#month);

      this.#key = 0;
      // let strb=e.target.textContent;
      // let s=strb.split("").reverse().join("");
      // let ss=s[1];
      // let x=0;
      // if(s[2]!=' '){
      //   x=parseInt(ss)+10*parseInt(s[2]);
      // }
      // else {x=parseInt(ss);}
      // // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
      // console.log((parseInt(e.target.id)));
      // console.log(x);
      // e.target.classList.add('selected');
      const datesEL = this.element.querySelector('.dates');
      // const datesEL2 = this.element.querySelector('.dates2');
      // const datesEL3 = this.element.querySelector('.dates3');
      // const datesEL = this.element.querySelector('.dates2');
      // if (!reRender) {
      //   const dateELs = datesEL.querySelectorAll('.date');
      //   // const dateELs2 = datesEL2.querySelectorAll('.date2');
      //   // const dateELs3 = datesEL3.querySelectorAll('.date3');
      //   for (const el of dateELs) {
      //     el.classList.toggle('selected', el.title === this.#dateString);
      //   }
      //   // for (const el of dateELs2) {
      //   //   el.classList.toggle('selected', el.title === this.#dateString);
      //   // }
      //   // for (const el of dateELs3) {
      //   //   el.classList.toggle('selected', el.title === this.#dateString);
      //   // }
      //   return;
      // }
      // var str1='';
      // var str2='';
      // datesEL.innerHTML = '';
      // datesEL2.innerHTML = '';
      // const datesEL = this.element.querySelector('.dates');
      datesEL.innerHTML = '';
      // datesEL2.innerHTML = '';

      // datesEL3.innerHTML = '';

      const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
      const firstDay = this.#getDayOfFirstDate();
      const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
      const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

      let k = this.#key;


      if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
      else if (k == 5 && this.#flag == 0) { k = k + 1; }
      if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
      // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
      var op = 1 + 7 * k;

      for (let i = op; i <= op + 6; i++) {
        // console.log(k);
        const dateEL = document.createElement('button');
        // const dateEL2 = document.createElement('button');
        dateEL.classList.add('date');
        // dateEL2.classList.add('date2');
        let dateString;
        // let dateString2;
        let date;
        if (firstDay > 1 && i < firstDay) {
          // dates in last month
          date = dayCountInLastMonth - (firstDay - i) + 1;
          dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
          // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
        } else if (i >= dayCountInCurrentMonth + firstDay) {
          // dates in next month
          date = i - (dayCountInCurrentMonth + firstDay) + 1;
          dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
          // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
        } else {
          // dates in currrent month
          date = i - firstDay + 1;
          dateString = this.#getDateString(this.#year, this.#month, date);
          // dateString2 = this.#getDateString(this.#year, this.#month, date);
          dateEL.classList.add('currentMonth');
          // dateEL2.classList.add('currentMonth');
          if (date === this.#date) {
            // dateEL.classList.add('selected');
            // dateEL2.classList.add('selected');
          }
        }

        dateEL.textContent = date;
        dateEL.title = dateString;
        datesEL.append(dateEL);
        if (i == op) {
          this.#b1 = dateEL.title;
        }
        if (i == op + 1) this.#b2 = dateEL.title;
        if (i == op + 2) this.#b3 = dateEL.title;
        if (i == op + 3) this.#b4 = dateEL.title;
        if (i == op + 4) this.#b5 = dateEL.title;
        if (i == op + 5) this.#b6 = dateEL.title;
        if (i == op + 6) this.#b7 = dateEL.title;

      }
      const datesEL3 = this.element.querySelector('.shijians');
      datesEL3.innerHTML = '';
      // var n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00","14:00 - 16:00","16:00 - 18:00","18:00 - 20:00","20:00 - 22:00"];
      var n = this.#n;
      for (let i = 0; i <= 6; i++) {

        for (let j = 0; j <= 7; j++) {
          // const dateEL3 = document.createElement('input');
          // dateEL3.classList.add('shijian');

          let dateString;
          let dateString2;

          if (j == 0) {
            const dateEL3 = document.createElement('button');
            // document.getElementById("dateEL3").disabled=true;
            // dateEL3.style.pointerEvents='none';
            // dateEL3.classList.add('shijian');
            dateEL3.classList.add('biaoq');
            dateEL3.textContent = n[i];
            datesEL3.append(dateEL3);
          }
          if (j == 1) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b1;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 2) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b2;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 3) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b3;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 4) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b4;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 5) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b5;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 6) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b6;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 7) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b7;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
        }

      }
    });
    // last month
    lastMonthButton.addEventListener('click', () => {
      if (this.#month === 1) {
        this.#month = 12;
        this.#year--;
      } else {
        this.#month--;
      }
      this.#setDate(this.#year, this.#month);

      this.#key = 0;
      // let strb=e.target.textContent;
      // let s=strb.split("").reverse().join("");
      // let ss=s[1];
      // let x=0;
      // if(s[2]!=' '){
      //   x=parseInt(ss)+10*parseInt(s[2]);
      // }
      // else {x=parseInt(ss);}
      // // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
      // console.log((parseInt(e.target.id)));
      // console.log(x);
      // e.target.classList.add('selected');
      const datesEL = this.element.querySelector('.dates');
      // const datesEL2 = this.element.querySelector('.dates2');
      // const datesEL3 = this.element.querySelector('.dates3');
      // const datesEL = this.element.querySelector('.dates2');
      // if (!reRender) {
      //   const dateELs = datesEL.querySelectorAll('.date');
      //   // const dateELs2 = datesEL2.querySelectorAll('.date2');
      //   // const dateELs3 = datesEL3.querySelectorAll('.date3');
      //   for (const el of dateELs) {
      //     el.classList.toggle('selected', el.title === this.#dateString);
      //   }
      //   // for (const el of dateELs2) {
      //   //   el.classList.toggle('selected', el.title === this.#dateString);
      //   // }
      //   // for (const el of dateELs3) {
      //   //   el.classList.toggle('selected', el.title === this.#dateString);
      //   // }
      //   return;
      // }
      // var str1='';
      // var str2='';
      // datesEL.innerHTML = '';
      // datesEL2.innerHTML = '';
      // const datesEL = this.element.querySelector('.dates');
      datesEL.innerHTML = '';
      // datesEL2.innerHTML = '';

      // datesEL3.innerHTML = '';

      const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
      const firstDay = this.#getDayOfFirstDate();
      const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
      const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

      let k = this.#key;


      if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
      else if (k == 5 && this.#flag == 0) { k = k + 1; }
      if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
      // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
      var op = 1 + 7 * k;

      for (let i = op; i <= op + 6; i++) {
        // console.log(k);
        const dateEL = document.createElement('button');
        // const dateEL2 = document.createElement('button');
        dateEL.classList.add('date');
        // dateEL2.classList.add('date2');
        let dateString;
        // let dateString2;
        let date;
        if (firstDay > 1 && i < firstDay) {
          // dates in last month
          date = dayCountInLastMonth - (firstDay - i) + 1;
          dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
          // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
        } else if (i >= dayCountInCurrentMonth + firstDay) {
          // dates in next month
          date = i - (dayCountInCurrentMonth + firstDay) + 1;
          dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
          // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
        } else {
          // dates in currrent month
          date = i - firstDay + 1;
          dateString = this.#getDateString(this.#year, this.#month, date);
          // dateString2 = this.#getDateString(this.#year, this.#month, date);
          dateEL.classList.add('currentMonth');
          // dateEL2.classList.add('currentMonth');
          if (date === this.#date) {
            // dateEL.classList.add('selected');
            // dateEL2.classList.add('selected');
          }
        }

        dateEL.textContent = date;
        dateEL.title = dateString;
        datesEL.append(dateEL);
        if (i == op) {
          this.#b1 = dateEL.title;
        }
        if (i == op + 1) this.#b2 = dateEL.title;
        if (i == op + 2) this.#b3 = dateEL.title;
        if (i == op + 3) this.#b4 = dateEL.title;
        if (i == op + 4) this.#b5 = dateEL.title;
        if (i == op + 5) this.#b6 = dateEL.title;
        if (i == op + 6) this.#b7 = dateEL.title;

      }
      const datesEL3 = this.element.querySelector('.shijians');
      datesEL3.innerHTML = '';
      // var n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00","14:00 - 16:00","16:00 - 18:00","18:00 - 20:00","20:00 - 22:00"];
      var n = this.#n;
      for (let i = 0; i <= 6; i++) {

        for (let j = 0; j <= 7; j++) {
          // const dateEL3 = document.createElement('input');
          // dateEL3.classList.add('shijian');

          let dateString;
          let dateString2;

          if (j == 0) {
            const dateEL3 = document.createElement('button');
            // document.getElementById("dateEL3").disabled=true;
            // dateEL3.style.pointerEvents='none';
            // dateEL3.classList.add('shijian');
            dateEL3.classList.add('biaoq');
            dateEL3.textContent = n[i];
            datesEL3.append(dateEL3);
          }
          if (j == 1) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b1;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 2) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b2;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 3) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b3;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 4) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b4;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 5) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b5;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 6) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b6;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 7) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b7;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
        }

      }
    });
    // next month
    nextMonthButton.addEventListener('click', () => {
      if (this.#month === 12) {
        this.#month = 1;
        this.#year++;
      } else {
        this.#month++
      }
      this.#setDate(this.#year, this.#month);
      this.#key = 0;
      // let strb=e.target.textContent;
      // let s=strb.split("").reverse().join("");
      // let ss=s[1];
      // let x=0;
      // if(s[2]!=' '){
      //   x=parseInt(ss)+10*parseInt(s[2]);
      // }
      // else {x=parseInt(ss);}
      // // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
      // console.log((parseInt(e.target.id)));
      // console.log(x);
      // e.target.classList.add('selected');
      const datesEL = this.element.querySelector('.dates');
      // const datesEL2 = this.element.querySelector('.dates2');
      // const datesEL3 = this.element.querySelector('.dates3');
      // const datesEL = this.element.querySelector('.dates2');
      // if (!reRender) {
      //   const dateELs = datesEL.querySelectorAll('.date');
      //   // const dateELs2 = datesEL2.querySelectorAll('.date2');
      //   // const dateELs3 = datesEL3.querySelectorAll('.date3');
      //   for (const el of dateELs) {
      //     el.classList.toggle('selected', el.title === this.#dateString);
      //   }
      //   // for (const el of dateELs2) {
      //   //   el.classList.toggle('selected', el.title === this.#dateString);
      //   // }
      //   // for (const el of dateELs3) {
      //   //   el.classList.toggle('selected', el.title === this.#dateString);
      //   // }
      //   return;
      // }
      // var str1='';
      // var str2='';
      // datesEL.innerHTML = '';
      // datesEL2.innerHTML = '';
      // const datesEL = this.element.querySelector('.dates');
      datesEL.innerHTML = '';
      // datesEL2.innerHTML = '';

      // datesEL3.innerHTML = '';

      const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
      const firstDay = this.#getDayOfFirstDate();
      const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
      const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

      let k = this.#key;


      if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
      else if (k == 5 && this.#flag == 0) { k = k + 1; }
      if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
      // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
      var op = 1 + 7 * k;

      for (let i = op; i <= op + 6; i++) {
        // console.log(k);
        const dateEL = document.createElement('button');
        // const dateEL2 = document.createElement('button');
        dateEL.classList.add('date');
        // dateEL2.classList.add('date2');
        let dateString;
        // let dateString2;
        let date;
        if (firstDay > 1 && i < firstDay) {
          // dates in last month
          date = dayCountInLastMonth - (firstDay - i) + 1;
          dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
          // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
        } else if (i >= dayCountInCurrentMonth + firstDay) {
          // dates in next month
          date = i - (dayCountInCurrentMonth + firstDay) + 1;
          dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
          // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
        } else {
          // dates in currrent month
          date = i - firstDay + 1;
          dateString = this.#getDateString(this.#year, this.#month, date);
          // dateString2 = this.#getDateString(this.#year, this.#month, date);
          dateEL.classList.add('currentMonth');
          // dateEL2.classList.add('currentMonth');
          if (date === this.#date) {
            // dateEL.classList.add('selected');
            // dateEL2.classList.add('selected');
          }
        }

        dateEL.textContent = date;
        dateEL.title = dateString;
        datesEL.append(dateEL);
        if (i == op) {
          this.#b1 = dateEL.title;
        }
        if (i == op + 1) this.#b2 = dateEL.title;
        if (i == op + 2) this.#b3 = dateEL.title;
        if (i == op + 3) this.#b4 = dateEL.title;
        if (i == op + 4) this.#b5 = dateEL.title;
        if (i == op + 5) this.#b6 = dateEL.title;
        if (i == op + 6) this.#b7 = dateEL.title;

      }
      const datesEL3 = this.element.querySelector('.shijians');
      datesEL3.innerHTML = '';
      // var n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00","14:00 - 16:00","16:00 - 18:00","18:00 - 20:00","20:00 - 22:00"];
      var n = this.#n;
      for (let i = 0; i <= 6; i++) {

        for (let j = 0; j <= 7; j++) {
          // const dateEL3 = document.createElement('input');
          // dateEL3.classList.add('shijian');

          let dateString;
          let dateString2;

          if (j == 0) {
            const dateEL3 = document.createElement('button');
            // document.getElementById("dateEL3").disabled=true;
            // dateEL3.style.pointerEvents='none';
            // dateEL3.classList.add('shijian');
            dateEL3.classList.add('biaoq');
            dateEL3.textContent = n[i];
            datesEL3.append(dateEL3);
          }
          if (j == 1) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b1;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 2) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b2;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 3) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b3;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 4) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b4;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 5) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b5;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 6) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b6;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
          if (j == 7) {
            const dateEL3 = document.createElement('button');
            dateEL3.classList.add('shijian');
            dateEL3.name = n[i];
            dateEL3.title = this.#b7;
            if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
            datesEL3.append(dateEL3);
          }
        }

      }
    });
    // click dates

    this.element.addEventListener('click', (e) => {
      if (e.target.id == "opp") {
        // document.getElementById('zhezhao3').style.display = 'none';
        // this.#thisxiugai=document.getElementById('acccc').value;
        // console.log("*"+this.#thisname);
        // console.log("*"+this.#thistitle);
        // console.log("*"+this.#thisxiugai);

        // console.log(e.target.title);
        // const params = e.target.title.split('-').map(str => parseInt(str, 10));
        // this.#setDate(...params, false);
        // this.#key=parseInt(e.target.id);
        // let strb=e.target.textContent;
        // let s=strb.split("").reverse().join("");
        // let ss=s[1];
        // let x=0;
        // if(s[2]!=' '){
        //   x=parseInt(ss)+10*parseInt(s[2]);
        // }
        // else {x=parseInt(ss);}

        // console.log((parseInt(e.target.id)));
        // console.log(x);
        // e.target.classList.add('selected');
        const datesEL = this.element.querySelector('.dates');
        // const datesEL2 = this.element.querySelector('.dates2');
        // const datesEL3 = this.element.querySelector('.dates3');
        // const datesEL = this.element.querySelector('.dates2');
        // if (!reRender) {
        //   const dateELs = datesEL.querySelectorAll('.date');
        //   // const dateELs2 = datesEL2.querySelectorAll('.date2');
        //   // const dateELs3 = datesEL3.querySelectorAll('.date3');
        //   for (const el of dateELs) {
        //     el.classList.toggle('selected', el.title === this.#dateString);
        //   }
        //   // for (const el of dateELs2) {
        //   //   el.classList.toggle('selected', el.title === this.#dateString);
        //   // }
        //   // for (const el of dateELs3) {
        //   //   el.classList.toggle('selected', el.title === this.#dateString);
        //   // }
        //   return;
        // }
        // var str1='';
        // var str2='';
        // datesEL.innerHTML = '';
        // datesEL2.innerHTML = '';
        // const datesEL = this.element.querySelector('.dates');
        datesEL.innerHTML = '';
        // datesEL2.innerHTML = '';

        // datesEL3.innerHTML = '';

        const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
        const firstDay = this.#getDayOfFirstDate();
        const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
        const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

        let k = 0;

        k = this.#key;
        if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
        else if (k == 5 && this.#flag == 0) { k = k + 1; }
        if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
        // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
        var op = 1 + 7 * k;

        for (let i = op; i <= op + 6; i++) {
          // console.log(k);
          const dateEL = document.createElement('button');
          // const dateEL2 = document.createElement('button');
          dateEL.classList.add('date');
          // dateEL2.classList.add('date2');
          let dateString;
          // let dateString2;
          let date;
          if (firstDay > 1 && i < firstDay) {
            // dates in last month
            date = dayCountInLastMonth - (firstDay - i) + 1;
            dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
            // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
          } else if (i >= dayCountInCurrentMonth + firstDay) {
            // dates in next month
            date = i - (dayCountInCurrentMonth + firstDay) + 1;
            dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
            // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
          } else {
            // dates in currrent month
            date = i - firstDay + 1;
            dateString = this.#getDateString(this.#year, this.#month, date);
            // dateString2 = this.#getDateString(this.#year, this.#month, date);
            dateEL.classList.add('currentMonth');
            // dateEL2.classList.add('currentMonth');
            if (date === this.#date) {
              // dateEL.classList.add('selected');
              // dateEL2.classList.add('selected');
            }
          }

          dateEL.textContent = date;
          dateEL.title = dateString;
          datesEL.append(dateEL);
          if (i == op) {
            this.#b1 = dateEL.title;
          }
          if (i == op + 1) this.#b2 = dateEL.title;
          if (i == op + 2) this.#b3 = dateEL.title;
          if (i == op + 3) this.#b4 = dateEL.title;
          if (i == op + 4) this.#b5 = dateEL.title;
          if (i == op + 5) this.#b6 = dateEL.title;
          if (i == op + 6) this.#b7 = dateEL.title;

        }
        const datesEL3 = this.element.querySelector('.shijians');
        datesEL3.innerHTML = '';
        // var n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00","14:00 - 16:00","16:00 - 18:00","18:00 - 20:00","20:00 - 22:00"];
        var n = this.#n;
        for (let i = 0; i <= 6; i++) {

          for (let j = 0; j <= 7; j++) {
            // const dateEL3 = document.createElement('input');
            // dateEL3.classList.add('shijian');

            let dateString;
            let dateString2;

            if (j == 0) {
              const dateEL3 = document.createElement('button');
              // document.getElementById("dateEL3").disabled=true;
              // dateEL3.style.pointerEvents='none';
              // dateEL3.classList.add('shijian');
              dateEL3.classList.add('biaoq');
              dateEL3.textContent = n[i];
              datesEL3.append(dateEL3);
            }
            if (j == 1) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b1;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shiz[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 2) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b2;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shiz[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 3) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b3;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shiz[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 4) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b4;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shiz[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 5) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b5;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shiz[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 6) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b6;
              dateEL3.textContent = ' ';
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shiz[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);

            }
            if (j == 7) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b7;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shiz[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
          }

        }
      }
    })
    this.element.addEventListener('click', (e) => {
      if (e.target.id == "opp2") {
        // document.getElementById('zhezhao3').style.display = 'none';
        // this.#thisxiugai=document.getElementById('acccc').value;
        // console.log("*"+this.#thisname);
        // console.log("*"+this.#thistitle);
        // console.log("*"+this.#thisxiugai);

        // console.log(e.target.title);
        // const params = e.target.title.split('-').map(str => parseInt(str, 10));
        // this.#setDate(...params, false);
        // this.#key=parseInt(e.target.id);
        // let strb=e.target.textContent;
        // let s=strb.split("").reverse().join("");
        // let ss=s[1];
        // let x=0;
        // if(s[2]!=' '){
        //   x=parseInt(ss)+10*parseInt(s[2]);
        // }
        // else {x=parseInt(ss);}

        // console.log((parseInt(e.target.id)));
        // console.log(x);
        // e.target.classList.add('selected');
        const datesEL = this.element.querySelector('.dates');
        // const datesEL2 = this.element.querySelector('.dates2');
        // const datesEL3 = this.element.querySelector('.dates3');
        // const datesEL = this.element.querySelector('.dates2');
        // if (!reRender) {
        //   const dateELs = datesEL.querySelectorAll('.date');
        //   // const dateELs2 = datesEL2.querySelectorAll('.date2');
        //   // const dateELs3 = datesEL3.querySelectorAll('.date3');
        //   for (const el of dateELs) {
        //     el.classList.toggle('selected', el.title === this.#dateString);
        //   }
        //   // for (const el of dateELs2) {
        //   //   el.classList.toggle('selected', el.title === this.#dateString);
        //   // }
        //   // for (const el of dateELs3) {
        //   //   el.classList.toggle('selected', el.title === this.#dateString);
        //   // }
        //   return;
        // }
        // var str1='';
        // var str2='';
        // datesEL.innerHTML = '';
        // datesEL2.innerHTML = '';
        // const datesEL = this.element.querySelector('.dates');
        datesEL.innerHTML = '';
        // datesEL2.innerHTML = '';

        // datesEL3.innerHTML = '';

        const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
        const firstDay = this.#getDayOfFirstDate();
        const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
        const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

        let k = 0;

        k = this.#key;
        if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
        else if (k == 5 && this.#flag == 0) { k = k + 1; }
        if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
        // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
        var op = 1 + 7 * k;

        for (let i = op; i <= op + 6; i++) {
          // console.log(k);
          const dateEL = document.createElement('button');
          // const dateEL2 = document.createElement('button');
          dateEL.classList.add('date');
          // dateEL2.classList.add('date2');
          let dateString;
          // let dateString2;
          let date;
          if (firstDay > 1 && i < firstDay) {
            // dates in last month
            date = dayCountInLastMonth - (firstDay - i) + 1;
            dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
            // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
          } else if (i >= dayCountInCurrentMonth + firstDay) {
            // dates in next month
            date = i - (dayCountInCurrentMonth + firstDay) + 1;
            dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
            // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
          } else {
            // dates in currrent month
            date = i - firstDay + 1;
            dateString = this.#getDateString(this.#year, this.#month, date);
            // dateString2 = this.#getDateString(this.#year, this.#month, date);
            dateEL.classList.add('currentMonth');
            // dateEL2.classList.add('currentMonth');
            if (date === this.#date) {
              // dateEL.classList.add('selected');
              // dateEL2.classList.add('selected');
            }
          }

          dateEL.textContent = date;
          dateEL.title = dateString;
          datesEL.append(dateEL);
          if (i == op) {
            this.#b1 = dateEL.title;
          }
          if (i == op + 1) this.#b2 = dateEL.title;
          if (i == op + 2) this.#b3 = dateEL.title;
          if (i == op + 3) this.#b4 = dateEL.title;
          if (i == op + 4) this.#b5 = dateEL.title;
          if (i == op + 5) this.#b6 = dateEL.title;
          if (i == op + 6) this.#b7 = dateEL.title;

        }
        const datesEL3 = this.element.querySelector('.shijians');
        datesEL3.innerHTML = '';
        // var n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00","14:00 - 16:00","16:00 - 18:00","18:00 - 20:00","20:00 - 22:00"];
        var n = this.#n;
        for (let i = 0; i <= 6; i++) {

          for (let j = 0; j <= 7; j++) {
            // const dateEL3 = document.createElement('input');
            // dateEL3.classList.add('shijian');

            let dateString;
            let dateString2;

            if (j == 0) {
              const dateEL3 = document.createElement('button');
              // document.getElementById("dateEL3").disabled=true;
              // dateEL3.style.pointerEvents='none';
              // dateEL3.classList.add('shijian');
              dateEL3.classList.add('biaoq');
              dateEL3.textContent = n[i];
              datesEL3.append(dateEL3);
            }
            if (j == 1) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b1;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shi2[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 2) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b2;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shi2[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 3) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b3;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shi2[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 4) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b4;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shi2[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 5) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b5;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shi2[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 6) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b6;
              dateEL3.textContent = ' ';
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shi2[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);

            }
            if (j == 7) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b7;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#tttz) dateEL3.textContent = this.#shi2[i][j - 1];
              // if(this.#thisname == dateEL3.name&&this.#thistitle == dateEL3.title)dateEL3.textContent=this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
          }

        }
      }
    })

    this.element.addEventListener('click', (e) => {
      if (e.target.id == "nav-item-opt-2") {
        document.getElementById('wwww1').style.visibility = 'hidden	';
        document.getElementById('wwww2').style.visibility = 'hidden	';
        document.getElementById('wwww3').style.display = 'none';
        // document.getElementById('tableA').style.display='none';
        document.getElementById('footA').style.display = 'none';
        document.getElementById('x').style.visibility = 'hidden';
        document.getElementById('biao11').style.display = 'block';
        document.getElementById('lllll').style.display = 'block';
      }
    });
    this.element.addEventListener('click', (e) => {
      if (e.target.id == "nav-item-opt-1") {
        document.getElementById('wwww1').style.visibility = 'visible';
        document.getElementById('wwww2').style.visibility = 'visible';
        document.getElementById('wwww3').style.display = 'block';
        // document.getElementById('tableA').style.display='block';
        document.getElementById('footA').style.display = 'block';
        document.getElementById('x').style.visibility = 'visible';
        document.getElementById('biao11').style.display = 'none';
        document.getElementById('lllll').style.display = 'none';
      }
    })
    this.element.addEventListener('click', (e) => {
      if (e.target.id == "queding") {
        document.getElementById('zhezhao3').style.display = 'none';
        this.#thisxiugai = document.getElementById('acccc').value;
        console.log("*" + this.#thisname);
        console.log("*" + this.#thistitle);
        console.log("*" + this.#thisxiugai);

        // console.log(e.target.title);
        // const params = e.target.title.split('-').map(str => parseInt(str, 10));
        // this.#setDate(...params, false);
        // this.#key=parseInt(e.target.id);
        // let strb=e.target.textContent;
        // let s=strb.split("").reverse().join("");
        // let ss=s[1];
        // let x=0;
        // if(s[2]!=' '){
        //   x=parseInt(ss)+10*parseInt(s[2]);
        // }
        // else {x=parseInt(ss);}

        // console.log((parseInt(e.target.id)));
        // console.log(x);
        // e.target.classList.add('selected');
        const datesEL = this.element.querySelector('.dates');
        // const datesEL2 = this.element.querySelector('.dates2');
        // const datesEL3 = this.element.querySelector('.dates3');
        // const datesEL = this.element.querySelector('.dates2');
        // if (!reRender) {
        //   const dateELs = datesEL.querySelectorAll('.date');
        //   // const dateELs2 = datesEL2.querySelectorAll('.date2');
        //   // const dateELs3 = datesEL3.querySelectorAll('.date3');
        //   for (const el of dateELs) {
        //     el.classList.toggle('selected', el.title === this.#dateString);
        //   }
        //   // for (const el of dateELs2) {
        //   //   el.classList.toggle('selected', el.title === this.#dateString);
        //   // }
        //   // for (const el of dateELs3) {
        //   //   el.classList.toggle('selected', el.title === this.#dateString);
        //   // }
        //   return;
        // }
        // var str1='';
        // var str2='';
        // datesEL.innerHTML = '';
        // datesEL2.innerHTML = '';
        // const datesEL = this.element.querySelector('.dates');
        datesEL.innerHTML = '';
        // datesEL2.innerHTML = '';

        // datesEL3.innerHTML = '';

        const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
        const firstDay = this.#getDayOfFirstDate();
        const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
        const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

        let k = 0;

        k = this.#key;
        if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
        else if (k == 5 && this.#flag == 0) { k = k + 1; }
        if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
        // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
        var op = 1 + 7 * k;

        for (let i = op; i <= op + 6; i++) {
          // console.log(k);
          const dateEL = document.createElement('button');
          // const dateEL2 = document.createElement('button');
          dateEL.classList.add('date');
          // dateEL2.classList.add('date2');
          let dateString;
          // let dateString2;
          let date;
          if (firstDay > 1 && i < firstDay) {
            // dates in last month
            date = dayCountInLastMonth - (firstDay - i) + 1;
            dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
            // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
          } else if (i >= dayCountInCurrentMonth + firstDay) {
            // dates in next month
            date = i - (dayCountInCurrentMonth + firstDay) + 1;
            dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
            // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
          } else {
            // dates in currrent month
            date = i - firstDay + 1;
            dateString = this.#getDateString(this.#year, this.#month, date);
            // dateString2 = this.#getDateString(this.#year, this.#month, date);
            dateEL.classList.add('currentMonth');
            // dateEL2.classList.add('currentMonth');
            if (date === this.#date) {
              // dateEL.classList.add('selected');
              // dateEL2.classList.add('selected');
            }
          }

          dateEL.textContent = date;
          dateEL.title = dateString;
          datesEL.append(dateEL);
          if (i == op) {
            this.#b1 = dateEL.title;
          }
          if (i == op + 1) this.#b2 = dateEL.title;
          if (i == op + 2) this.#b3 = dateEL.title;
          if (i == op + 3) this.#b4 = dateEL.title;
          if (i == op + 4) this.#b5 = dateEL.title;
          if (i == op + 5) this.#b6 = dateEL.title;
          if (i == op + 6) this.#b7 = dateEL.title;

        }
        const datesEL3 = this.element.querySelector('.shijians');
        datesEL3.innerHTML = '';
        // var n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00","14:00 - 16:00","16:00 - 18:00","18:00 - 20:00","20:00 - 22:00"];
        var n = this.#n;
        for (let i = 0; i <= 6; i++) {

          for (let j = 0; j <= 7; j++) {
            // const dateEL3 = document.createElement('input');
            // dateEL3.classList.add('shijian');

            let dateString;
            let dateString2;

            if (j == 0) {
              const dateEL3 = document.createElement('button');
              // document.getElementById("dateEL3").disabled=true;
              // dateEL3.style.pointerEvents='none';
              // dateEL3.classList.add('shijian');
              dateEL3.classList.add('biaoq');
              dateEL3.textContent = n[i];
              datesEL3.append(dateEL3);
            }
            if (j == 1) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b1;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              if (this.#thisname == dateEL3.name && this.#thistitle == dateEL3.title) dateEL3.textContent = this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 2) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b2;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              if (this.#thisname == dateEL3.name && this.#thistitle == dateEL3.title) dateEL3.textContent = this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 3) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b3;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              if (this.#thisname == dateEL3.name && this.#thistitle == dateEL3.title) dateEL3.textContent = this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 4) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b4;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              if (this.#thisname == dateEL3.name && this.#thistitle == dateEL3.title) dateEL3.textContent = this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 5) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b5;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              if (this.#thisname == dateEL3.name && this.#thistitle == dateEL3.title) dateEL3.textContent = this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
            if (j == 6) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b6;
              dateEL3.textContent = ' ';
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              if (this.#thisname == dateEL3.name && this.#thistitle == dateEL3.title) dateEL3.textContent = this.#thisxiugai;
              datesEL3.append(dateEL3);

            }
            if (j == 7) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b7;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              if (this.#thisname == dateEL3.name && this.#thistitle == dateEL3.title) dateEL3.textContent = this.#thisxiugai;
              datesEL3.append(dateEL3);
            }
          }

        }
      }
    })
    this.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('shijian')) {
        document.getElementById('acccc').value = e.target.textContent;

        document.getElementById('zhezhao3').style.display = 'block';
        this.#thisname = e.target.name;
        this.#thistitle = e.target.title;
        console.log("title" + e.target.title);
        console.log("name" + e.target.name);

      }
    })

    this.element.addEventListener('click', (e) => {

      if (e.target.classList.contains('date2')) {
        console.log(e.target.title);
        const params = e.target.title.split('-').map(str => parseInt(str, 10));
        this.#setDate(...params, false);
        this.#key = parseInt(e.target.id);
        let strb = e.target.textContent;
        let s = strb.split("").reverse().join("");
        let ss = s[1];
        let x = 0;
        if (s[2] != ' ') {
          x = parseInt(ss) + 10 * parseInt(s[2]);
        }
        else { x = parseInt(ss); }
        // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
        console.log((parseInt(e.target.id)));
        console.log(x);
        // e.target.classList.add('selected');
        const datesEL = this.element.querySelector('.dates');
        // const datesEL2 = this.element.querySelector('.dates2');
        // const datesEL3 = this.element.querySelector('.dates3');
        // const datesEL = this.element.querySelector('.dates2');
        // if (!reRender) {
        //   const dateELs = datesEL.querySelectorAll('.date');
        //   // const dateELs2 = datesEL2.querySelectorAll('.date2');
        //   // const dateELs3 = datesEL3.querySelectorAll('.date3');
        //   for (const el of dateELs) {
        //     el.classList.toggle('selected', el.title === this.#dateString);
        //   }
        //   // for (const el of dateELs2) {
        //   //   el.classList.toggle('selected', el.title === this.#dateString);
        //   // }
        //   // for (const el of dateELs3) {
        //   //   el.classList.toggle('selected', el.title === this.#dateString);
        //   // }
        //   return;
        // }
        // var str1='';
        // var str2='';
        // datesEL.innerHTML = '';
        // datesEL2.innerHTML = '';
        // const datesEL = this.element.querySelector('.dates');
        datesEL.innerHTML = '';
        // datesEL2.innerHTML = '';

        // datesEL3.innerHTML = '';

        const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
        const firstDay = this.#getDayOfFirstDate();
        const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
        const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

        let k = 0;

        k = this.#key;
        if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
        else if (k == 5 && this.#flag == 0) { k = k + 1; }
        if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
        // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
        var op = 1 + 7 * k;

        for (let i = op; i <= op + 6; i++) {
          // console.log(k);
          const dateEL = document.createElement('button');
          // const dateEL2 = document.createElement('button');
          dateEL.classList.add('date');
          // dateEL2.classList.add('date2');
          let dateString;
          // let dateString2;
          let date;
          if (firstDay > 1 && i < firstDay) {
            // dates in last month
            date = dayCountInLastMonth - (firstDay - i) + 1;
            dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
            // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
          } else if (i >= dayCountInCurrentMonth + firstDay) {
            // dates in next month
            date = i - (dayCountInCurrentMonth + firstDay) + 1;
            dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
            // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
          } else {
            // dates in currrent month
            date = i - firstDay + 1;
            dateString = this.#getDateString(this.#year, this.#month, date);
            // dateString2 = this.#getDateString(this.#year, this.#month, date);
            dateEL.classList.add('currentMonth');
            // dateEL2.classList.add('currentMonth');
            if (date === this.#date) {
              // dateEL.classList.add('selected');
              // dateEL2.classList.add('selected');
            }
          }

          dateEL.textContent = date;
          dateEL.title = dateString;
          datesEL.append(dateEL);
          if (i == op) {
            this.#b1 = dateEL.title;
          }
          if (i == op + 1) this.#b2 = dateEL.title;
          if (i == op + 2) this.#b3 = dateEL.title;
          if (i == op + 3) this.#b4 = dateEL.title;
          if (i == op + 4) this.#b5 = dateEL.title;
          if (i == op + 5) this.#b6 = dateEL.title;
          if (i == op + 6) this.#b7 = dateEL.title;

        }
        const datesEL3 = this.element.querySelector('.shijians');
        datesEL3.innerHTML = '';
        // var n = ["8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00","14:00 - 16:00","16:00 - 18:00","18:00 - 20:00","20:00 - 22:00"];
        var n = this.#n;
        for (let i = 0; i <= 6; i++) {

          for (let j = 0; j <= 7; j++) {
            // const dateEL3 = document.createElement('input');
            // dateEL3.classList.add('shijian');

            let dateString;
            let dateString2;

            if (j == 0) {
              const dateEL3 = document.createElement('button');
              // document.getElementById("dateEL3").disabled=true;
              // dateEL3.style.pointerEvents='none';
              // dateEL3.classList.add('shijian');
              dateEL3.classList.add('biaoq');
              dateEL3.textContent = n[i];
              datesEL3.append(dateEL3);
            }
            if (j == 1) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b1;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              datesEL3.append(dateEL3);
            }
            if (j == 2) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b2;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              datesEL3.append(dateEL3);
            }
            if (j == 3) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b3;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              datesEL3.append(dateEL3);
            }
            if (j == 4) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b4;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              datesEL3.append(dateEL3);
            }
            if (j == 5) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b5;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              datesEL3.append(dateEL3);
            }
            if (j == 6) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b6;
              dateEL3.textContent = ' ';
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              datesEL3.append(dateEL3);

            }
            if (j == 7) {
              const dateEL3 = document.createElement('button');
              dateEL3.classList.add('shijian');
              dateEL3.name = n[i];
              dateEL3.title = this.#b7;
              dateEL3.textContent = " ";
              if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
              datesEL3.append(dateEL3);
            }
          }

        }
      }
      if (e.target.classList.contains('date')) {
        console.log(e.target.title);
        const params = e.target.title.split('-').map(str => parseInt(str, 10));
        this.#setDate(...params, false);
      }
      if (e.target.classList.contains('shijian')) {
        console.log(e.target.title);
        // const params = e.target.title.split('-').map(str => parseInt(str, 10));
        // this.#setDate(...params, false);
        // const params = e.target.title.split('-').map(str => parseInt(str, 10));
        // this.#setDate(...params, false);
      }
      console.log(this.#b1 + "b1" + typeof (this.#b1));
      console.log(this.#b2 + "b2" + typeof (this.#b2));
      console.log(this.#b3 + "b3" + typeof (this.#b3));
      console.log(this.#b4 + "b4" + typeof (this.#b4));
      console.log(this.#b5 + "b5" + typeof (this.#b5));
      console.log(this.#b6 + "b6" + typeof (this.#b6));
      console.log(this.#b7 + "b7" + typeof (this.#b7));
    });
  }

  #setDate = (year, month, date, reRenderDate = true) => {
    this.#year = year;
    this.#month = month;
    this.#date = date;
    // the only place to do renders
    this.#renderCurrentDate();
    this.#renderDates(reRenderDate);
  }

  #renderCurrentDate = () => {
    const currentDateEL = this.element.querySelector('.currentDate');
    this.#dateString = this.#getDateString(this.#year, this.#month, this.#date);
    currentDateEL.textContent = this.#dateString;
  }

  #getLastMonthInfo = () => {
    let lastMonth = this.#month - 1;
    let yearOfLastMonth = this.#year;
    if (lastMonth === 0) {
      lastMonth = 12;
      yearOfLastMonth -= 1;
    }
    let dayCountInLastMonth = this.#getDayCount(yearOfLastMonth, lastMonth);

    return {
      lastMonth,
      yearOfLastMonth,
      dayCountInLastMonth
    }
  }

  #getNextMonthInfo = () => {
    let nextMonth = this.#month + 1;
    let yearOfNextMonth = this.#year;
    if (nextMonth === 13) {
      nextMonth = 1;
      yearOfNextMonth += 1;
    }
    let dayCountInNextMonth = this.#getDayCount(yearOfNextMonth, nextMonth);

    return {
      nextMonth,
      yearOfNextMonth,
      dayCountInNextMonth
    }
  }

  #getDateString = (year, month, date) => {
    if (date) {
      return `${year}-${month}-${date}`;
    } else {
      return `${year}-${month}`;
    }
    //return `${year}-${month}`;
  }

  #renderDates = (reRender) => {
    // DOM
    const datesEL = this.element.querySelector('.dates');
    const datesEL2 = this.element.querySelector('.dates2');
    const datesEL3 = this.element.querySelector('.shijians');
    // const datesEL = this.element.querySelector('.dates2');
    if (!reRender) {
      const dateELs = datesEL.querySelectorAll('.date');
      const dateELs2 = datesEL2.querySelectorAll('.date2');
      const dateELs3 = datesEL3.querySelectorAll('.shijian');
      for (const el of dateELs) {
        el.classList.toggle('selected', el.title === this.#dateString);
      }

      // for (const el of dateELs2) {
      //   let x=0;
      //   for(const eb of dateELs){
      //       if(this.#dateString === eb.title)x=1;
      //   }
      //   el.classList.toggle('selected', x === 1 );
      // }

      for (const el of dateELs2) {
        el.classList.toggle('selected', el.title === this.#dateString);
      }
      for (const el of dateELs3) {
        el.classList.toggle('selected', el.title === this.#dateString);
      }
      return;
    }
    var str1 = '';
    var str2 = '';
    datesEL.innerHTML = '';
    datesEL2.innerHTML = '';

    datesEL3.innerHTML = '';
    const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
    const firstDay = this.#getDayOfFirstDate();
    const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
    const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();
    var ff = 0;
    for (let i = 1; i <= 42; i++) {
      const dateEL = document.createElement('button');
      const dateEL2 = document.createElement('button');
      dateEL.classList.add('date');
      dateEL2.classList.add('date2');
      let dateString;
      let dateString2;
      let date;

      if (firstDay > 1 && i < firstDay) {
        // dates in last month
        date = dayCountInLastMonth - (firstDay - i) + 1;
        dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
        dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
      } else if (i >= dayCountInCurrentMonth + firstDay) {
        // dates in next month
        date = i - (dayCountInCurrentMonth + firstDay) + 1;
        dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
        dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
      } else {
        // dates in currrent month
        date = i - firstDay + 1;
        dateString = this.#getDateString(this.#year, this.#month, date);
        dateString2 = this.#getDateString(this.#year, this.#month, date);
        dateEL.classList.add('currentMonth');
        dateEL2.classList.add('currentMonth');
        if (date === this.#date) {
          dateEL.classList.add('selected');
          dateEL2.classList.add('selected');
          // 
        }

        // if(this.#date-date<=6&&this.#date>=date){
        //   
        //   console.log(this.#date-date);
        // } 
      }

      //  dateEL.textContent = date;

      //  dateEL.textContent=date;
      //  dateEL.title = dateString;
      //  datesEL.append(dateEL); 


      if (i == 1) {
        str1 = '' + date;
        //dateEL2.title = dateString;

      }
      if (i >= 1 && i <= 7 && date === this.#date) {
        ff = 1;
      }
      if (i >= 8 && i <= 14 && date === this.#date) {
        ff = 1;
      }
      if (i >= 15 && i <= 21 && date === this.#date) {
        ff = 1;
      }
      if (i >= 22 && i <= 28 && date === this.#date) {
        ff = 1;
      }
      if (i >= 29 && i <= 35 && date === this.#date) {
        ff = 1;
      }

      if (i == 7) {
        str2 = str1 + ' - ' + date + '日';
        // document.getElementById('s1').innerHTML=str2;
        dateEL2.id = 0;
        dateEL2.textContent = str2;
        // dateEL2.innerText =date;
        dateEL2.title = dateString2;
        // dateEL2.inert =date;
        if (ff == 1) {
          dateEL2.classList.add('selected');
          ff = 0;
          this.#key = dateEL2.id;
          var strb = str2;
          var s = strb.split("").reverse().join("");
          var ss = s[1];
          var x = 0;
          if (s[2] != ' ') {
            x = parseInt(ss) + 10 * parseInt(s[2]);
          }
          else { x = parseInt(ss); }
          // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
          // console.log((parseInt(e.target.id)));
          console.log(x);
          // e.target.classList.add('selected');
          const datesEL = this.element.querySelector('.dates');
          datesEL.innerHTML = '';
          // datesEL2.innerHTML = '';

          // datesEL3.innerHTML = '';

          const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
          const firstDay = this.#getDayOfFirstDate();
          const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
          const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

          let k = 0;

          k = this.#key;
          if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
          else if (k == 5 && this.#flag == 0) { k = k + 1; }
          if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
          // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
          var op = 1 + 7 * k;

          for (let i = op; i <= op + 6; i++) {
            // console.log(k);
            const dateEL = document.createElement('button');
            // const dateEL2 = document.createElement('button');
            dateEL.classList.add('date');
            // dateEL2.classList.add('date2');
            let dateString;
            // let dateString2;
            let date;
            if (firstDay > 1 && i < firstDay) {
              // dates in last month
              date = dayCountInLastMonth - (firstDay - i) + 1;
              dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
              // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
            } else if (i >= dayCountInCurrentMonth + firstDay) {
              // dates in next month
              date = i - (dayCountInCurrentMonth + firstDay) + 1;
              dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
              // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
            } else {
              // dates in currrent month
              date = i - firstDay + 1;
              dateString = this.#getDateString(this.#year, this.#month, date);
              // dateString2 = this.#getDateString(this.#year, this.#month, date);
              dateEL.classList.add('currentMonth');
              // dateEL2.classList.add('currentMonth');
              if (date === this.#date) {
                // dateEL.classList.add('selected');
                // dateEL2.classList.add('selected');
              }
            }

            dateEL.textContent = date;
            dateEL.title = dateString;
            datesEL.append(dateEL);
            if (i == op) {
              this.#b1 = dateEL.title;
            }
            if (i == op + 1) this.#b2 = dateEL.title;
            if (i == op + 2) this.#b3 = dateEL.title;
            if (i == op + 3) this.#b4 = dateEL.title;
            if (i == op + 4) this.#b5 = dateEL.title;
            if (i == op + 5) this.#b6 = dateEL.title;
            if (i == op + 6) this.#b7 = dateEL.title;

          }
          const datesEL3 = this.element.querySelector('.shijians');
          datesEL3.innerHTML = '';
          // var n = ["8:00-10:00", "10:00-12:00", "12:00-14:00","14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00"];
          var n = this.#n;
          for (let i = 0; i <= 6; i++) {

            for (let j = 0; j <= 7; j++) {
              // const dateEL3 = document.createElement('input');
              // dateEL3.classList.add('shijian');

              let dateString;
              let dateString2;

              if (j == 0) {
                const dateEL3 = document.createElement('button');
                // document.getElementById("dateEL3").disabled=true;
                // dateEL3.style.pointerEvents='none';
                // dateEL3.classList.add('shijian');
                dateEL3.classList.add('biaoq');
                dateEL3.textContent = n[i];
                datesEL3.append(dateEL3);
              }
              if (j == 1) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b1;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 2) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b2;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 3) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b3;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 4) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b4;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 5) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b5;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 6) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b6;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 7) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b7;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
            }

          }

          // if (e.target.classList.contains('date')) {
          //   console.log(e.target.title);
          //   const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   this.#setDate(...params, false);
          // }
          // if (e.target.classList.contains('shijian')) {
          //   console.log(e.target.title);
          //   // const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   // this.#setDate(...params, false);
          // }
          console.log(this.#b1 + "b1" + typeof (this.#b1));
          console.log(this.#b2 + "b2" + typeof (this.#b2));
          console.log(this.#b3 + "b3" + typeof (this.#b3));
          console.log(this.#b4 + "b4" + typeof (this.#b4));
          console.log(this.#b5 + "b5" + typeof (this.#b5));
          console.log(this.#b6 + "b6" + typeof (this.#b6));
          console.log(this.#b7 + "b7" + typeof (this.#b7));
        }
      }
      if (i == 8) {
        str1 = '' + date;
        //dateEL2.title = dateString;
      }
      if (i == 14) {
        str2 = str1 + ' - ' + date + '日';
        // document.getElementById('s2').innerHTML=str2;
        dateEL2.textContent = str2;
        dateEL2.id = 1;
        dateEL2.title = dateString2;
        if (ff == 1) {
          dateEL2.classList.add('selected');
          ff = 0;
          this.#key = dateEL2.id;
          var strb = str2;
          var s = strb.split("").reverse().join("");
          var ss = s[1];
          var x = 0;
          if (s[2] != ' ') {
            x = parseInt(ss) + 10 * parseInt(s[2]);
          }
          else { x = parseInt(ss); }
          // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
          // console.log((parseInt(e.target.id)));
          console.log(x);
          // e.target.classList.add('selected');
          const datesEL = this.element.querySelector('.dates');
          datesEL.innerHTML = '';
          // datesEL2.innerHTML = '';

          // datesEL3.innerHTML = '';

          const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
          const firstDay = this.#getDayOfFirstDate();
          const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
          const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

          let k = 0;

          k = this.#key;
          if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
          else if (k == 5 && this.#flag == 0) { k = k + 1; }
          if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
          // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
          var op = 1 + 7 * k;

          for (let i = op; i <= op + 6; i++) {
            // console.log(k);
            const dateEL = document.createElement('button');
            // const dateEL2 = document.createElement('button');
            dateEL.classList.add('date');
            // dateEL2.classList.add('date2');
            let dateString;
            // let dateString2;
            let date;
            if (firstDay > 1 && i < firstDay) {
              // dates in last month
              date = dayCountInLastMonth - (firstDay - i) + 1;
              dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
              // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
            } else if (i >= dayCountInCurrentMonth + firstDay) {
              // dates in next month
              date = i - (dayCountInCurrentMonth + firstDay) + 1;
              dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
              // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
            } else {
              // dates in currrent month
              date = i - firstDay + 1;
              dateString = this.#getDateString(this.#year, this.#month, date);
              // dateString2 = this.#getDateString(this.#year, this.#month, date);
              dateEL.classList.add('currentMonth');
              // dateEL2.classList.add('currentMonth');
              if (date === this.#date) {
                // dateEL.classList.add('selected');
                // dateEL2.classList.add('selected');
              }
            }

            dateEL.textContent = date;
            dateEL.title = dateString;
            datesEL.append(dateEL);
            if (i == op) {
              this.#b1 = dateEL.title;
            }
            if (i == op + 1) this.#b2 = dateEL.title;
            if (i == op + 2) this.#b3 = dateEL.title;
            if (i == op + 3) this.#b4 = dateEL.title;
            if (i == op + 4) this.#b5 = dateEL.title;
            if (i == op + 5) this.#b6 = dateEL.title;
            if (i == op + 6) this.#b7 = dateEL.title;

          }
          const datesEL3 = this.element.querySelector('.shijians');
          datesEL3.innerHTML = '';
          // var n = ["8:00-10:00", "10:00-12:00", "12:00-14:00","14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00"];
          var n = this.#n;
          for (let i = 0; i <= 6; i++) {

            for (let j = 0; j <= 7; j++) {
              // const dateEL3 = document.createElement('input');
              // dateEL3.classList.add('shijian');

              let dateString;
              let dateString2;

              if (j == 0) {
                const dateEL3 = document.createElement('button');
                // document.getElementById("dateEL3").disabled=true;
                // dateEL3.style.pointerEvents='none';
                // dateEL3.classList.add('shijian');
                dateEL3.classList.add('biaoq');
                dateEL3.textContent = n[i];
                datesEL3.append(dateEL3);
              }
              if (j == 1) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b1;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 2) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b2;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 3) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b3;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 4) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b4;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 5) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b5;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 6) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b6;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 7) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b7;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
            }

          }

          // if (e.target.classList.contains('date')) {
          //   console.log(e.target.title);
          //   const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   this.#setDate(...params, false);
          // }
          // if (e.target.classList.contains('shijian')) {
          //   console.log(e.target.title);
          //   // const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   // this.#setDate(...params, false);
          // }
          console.log(this.#b1 + "b1" + typeof (this.#b1));
          console.log(this.#b2 + "b2" + typeof (this.#b2));
          console.log(this.#b3 + "b3" + typeof (this.#b3));
          console.log(this.#b4 + "b4" + typeof (this.#b4));
          console.log(this.#b5 + "b5" + typeof (this.#b5));
          console.log(this.#b6 + "b6" + typeof (this.#b6));
          console.log(this.#b7 + "b7" + typeof (this.#b7));


        }
        // dateEL2.innerText =date;
        // dateEL2.inert =date;
      }
      if (i == 15) {
        str1 = '' + date;
        //dateEL2.title = dateString;
      }
      if (i == 21) {
        str2 = str1 + ' - ' + date + '日';
        // document.getElementById('s3').innerHTML=str2;
        dateEL2.textContent = str2;
        dateEL2.id = 2;
        dateEL2.title = dateString2;
        // dateEL2.innerText =date;
        // dateEL2.inert =date;
        if (ff == 1) {
          dateEL2.classList.add('selected');
          ff = 0;
          this.#key = dateEL2.id;
          var strb = str2;
          var s = strb.split("").reverse().join("");
          var ss = s[1];
          var x = 0;
          if (s[2] != ' ') {
            x = parseInt(ss) + 10 * parseInt(s[2]);
          }
          else { x = parseInt(ss); }
          // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
          // console.log((parseInt(e.target.id)));
          console.log(x);
          // e.target.classList.add('selected');
          const datesEL = this.element.querySelector('.dates');
          datesEL.innerHTML = '';
          // datesEL2.innerHTML = '';

          // datesEL3.innerHTML = '';

          const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
          const firstDay = this.#getDayOfFirstDate();
          const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
          const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

          let k = 0;

          k = this.#key;
          if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
          else if (k == 5 && this.#flag == 0) { k = k + 1; }
          if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
          // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
          var op = 1 + 7 * k;

          for (let i = op; i <= op + 6; i++) {
            // console.log(k);
            const dateEL = document.createElement('button');
            // const dateEL2 = document.createElement('button');
            dateEL.classList.add('date');
            // dateEL2.classList.add('date2');
            let dateString;
            // let dateString2;
            let date;
            if (firstDay > 1 && i < firstDay) {
              // dates in last month
              date = dayCountInLastMonth - (firstDay - i) + 1;
              dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
              // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
            } else if (i >= dayCountInCurrentMonth + firstDay) {
              // dates in next month
              date = i - (dayCountInCurrentMonth + firstDay) + 1;
              dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
              // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
            } else {
              // dates in currrent month
              date = i - firstDay + 1;
              dateString = this.#getDateString(this.#year, this.#month, date);
              // dateString2 = this.#getDateString(this.#year, this.#month, date);
              dateEL.classList.add('currentMonth');
              // dateEL2.classList.add('currentMonth');
              if (date === this.#date) {
                // dateEL.classList.add('selected');
                // dateEL2.classList.add('selected');
              }
            }

            dateEL.textContent = date;
            dateEL.title = dateString;
            datesEL.append(dateEL);
            if (i == op) {
              this.#b1 = dateEL.title;
            }
            if (i == op + 1) this.#b2 = dateEL.title;
            if (i == op + 2) this.#b3 = dateEL.title;
            if (i == op + 3) this.#b4 = dateEL.title;
            if (i == op + 4) this.#b5 = dateEL.title;
            if (i == op + 5) this.#b6 = dateEL.title;
            if (i == op + 6) this.#b7 = dateEL.title;

          }
          const datesEL3 = this.element.querySelector('.shijians');
          datesEL3.innerHTML = '';
          // var n = ["8:00-10:00", "10:00-12:00", "12:00-14:00","14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00"];
          var n = this.#n;
          for (let i = 0; i <= 6; i++) {

            for (let j = 0; j <= 7; j++) {
              // const dateEL3 = document.createElement('input');
              // dateEL3.classList.add('shijian');

              let dateString;
              let dateString2;

              if (j == 0) {
                const dateEL3 = document.createElement('button');
                // document.getElementById("dateEL3").disabled=true;
                // dateEL3.style.pointerEvents='none';
                // dateEL3.classList.add('shijian');
                dateEL3.classList.add('biaoq');
                dateEL3.textContent = n[i];
                datesEL3.append(dateEL3);
              }
              if (j == 1) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b1;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 2) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b2;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 3) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b3;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 4) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b4;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 5) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b5;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 6) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b6;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 7) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b7;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
            }

          }

          // if (e.target.classList.contains('date')) {
          //   console.log(e.target.title);
          //   const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   this.#setDate(...params, false);
          // }
          // if (e.target.classList.contains('shijian')) {
          //   console.log(e.target.title);
          //   // const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   // this.#setDate(...params, false);
          // }
          console.log(this.#b1 + "b1" + typeof (this.#b1));
          console.log(this.#b2 + "b2" + typeof (this.#b2));
          console.log(this.#b3 + "b3" + typeof (this.#b3));
          console.log(this.#b4 + "b4" + typeof (this.#b4));
          console.log(this.#b5 + "b5" + typeof (this.#b5));
          console.log(this.#b6 + "b6" + typeof (this.#b6));
          console.log(this.#b7 + "b7" + typeof (this.#b7));


        }
      }
      if (i == 22) {
        str1 = '' + date;
        //dateEL2.title = dateString;
      }
      if (i == 28) {
        str2 = str1 + ' - ' + date + '日';
        // document.getElementById('s4').innerHTML=str2;
        dateEL2.textContent = str2;
        dateEL2.id = 3;
        dateEL2.title = dateString2;
        // dateEL2.innerText =date;
        // dateEL2.inert =date;
        if (ff == 1) {
          dateEL2.classList.add('selected');
          ff = 0;
          this.#key = dateEL2.id;
          var strb = str2;
          var s = strb.split("").reverse().join("");
          var ss = s[1];
          var x = 0;
          if (s[2] != ' ') {
            x = parseInt(ss) + 10 * parseInt(s[2]);
          }
          else { x = parseInt(ss); }
          // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
          // console.log((parseInt(e.target.id)));
          console.log(x);
          // e.target.classList.add('selected');
          const datesEL = this.element.querySelector('.dates');
          datesEL.innerHTML = '';
          // datesEL2.innerHTML = '';

          // datesEL3.innerHTML = '';

          const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
          const firstDay = this.#getDayOfFirstDate();
          const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
          const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

          let k = 0;

          k = this.#key;
          if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
          else if (k == 5 && this.#flag == 0) { k = k + 1; }
          if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
          // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
          var op = 1 + 7 * k;

          for (let i = op; i <= op + 6; i++) {
            // console.log(k);
            const dateEL = document.createElement('button');
            // const dateEL2 = document.createElement('button');
            dateEL.classList.add('date');
            // dateEL2.classList.add('date2');
            let dateString;
            // let dateString2;
            let date;
            if (firstDay > 1 && i < firstDay) {
              // dates in last month
              date = dayCountInLastMonth - (firstDay - i) + 1;
              dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
              // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
            } else if (i >= dayCountInCurrentMonth + firstDay) {
              // dates in next month
              date = i - (dayCountInCurrentMonth + firstDay) + 1;
              dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
              // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
            } else {
              // dates in currrent month
              date = i - firstDay + 1;
              dateString = this.#getDateString(this.#year, this.#month, date);
              // dateString2 = this.#getDateString(this.#year, this.#month, date);
              dateEL.classList.add('currentMonth');
              // dateEL2.classList.add('currentMonth');
              if (date === this.#date) {
                // dateEL.classList.add('selected');
                // dateEL2.classList.add('selected');
              }
            }

            dateEL.textContent = date;
            dateEL.title = dateString;
            datesEL.append(dateEL);
            if (i == op) {
              this.#b1 = dateEL.title;
            }
            if (i == op + 1) this.#b2 = dateEL.title;
            if (i == op + 2) this.#b3 = dateEL.title;
            if (i == op + 3) this.#b4 = dateEL.title;
            if (i == op + 4) this.#b5 = dateEL.title;
            if (i == op + 5) this.#b6 = dateEL.title;
            if (i == op + 6) this.#b7 = dateEL.title;

          }
          const datesEL3 = this.element.querySelector('.shijians');
          datesEL3.innerHTML = '';
          // var n = ["8:00-10:00", "10:00-12:00", "12:00-14:00","14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00"];
          var n = this.#n;
          for (let i = 0; i <= 6; i++) {

            for (let j = 0; j <= 7; j++) {
              // const dateEL3 = document.createElement('input');
              // dateEL3.classList.add('shijian');

              let dateString;
              let dateString2;

              if (j == 0) {
                const dateEL3 = document.createElement('button');
                // document.getElementById("dateEL3").disabled=true;
                // dateEL3.style.pointerEvents='none';
                // dateEL3.classList.add('shijian');
                dateEL3.classList.add('biaoq');
                dateEL3.textContent = n[i];
                datesEL3.append(dateEL3);
              }
              if (j == 1) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b1;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 2) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b2;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 3) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b3;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 4) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b4;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 5) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b5;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 6) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b6;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
              if (j == 7) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b7;
                if (this.#dateString == this.#ttt) dateEL3.textContent = this.#shi[i][j - 1];
                datesEL3.append(dateEL3);
              }
            }

          }

          // if (e.target.classList.contains('date')) {
          //   console.log(e.target.title);
          //   const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   this.#setDate(...params, false);
          // }
          // if (e.target.classList.contains('shijian')) {
          //   console.log(e.target.title);
          //   // const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   // this.#setDate(...params, false);
          // }
          console.log(this.#b1 + "b1" + typeof (this.#b1));
          console.log(this.#b2 + "b2" + typeof (this.#b2));
          console.log(this.#b3 + "b3" + typeof (this.#b3));
          console.log(this.#b4 + "b4" + typeof (this.#b4));
          console.log(this.#b5 + "b5" + typeof (this.#b5));
          console.log(this.#b6 + "b6" + typeof (this.#b6));
          console.log(this.#b7 + "b7" + typeof (this.#b7));


        }
      }
      if (i == 29) {
        str1 = '' + date;
        //dateEL2.title = dateString;
      }
      if (i == 35) {
        str2 = str1 + ' - ' + date + '日';
        // document.getElementById('s5').innerHTML=str2;
        dateEL2.textContent = str2;
        dateEL2.id = 4;
        // dateEL2.inert =date;
        dateEL2.title = dateString2;
        // dateEL2.innerText =date;
        if (ff == 1) {
          dateEL2.classList.add('selected');
          ff = 0;
          this.#key = dateEL2.id;
          var strb = str2;
          var s = strb.split("").reverse().join("");
          var ss = s[1];
          var x = 0;
          if (s[2] != ' ') {
            x = parseInt(ss) + 10 * parseInt(s[2]);
          }
          else { x = parseInt(ss); }
          // parseInt(this.#getDayCount(this.#year, this.#month))-parseInt(e.target.textContent);
          // console.log((parseInt(e.target.id)));
          console.log(x);
          // e.target.classList.add('selected');
          const datesEL = this.element.querySelector('.dates');
          datesEL.innerHTML = '';
          // datesEL2.innerHTML = '';

          // datesEL3.innerHTML = '';

          const dayCountInCurrentMonth = this.#getDayCount(this.#year, this.#month);
          const firstDay = this.#getDayOfFirstDate();
          const { lastMonth, yearOfLastMonth, dayCountInLastMonth } = this.#getLastMonthInfo();
          const { nextMonth, yearOfNextMonth } = this.#getNextMonthInfo();

          let k = 0;

          k = this.#key;
          if (k == 5 && this.#flag == 1) { k = k - 4; this.#flag = 0; }
          else if (k == 5 && this.#flag == 0) { k = k + 1; }
          if (k == 4 && x < 20) { k = k - 4; this.#flag = 1; }
          // if(k==5)k=k-4;if(k==4&&x<20)k=k-3;else if(k==4)k=k-4;
          var op = 1 + 7 * k;

          for (let i = op; i <= op + 6; i++) {
            // console.log(k);
            const dateEL = document.createElement('button');
            // const dateEL2 = document.createElement('button');
            dateEL.classList.add('date');
            // dateEL2.classList.add('date2');
            let dateString;
            // let dateString2;
            let date;
            if (firstDay > 1 && i < firstDay) {
              // dates in last month
              date = dayCountInLastMonth - (firstDay - i) + 1;
              dateString = this.#getDateString(yearOfLastMonth, lastMonth, date);
              // dateString2 = this.#getDateString(yearOfLastMonth, lastMonth, date);
            } else if (i >= dayCountInCurrentMonth + firstDay) {
              // dates in next month
              date = i - (dayCountInCurrentMonth + firstDay) + 1;
              dateString = this.#getDateString(yearOfNextMonth, nextMonth, date);
              // dateString2 = this.#getDateString(yearOfNextMonth, nextMonth, date);
            } else {
              // dates in currrent month
              date = i - firstDay + 1;
              dateString = this.#getDateString(this.#year, this.#month, date);
              // dateString2 = this.#getDateString(this.#year, this.#month, date);
              dateEL.classList.add('currentMonth');
              // dateEL2.classList.add('currentMonth');
              if (date === this.#date) {
                // dateEL.classList.add('selected');
                // dateEL2.classList.add('selected');
              }
            }

            dateEL.textContent = date;
            dateEL.title = dateString;
            datesEL.append(dateEL);
            if (i == op) {
              this.#b1 = dateEL.title;
            }
            if (i == op + 1) this.#b2 = dateEL.title;
            if (i == op + 2) this.#b3 = dateEL.title;
            if (i == op + 3) this.#b4 = dateEL.title;
            if (i == op + 4) this.#b5 = dateEL.title;
            if (i == op + 5) this.#b6 = dateEL.title;
            if (i == op + 6) this.#b7 = dateEL.title;

          }
          const datesEL3 = this.element.querySelector('.shijians');
          datesEL3.innerHTML = '';
          // var n = ["8:00-10:00", "10:00-12:00", "12:00-14:00","14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00"];
          var n = this.#n;
          for (let i = 0; i <= 6; i++) {

            for (let j = 0; j <= 7; j++) {
              // const dateEL3 = document.createElement('input');
              // dateEL3.classList.add('shijian');

              let dateString;
              let dateString2;

              if (j == 0) {
                const dateEL3 = document.createElement('button');
                // document.getElementById("dateEL3").disabled=true;
                // dateEL3.style.pointerEvents='none';
                // dateEL3.classList.add('shijian');
                dateEL3.classList.add('biaoq');
                dateEL3.textContent = n[i];
                datesEL3.append(dateEL3);
              }
              if (j == 1) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b1;
                // dateEL3.textContent=shi[i][j-1];
                datesEL3.append(dateEL3);
              }
              if (j == 2) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b2;
                // dateEL3.textContent=shi[i][j-1];
                datesEL3.append(dateEL3);
              }
              if (j == 3) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b3;
                // dateEL3.textContent=shi[i][j-1];
                datesEL3.append(dateEL3);
              }
              if (j == 4) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b4;
                // dateEL3.textContent=shi[i][j-1];
                datesEL3.append(dateEL3);
              }
              if (j == 5) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b5;
                // dateEL3.textContent=shi[i][j-1];
                datesEL3.append(dateEL3);
              }
              if (j == 6) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b6;
                // dateEL3.textContent=shi[i][j-1];
                datesEL3.append(dateEL3);
              }
              if (j == 7) {
                const dateEL3 = document.createElement('button');
                dateEL3.classList.add('shijian');
                dateEL3.name = n[i];
                dateEL3.title = this.#b7;
                // dateEL3.textContent=shi[i][j-1];
                datesEL3.append(dateEL3);
              }

            }

          }

          // if (e.target.classList.contains('date')) {
          //   console.log(e.target.title);
          //   const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   this.#setDate(...params, false);
          // }
          // if (e.target.classList.contains('shijian')) {
          //   console.log(e.target.title);
          //   // const params = e.target.title.split('-').map(str => parseInt(str, 10));
          //   // this.#setDate(...params, false);
          // }
          console.log(this.#b1 + "b1" + typeof (this.#b1));
          console.log(this.#b2 + "b2" + typeof (this.#b2));
          console.log(this.#b3 + "b3" + typeof (this.#b3));
          console.log(this.#b4 + "b4" + typeof (this.#b4));
          console.log(this.#b5 + "b5" + typeof (this.#b5));
          console.log(this.#b6 + "b6" + typeof (this.#b6));
          console.log(this.#b7 + "b7" + typeof (this.#b7));


        }
      }
      if (i == 36) {
        str1 = '' + date;
        //dateEL2.title = dateString;
      }
      if (i == 42) {
        str2 = str1 + ' - ' + date + '日';
        // document.getElementById('s6').innerHTML=str2;
        dateEL2.textContent = str2;
        dateEL2.id = 5;
        dateEL2.title = dateString2;
        // dateEL2.innerText =date;
        // dateEL2.inert =date;
      }

      // dateEL2.title = dateString2;

      if (i == 7 || i == 14 || i == 21 || i == 28 || i == 35) datesEL2.append(dateEL2);


      // for(let j = 1; j <=63; j++) {
      // const dateEL3 = document.createElement('button');
      // dateEL3.classList.add('date3');
      // let dateString;
      // let date;
      // dateEL3.textContent=date;
      // dateEL3.title = dateString;
      // datesEL3.append(dateEL3); 
      // if(j<=7){
      //   dateEL3.title = dateString2+' 9:00';
      // }
      // }



    }
    // var n = ["8:00-10:00", "10:00-12:00", "12:00-14:00","14:00-16:00","16:00-18:00","18:00-20:00","20:00-22:00"];
    var n = this.#n;
    // for(let i=1;i<=7;i++){

    //   for(let j=1;j<=7;j++){
    //     const dateEL3 = document.createElement('button');
    //     dateEL3.classList.add('shijian');

    //     let dateString;
    //     let dateString2;
    //     let k=" ";
    //     k=this.#b1;
    //     dateEL3.textContent=n[i-1];
    //     if(j==1){
    //       dateEL3.title = k;
    //       datesEL3.append(dateEL3);
    //     }
    //     if(j==2){
    //       dateEL3.title=this.#b2;
    //       datesEL3.append(dateEL3);
    //     }
    //     if(j==3){
    //       dateEL3.title=this.#b3;
    //       datesEL3.append(dateEL3);
    //     }
    //     if(j==4){
    //       dateEL3.title=this.#b4;
    //       datesEL3.append(dateEL3);
    //     }
    //     if(j==5){
    //       dateEL3.title=this.#b5;
    //       datesEL3.append(dateEL3);
    //     }
    //     if(j==6){
    //       dateEL3.title=this.#b6;
    //       datesEL3.append(dateEL3);
    //     }
    //     if(j==7){
    //       dateEL3.title=this.#b7;
    //       datesEL3.append(dateEL3);
    //     }
    //   }

    // }
    //  console.log(this.#b1+"b1"+typeof(this.#b1));
    //  console.log(this.#b2+"b2"+typeof(this.#b2));
    //  console.log(this.#b3+"b3"+typeof(this.#b3));
    //  console.log(this.#b4+"b4"+typeof(this.#b4));
    //  console.log(this.#b5+"b5"+typeof(this.#b5));
    //  console.log(this.#b6+"b6"+typeof(this.#b6));
    //  console.log(this.#b7+"b7"+typeof(this.#b7));
  }

  /**
   * Get day count with year, month
   * @param {number} year year number
   * @param {number} month month number that starts from 1
   * @returns 
   */
  #getDayCount = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  #getDayOfFirstDate = () => {
    let day = new Date(this.#year, this.#month - 1, 1).getDay();
    return day === 0 ? 7 : day;
  }

}


window.onload = function () {
  document.getElementById("zhineng").onclick = function () {
    document.getElementById("biao1").style.display = "none";
  }
}

