var searchText = ["5t1", "5t2", "6t1", "6t2", "7t1", "7t5", "7t6"];



// 建立到 background 页面的连接
const port = chrome.runtime.connect();

// 监听 background 页面返回的响应消息
port.onMessage.addListener(function(response){ console.log('后台消息:', response); });



var h=new Date();
var h1,m;
var millisecond = h.getTime();
//var tt;
window.onload = (event) => {

//port.postMessage({type: 'saveData', data: {2: '321'}});
//port.postMessage({type: 'readData', data: '2'});
 
 millisecond = h.getTime();
 if(millisecond-localStorage.getItem("tf")>72000000){
   sessionStorage.setItem("flag", "0");
}
  
  localStorage.setItem("tf", millisecond);
 
 h1=h.getHours();
 m=h.getMinutes();
 
 if((h1==7||h1==19)&&m>=40){
  sessionStorage.setItem("flag", "0");
 }
 
if(sessionStorage.getItem("flag")=="1"){ co(); cf(); }
 
};

 document.addEventListener('keydown', (event) => {
 console.log(event.key);
 console.log(event.keyCode);

 //ctrl home
if(event.keyCode==36&&event.shiftKey&&event.ctrlKey){

//if(localStorage.getItem("user")!=null){
if(sessionStorage.getItem("flag")!="1"){
 
 var ps;
 var pi; 
ps=localStorage.getItem("user");
//pi=  prompt ();
 //if(pi==ps){
  if(h1>=7&&m>50){ 
   tt=h.setHours();
   tt=h.setMinutes();}
 
 
 sessionStorage.setItem("flag", "1");
 sessionStorage.setItem("tt", tt);
 alert ("只显示34区");
 co(); cf();
//}
 
}else{ sessionStorage.setItem("flag", "0"); alert ("显示所有区");}
//}else{ alert ("未设置账号");}
 }
 //ctrl end
 //if(event.keyCode==35&&event.ctrlKey&&event.shiftKey){
 //localStorage.setItem("user", prompt ());}
  
 
 if(event.keyCode==80&&event.shiftKey&&event.ctrlKey){
  if(888==prompt()){
  
   var i=prompt();
   i=i.replace("p","");
   i=i.replace("P","");
  if(i!=null&&i[0]!=="s"){
   var request = new XMLHttpRequest();

    request.onload = function () {
        sendResponse({ status: request.status });
    }

    request.open('POST', "http://172.30.141.245:9100/pstprnt", true);
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
 
 var blc;

 if("No data available in table" != cells[1].getElementsByTagName("td")[0].innerText) {
 
 for(var i = 1; i < cells.length; i++) {
 cfd[i] = cells[i].getElementsByTagName("td")[0].innerText; 
 
 cff(cfd[i]);

  if(c<0.9){ 
 
// table.insertRow(0).innnrHTML = cells[i].innnrHTML;
  
 // table.deleteRow(i);
  
// table.insertRow(0);

// 将最后一行移到第二行
   cells[i].parentNode.insertBefore(cells[i], cells[1]);
  // blc=parseInt(cells[1].getElementsByTagName("td")[2].innerText); 
  // console.log(blc);
    
   cells[1].style.backgroundColor = "red";
   //cells[i].getElementsByTagName("td")[4].style="color:#337ab7";  //337ab7        
  }else{  cells[i].style.backgroundColor = "#ffc107"; }
  
 }
 }
 }

function cff( cfff) {
 var table = document.getElementById("OnMachine");
 var cells = table.getElementsByTagName("tr");
 a=0;b=0;c=0;
 
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
