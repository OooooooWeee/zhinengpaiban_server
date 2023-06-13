function oo1(){
   
    var dian =document.getElementById('dian1')
    for(i=0;i<dian.options.length;i++){
        if(dian.options[i].selected){
            diannum=dian.options[i].firstChild.nodeValue;
            // find3=parseInt(xx3.split("").reverse().join(""))
            console.log(diannum)
        }
    }
    var gz =document.getElementById('gz1')
    for(i=0;i<gz.options.length;i++){
        if(gz.options[i].selected){
            gznum=gz.options[i].firstChild.nodeValue;
            // find3=parseInt(xx3.split("").reverse().join(""))
            console.log(gznum)
        }
    }
    let a1 =document.getElementById("a1").value
    console.log(a1)
    let a2 =document.getElementById("a2").value
    console.log(a2)
    var a3 =document.getElementById('a3')
    for(i=0;i<a3.options.length;i++){
        if(a3.options[i].selected){
            a3_=a3.options[i].firstChild.nodeValue;
            // find3=parseInt(xx3.split("").reverse().join(""))
            console.log(a3_)
        }
    }

    let b1 =document.getElementById("b1").value
    console.log(b1)
    let b2 =document.getElementById("b2").value
    console.log(b2)
    var b3 =document.getElementById('b3')
    for(i=0;i<b3.options.length;i++){
        if(b3.options[i].selected){
            b3_=b3.options[i].firstChild.nodeValue;
            // find3=parseInt(xx3.split("").reverse().join(""))
            console.log(b3_)
        }
    }

    let c1 =document.getElementById("c1").value
    console.log(c1)
    let c2 =document.getElementById("c2").value
    console.log(c2)
    let c22 =document.getElementById("c22").value
    console.log(c22)
    var c3 =document.getElementById('c3')
    for(i=0;i<c3.options.length;i++){
        if(c3.options[i].selected){
            c3_=c3.options[i].firstChild.nodeValue;
            // find3=parseInt(xx3.split("").reverse().join(""))
            console.log(c3_)
        }
    }
      
}