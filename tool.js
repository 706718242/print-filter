var searchText = ["1t3", "1t4", "2t3","2t4","3t3","3t4"];//23a-1-2
//var searchText = ["1t1", "1t2", "2t1","2t2","3t1","3t2","4t1"];//23a-3-4

//var searchText = ["1t3", "1t4", "2t3","2t4","3t3","3t4"];//23c-1-2
//var searchText = ["5t1", "5t2", "6t1", "6t2", "7t1", "7t5", "7t6"];//23b-3-4
//var http="172.30.141.220";//23a-3-4
//var http="172.30.141.245";//23b-3-4
var http="172.30.141.195";//23a-12

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

 document.addEventListener('keydown', (event) => {
 console.log(event.key);
 console.log(event.keyCode);

 //ctrl home
if(event.keyCode==36&&event.shiftKey){

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

 
if(event.keyCode==35&&event.shiftKey){
cr();

}

  
 //ctrl end
 //if(event.keyCode==35&&event.ctrlKey&&event.shiftKey){
 //localStorage.setItem("user", prompt ());}

 
 if(event.keyCode==80&&event.shiftKey){
  if(888==prompt("输入密码",)){
  
   var i=prompt("输入条码",);
   i=i.replace("p","");
   i=i.replace("P","");
  if(i!=null&&i[0]!=="s"&&i[0]!=="S"&&i[0]!==""&&i[0]!==" "){
   var request = new XMLHttpRequest();

    request.onload = function () {
        sendResponse({ status: request.status });
    }

    request.open('POST', "http://"+http+":9100/pstprnt", true);
    request.send("^XA ^MD //深度 ^PR //速度 ^BY1 //模块 ^FO302,12 //xy \
                 ^A0N,16,16 //Atn,x,y t条码字体 0-9 A-Z种字体 n方向 xy长宽 ^BCN,20,Y,N,N ^FD>:"
                 +i+"^FS  //条码 ~TA005 //撕纸位置 ^XZ");

}}
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
var i=[],j=[]; 
 var blc;
 if(cells.length>1)
 if("No data available in table" != cells[1].getElementsByTagName("td")[0].innerText) {
 
  for(var i =1 ;i<cells.length; i++) {

 cfd[i] = cells[i].getElementsByTagName("td")[0].innerText;
 cff(cfd[i]);

  if(c<0.9){ 
 
//table.insertRow(0).innnrHTML = cells[i].innnrHTML;
  
 // table.deleteRow(i);
  
// table.insertRow(0);
//cells[i].parentNode.insertBefore(cells[i], cells[1]);
// 将最后一行移到第二行
  // cells[i].parentNode.insertBefore(cells[i], cells[1]);
   //i++;
  // blc=parseInt(cells[1].getElementsByTagName("td")[2].innerText); 
  // console.log(blc);
    
   cells[i].style.backgroundColor = "red";
   i[i]=cells[i].innnrHTML;
   //cells[i].getElementsByTagName("td")[4].style="color:#337ab7";  //337ab7        
  }else{ cells[i].style.backgroundColor = "#ffc107"; j[i]=cells[i].innnrHTML; }
  
 }

  for(var i =1 ;i<cells.length; i++) {

 
//table.insertRow(0).innnrHTML = cells[i].innnrHTML;
  
 table.deleteRow(i);
  
 table.insertRow(-1);
   cells[i].innnrHTML=i[i];
//cells[i].parentNode.insertBefore(cells[i], cells[1]);
// 将最后一行移到第二行
  // cells[i].parentNode.insertBefore(cells[i], cells[1]);
   //i++;
  // blc=parseInt(cells[1].getElementsByTagName("td")[2].innerText); 
  
   //i[i]=cells[i].innnrHTML;
  //j[i]=cells[i].innnrHTML; 
  }
  
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

    request.open('POST', "http://"+http+":9100/pstprnt", true);
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
var max = 0;           
var min = 0;          
var index = 0;                              // 记录最终结果所在的行号  

for (var i = 1; i < cells.length; i++) {     

var col1 = Number(cells[i].getElementsByTagName("td")[3].textContent);   
var col2 = Number(cells[i].getElementsByTagName("td")[5].textContent);             
if (col1 > max) {                                                   
max = col1;         
   if(col2==1){index = i; }            
                                                             
  } 
} 

console.log("最大数量：" + cells[index].innerText);
var r1 = Number(cells[index].getElementsByTagName("td")[3].textContent);  
var r2 = Number(cells[index].getElementsByTagName("td")[4].textContent);  
var r3 = Number(cells[index].getElementsByTagName("td")[5].textContent);  
// console.log("已完成：" +(r1-r2));
var r4=(r1-r2)*r3;
 //alert("总数："+localStorage.getItem("cr") +"\n已完成：" +r4+"\n剩余：" +(localStorage.getItem("cr")-r4));
  var crr=prompt("总数："+localStorage.getItem("cr") +"\n已完成：" +r4+"\n剩余：" +(localStorage.getItem("cr")-r4)+"\n输入总数");
   if(crr!=null&&crr!=""){
localStorage.setItem("cr",crr);}
}
