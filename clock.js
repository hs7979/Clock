function showTime(){
    var date= new Date();
    var h= date.getHours();
    var m= date.getMinutes();
    var s= date.getSeconds();

    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    var time= h+":"+m+":"+s;
    $("#clock").text(time);
}

setInterval(showTime,1000);
$("body").css("background-color","black");
var styles={
    color: "red",
    position:"absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    border: "6px solid blue"
    
};
$("#clock").css(styles);
$("#clock").css("font-size","80px");

function day(){
    var today = new Date();
    var dd = today.getDate();
    var dy= today.getUTCDay();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    if(dy==1){
        dy="Monday";
    }
    if(dy==2){
        dy="Tuesday";
    }
    if(dy==3){
        dy="Wednesday";
    }
    if(dy==4){
        dy="Thursday";
    }
    if(dy==5){
        dy="Friday";
    }
    if(dy==6){
        dy="Saturday";
    }
    if(dy==7){
        dy="Sunday";
    } 
    today = dd+'-'+mm+'-'+yyyy +'  '+dy;
    $("#day").text(today);
}
setInterval(day,1000);
var styles1={
    color: "red",
    position:"absolute",
    top: "70%",
    left: "50%",
    transform: "translateX(-50%) translateY(-70%)",
    border: "6px solid blue"
    
};
$("#day").css(styles1);
$("#day").css("font-size","50px");