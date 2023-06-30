var ln="c23b34";

var c23a12 = ["1t3", "1t4", "2t3","2t4","3t3","3t4"];//23a-1-2
var c23a34 = ["1t1", "1t2", "2t1","2t2","3t1","3t2","4t1"];//23a-3-4
var c23c12 = ["1t3", "1t4", "2t3","2t4","3t3","3t4"];//23c-1-2
var c23b34 = ["1t1", "1t2", "2t1", "2t2", "3t1", "3t5", "2t5", "2t6"];//23b-3-4

var searchText=[];
var ip=[];

//var http="172.30.141.220";//23a-3-4

// 建立到 background 页面的连接
const port = chrome.runtime.connect();

// 监听 background 页面返回的响应消息
port.onMessage.addListener(function(response){ console.log('后台消息:', response); });


var time=new Date();
var ttime=new Date();
var h=time.getHours(),m=time.getMinutes();
var th,tm;//指定时间
var second; 
var tsecond; //

window.onload = (event) => {
 
if(ln=="c23a12"){searchText=c23a12;ip="";}
if(ln=="c23a34"){searchText=c23a34;ip="";}
if(ln=="c23c12"){searchText=c23c12;ip="";}
if(ln=="c23b34"){searchText=c23b34;ip="172.30.141.245"}

 
//port.postMessage({type: 'saveData', data: {2: '321'}});
//port.postMessage({type: 'readData', data: '2'});
 
 second = parseInt((time.getTime())/1000);//获取秒数
 second=second/60;
 var date = new Date(second*60*1000);
  console.log(date);

   //if(second>localStorage.getItem("tsecond")){
  // sessionStorage.setItem("flag", "0");
//}
  localStorage.setItem("tf", second);
 
// h=time.getHours();
// m=time.getMinutes();
 
 //if(h<7&&m<50){

   //th=0;
  
  //sessionStorage.setItem("flag", "0");
 //}
   var date3 = new Date(localStorage.getItem("st")*60*1000);
  console.log("开始"+date3);
  var date1 = new Date(localStorage.getItem("ts")*60*1000);
console.log("结束"+date1);
 console.log("剩余"+parseInt((date1-date)/1000/60)+"分钟");
if(sessionStorage.getItem("flag")=="1"){ 
if(second>localStorage.getItem("ts")){sessionStorage.setItem("flag", "0");} 
 co(); 
 cf();
 
}
 
};


