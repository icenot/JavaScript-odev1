let name =document.querySelector("#myName");
let ad = prompt("Adınızı Giriniz.");
name.innerHTML=`${ad}`;








function showTime() {
    var date = new Date();  
    var daynumber = date.getDay();
    var days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var hour = date.getHours();
    hour =  hour <= 9 ? "0" + hour : hour; 
    var minute = date.getMinutes(); 
    minute = minute <= 9 ? "0" + minute :minute;
    var second = date.getSeconds(); 
    second = second <= 9 ? "0" + second : second; 
    var current = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  </svg>  ` +hour + ":" + minute + ":" + second + " " +` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3Zm5 4.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg> `+ days[daynumber]; 
    document.getElementById("time").innerHTML = current; 
   } setInterval("showTime()", 1000);