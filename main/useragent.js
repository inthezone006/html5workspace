var browser;
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ){
    document.getElementById("browser").innerHTML="opera";
    browser="opera";
} /*global navigator*/
else if(navigator.userAgent.indexOf("Chrome") != -1 ){
    document.getElementById("browser").innerHTML="chrome";
    browser="chrome";
}
else if(navigator.userAgent.indexOf("Safari") != -1){
    document.getElementById("browser").innerHTML="safari";
    browser="safari";
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
    document.getElementById("browser").innerHTML="firefox";
    browser="firefox";
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
    document.getElementById("browser").innerHTML="ie";
    browser="ie";
}  
else{
    document.getElementById("browser").innerHTML="browser";
}
document.getElementById("os").innerHTML=navigator.userAgent;