var keys=[];
// keyC.push(event.key);
var tid;
 

 document.addEventListener('keydown', (event) => {
 console.log(event.key);
 console.log(event.keyCode);


if((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=65&&event.keyCode<=90)){
 //keys.push(event.key); 

 keys+=event.key.toLowerCase();
                     }
 clearTimeout(tid);
tid=setTimeout(function() {  keys=""; },1500);
  //if(event.keyCode==13&&keys=="open"){ console.log(123); }
  if(keys=="123"){  console.log(keys);}
 console.log(keys);
 //ctrl home
if(event.keyCode==13&&keys=="gl"){
keys="";
//if(localStorage.getItem("user")!=null){
if(sessionStorage.getItem("flag")!="1"){
 
 var ps;
 var pi; 
ps=localStorage.getItem("user");
//pi=  prompt ();
 //if(pi==ps){
  if(h>=7){ 
   th=(19-h); 
  }else{ 
   th=(7-h); 
  }
 if(h>=20){ 
   th=(24-h)+7; 
  }
 tsecond=second+((th*60)+(60-m)-15);
 localStorage.setItem("ts",tsecond);
 localStorage.setItem("st",second);
 var date = new Date(tsecond*60*1000);
console.log(date);
 sessionStorage.setItem("flag", "1");
 
 alert ("只显示当前区");
 co(); cf();
//}
 
}else{ sessionStorage.setItem("flag", "0"); alert ("显示所有区");}
//}else{ alert ("未设置账号");}
 }

 
if(event.keyCode==13&&keys=="js"){
keys="";
cr();

}

  
 //ctrl end
 //if(event.keyCode==35&&event.ctrlKey&&event.shiftKey){
 //localStorage.setItem("user", prompt ());}
 if(event.keyCode==13&&keys=="pb"){
  keys="";
  
   var i=prompt("输入条码",);
  
if(i!=null&&i!=""&&i!=" "){
   var request = new XMLHttpRequest();

    request.onload = function () {
        sendResponse({ status: request.status });
    }

    request.open('POST', "http://"+ip+":9100/pstprnt", true);
    request.send("^XA ^MD //深度 ^PR //速度 ^BY1 //模块 ^FO302,12 //xy \
                 ^A0N,16,16 //Atn,x,y t条码字体 0-9 A-Z种字体 n方向 xy长宽^BCN,20,N,N,N  ^FD>:"
                 +i+"^FS  //条码 ~TA005 //撕纸位置 ^XZ");
 

}
}
 if(event.keyCode==13&&keys=="pf"){
  keys="";
 
  
   var i=prompt("输入字符",);

  if(i!=null&&i!=""&&i!=" "){
   var request = new XMLHttpRequest();

    request.onload = function () {
        sendResponse({ status: request.status });
    }

    request.open('POST', "http://"+ip+":9100/pstprnt", true);

      request.send("^XA ^MD //深度 ^PR //速度 ^BY1 //模块 ^FO302,12 //xy \
                 ^A0N,20,20 //Atn,x,y t条码字体 0-9 A-Z种字体 n方向 xy长宽  ^FD"
                 +i+"^FS  //条码 ~TA005 //撕纸位置 ^XZ");

}
}

  
 
 if(event.keyCode==13&&keys=="pbf"){
  keys="";
   var i=prompt("输入条码",);
 if(i[0]=="p"&&i[0]=="P"){
   i=i.replace("p","");
   i=i.replace("P","");}
  
  if(i!=null&&i[0]!="s"&&i[0]!="S"&&i!=""&&i!==" "){
   var request = new XMLHttpRequest();

    request.onload = function () {
        sendResponse({ status: request.status });
    }

    request.open('POST', "http://"+ip+":9100/pstprnt", true);
    request.send("^XA ^MD //深度 ^PR //速度 ^BY1 //模块 ^FO302,12 //xy \
                 ^A0N,16,16 //Atn,x,y t条码字体 0-9 A-Z种字体 n方向 xy长宽^BCN,20,Y,N,N  ^FD>:"
                 +i+"^FS  //条码 ~TA005 //撕纸位置 ^XZ");
     /*  request.send("^XA ^MD //深度 ^PR //速度 ^BY1 //模块 ^FO302,12 //xy \
                 ^A0N,20,20 //Atn,x,y t条码字体 0-9 A-Z种字体 n方向 xy长宽  ^FD"
                 +i+"^FS  //条码 ~TA005 //撕纸位置 ^XZ");*/

}
}

  
 });

 
function co() {
var table = document.getElementById("OnLine");
var cells = table.getElementsByTagName("tr");


 for(var j=0;j<searchText.length;j++){
 for (var i = 1; i < cells.length; i++) {
 var Text = cells[i].getElementsByTagName("td")[0].innerText.toLowerCase(); // 将单元格文本转换为小写字母
 if (Text.indexOf(searchText[j]) != -1) {
  
  document.getElementById("OnLine").deleteRow(i);
   i--;
   
  }
 }
 }}


var cfd=[];
var a=0,b=0,c=0;
var t=0;//找到次数
function cf() {
var table = document.getElementById("OnLine");
var cells = table.getElementsByTagName("tr");
var di=[],dj=[]; 
var ii=0,jj=0;
var blc;
 if(cells.length>1)
 if("No data available in table" != cells[1].getElementsByTagName("td")[0].innerText) {
 
  for(var i =1 ;i<cells.length; i++) {

 cfd[i] = cells[i].getElementsByTagName("td")[0].innerText;
 cff(cfd[i]);

  if(c<0.9){ 
 
//table.insertRow(1);.innnrHTML = cells[i].innnrHTML;
  
 // table.deleteRow(i);
  
// table.insertRow(0);
//cells[i].parentNode.insertBefore(cells[i], cells[1]);
// 将最后一行移到第二行
  // cells[i].parentNode.insertBefore(cells[i], cells[1]);
   //i++;
  // blc=parseInt(cells[1].getElementsByTagName("td")[2].innerText); 
  // console.log(blc);
     var row = table.insertRow(0);

    row.innerHTML = cells[i+1].innerHTML;
    row.style.backgroundColor = "red"; 
    table.deleteRow(i+1);
    i--;
  // cells[i].style.backgroundColor = "red";
   
   //i[i]=cells[i].innnrHTML;
   //cells[i].getElementsByTagName("td")[4].style="color:#337ab7";  //337ab7        
  }else{ 
   cells[i].style.backgroundColor = "#ffc107"; 
       // di[ii]=cells[i].innerHTML;ii++;
       
        //var row = table.insertRow(-1).innerHTML = cells[i].innerHTML;
        //table.deleteRow(i);
        //i--;
        //j[i]=cells[i].innnrHTML;
       }
  
 }


 
  
 // for(var i =0 ;i<ii; i++) {

 
//var row=table.insertRow(-1);
  // row.innerHTML = di[i];
  // row.style.backgroundColor = "#ffc107"; 
 // console.log(di[i]);
// table.deleteRow(i);
  
 //table.insertRow(-1);
  // cells[i].innnrHTML=i[i];
//cells[i].parentNode.insertBefore(cells[i], cells[1]);
// 将最后一行移到第二行
  // cells[i].parentNode.insertBefore(cells[i], cells[1]);
   //i++;
  // blc=parseInt(cells[1].getElementsByTagName("td")[2].innerText); 
  
   //i[i]=cells[i].innnrHTML;
  //j[i]=cells[i].innnrHTML; 
 // }
  
 }
  
  
 }
 

function cff( cfff) {
 var table = document.getElementById("OnMachine");
 var cells = table.getElementsByTagName("tr");
 a=0;b=0;c=0;
 let x = Math.max(5, 10);
 var aa,bb;
 for (var i = 1; i < cells.length; i++) {
 var Text = cells[i].getElementsByTagName("td")[0].innerText; 
 if (Text.indexOf(cfff) != -1) {
   aa=parseInt(cells[i].getElementsByTagName("td")[3].innerText); 
   bb=parseInt(cells[i].getElementsByTagName("td")[4].innerText);
 
   a=aa;
   b=bb;
   c=b/a;
   console.log(a+'/'+b+'='+c);
  if(cells[i].getElementsByTagName("td")[6].innerText=="OnlineToBeMapped"){c=1;}
  //parseInt();
  }

  
 }

 
 }

function cp() {

var table = document.getElementById("OnMachine");
var cells = table.getElementsByTagName("tr");
   
 var a=prompt("输入SKID",);
 
 var b=prompt("输入站次",);
  

 for (var i = 1; i < cells.length; i++) {
 var Text = cells[i].getElementsByTagName("td")[2].innerText.toLowerCase(); // 将单元格文本转换为小写字母
 if (Text.indexOf(a.toLowerCase()) != -1) {
  
 if(cells[i].getElementsByTagName("td")[0].innerText.toLowerCase()==b.toLowerCase()){ 
  
     var request = new XMLHttpRequest();

  //  request.onload = function () {
      //  sendResponse({ status: request.status });
   // }

    request.open('POST', "http://"+ip+":9100/pstprnt", true);
    request.send("^XA ^MD //深度 ^PR //速度 ^BY1 //模块 ^FO302,12 //xy \
                 ^A0N,16,16 //Atn,x,y t条码字体 0-9 A-Z种字体 n方向 xy长宽 ^BCN,20,Y,N,N ^FD>:"
                 +cells[i].getElementsByTagName("td")[1].innerText+"^FS  //条码 ~TA005 //撕纸位置 ^XZ");
 console.log(cells[i].getElementsByTagName("td")[1].innerText);
 }else{alert("站次错误");}
  }
 }

 
 }

function cr()
{
var table = document.getElementById("OnMachine");
var cells = table.getElementsByTagName("tr");    
var table1 = document.getElementById("OnLine");
var cells1 = table1.getElementsByTagName("tr"); 
var max = localStorage.getItem("cr");           
//var use = 0;          
var index = 0;
var bl=[];
var bli=0;
var ok=0;


 for(var j=0;j<searchText.length;j++){
 for (var i = 1; i < cells.length; i++) {
 var Text = cells[i].getElementsByTagName("td")[0].innerText.toLowerCase(); // 将单元格文本转换为小写字母
 if (Text.indexOf(searchText[j]) != -1) {
  
  document.getElementById("OnMachine").deleteRow(i);
   i--;
   
  }

 }
 }

 
for (var i = 1; i < cells.length; i++){     
var col0 = Number(cells[i].getElementsByTagName("td")[3].textContent);   
var col1 = Number(cells[i].getElementsByTagName("td")[4].textContent);   
var col2 = Number(cells[i].getElementsByTagName("td")[5].textContent);   
//use = col0-col1;
if ((col1/col2 >= max)&&ok==0){                                                   
  // max = col1;         
   index = i;  
 
   ok=1;                                                  
  }
if(i<cells.length-1&&(cells[i].getElementsByTagName("td")[0].innerText)==(cells[i+1].getElementsByTagName("td")[0].innerText)){

 var num1=Number(cells[i].getElementsByTagName("td")[3].innerText);  
 var num2=Number(cells[i+1].getElementsByTagName("td")[3].innerText);
 cells[i+1].getElementsByTagName("td")[3].innerText=num1+num2;
 var num1=Number(cells[i].getElementsByTagName("td")[4].innerText);  
 var num2=Number(cells[i+1].getElementsByTagName("td")[4].innerText);
 cells[i+1].getElementsByTagName("td")[4].innerText=num1+num2;
 document.getElementById("OnMachine").deleteRow(i);i--;
}
} 




//console.log("最大数量：" + cells[index].innerText);
if(index==0){index=1;}
var r1 = Number(cells[index].getElementsByTagName("td")[3].innerText);  
var r2 = Number(cells[index].getElementsByTagName("td")[4].textContent);  
var r3 = Number(cells[index].getElementsByTagName("td")[5].textContent);  
// console.log("已完成：" +(r1-r2));
var r4=(r1-r2)/r3;
 

 dr();
for (var i = 1; i < cells.length; i++){     
 
var col1 = Number(cells[i].getElementsByTagName("td")[4].textContent);   
var col2 = Number(cells[i].getElementsByTagName("td")[5].textContent);   

 if (((col1/col2) < (max-r4))&&col1<2500){                                                   

//bl[bli]=cells[i].getElementsByTagName("td")[0].innerText+"\n";
//bli++;
  
var row=table1.insertRow(-1);
   row.innerHTML = cells[i].innerHTML;
   row.deleteCell(6);
   row.deleteCell(3);
   row.deleteCell(2);
   row.insertCell(4)
   var a = Number(row.getElementsByTagName("td")[2].textContent);   
   var b = Number(row.getElementsByTagName("td")[3].textContent);  
   row.getElementsByTagName("td")[4].innerText=parseInt(a/b);

  
  }
}
 
 var crr=prompt("总数："+max +"\n已完成：" +r4+"\n剩余：" +(max-r4)+"\n输入总数");


 if(crr!=null&&crr!=""){
localStorage.setItem("cr",crr);
 }
 co(); 
 cf();
 
}



function dr()
{  
var table = document.getElementById("OnLine");
var cells = table.getElementsByTagName("tr"); 

 for (var i = 1; i < cells.length; i++) {
  
  document.getElementById("OnLine").deleteRow(i);
 
   
  }
}
