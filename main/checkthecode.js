var browser;
/*global navigator*/
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ){
    browser="opera";
}
else if(navigator.userAgent.indexOf("Chrome") != -1 ){
    browser="chrome";
}
else if(navigator.userAgent.indexOf("Safari") != -1){
    browser="safari";
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
    browser="firefox";
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
    browser="ie";
}  
else{
    browser="browser";
}
var issecuritydemo=false;
function checkcode(){
    var mytext=document.getElementById("thetext").value;
    if(mytext=="cd securitydemo" && issecuritydemo==false){
        issecuritydemo=true;
        document.getElementById("commanddetail").innerHTML="\\main\\securitydemo";
    }
    else if(mytext=="cd securitydemo" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'issecuritydemo\' not found";
    }
    else if(mytext=="cd .." || mytext=="cd.." && issecuritydemo==false){
        document.getElementById("commanddetail").innerHTML="Access denied";
    }
    else if(mytext=="cd .." || mytext=="cd.." && issecuritydemo==true){
        issecuritydemo=false;
    }
    else if(mytext==browser+" index.html" && issecuritydemo==false){
        window.location.assign("index.html");
    }
    else if(mytext==browser+" webdemo.html" && issecuritydemo==false){
        document.getElementById("commanddetail").innerHTML="<head dir=\"ltr\"><meta name=viewport content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" type=\"text/css\" href=\"https://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin\"><link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\"></head><body><script type=\"text/javascript\" src=\"webdemo.js\"></script><form><fieldset><legend>Javascript</legend><button onclick=\"alertbox();\">Popup Alert</button><button onclick=\"securitydemo();\">Security Demo</button></fieldset></form></body>";
    }
    else if(mytext==browser+" about.html" && issecuritydemo==false){
        document.getElementById("commanddetail").innerHTML="<head dir=\"ltr\"><meta name=viewport content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" type=\"text/css\" href=\"https://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin\"><link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\"></head><body><div style=\"text-align:center\"><p>This is a website that I try to experiment on and hopefully find new programming-related things, as you can see with the Ubuntu terminal theme on this website.</p><p>One thing to note, however, is that due to server constraints from Cloud9, you may only visit this page when I have the server up and running.</p><p>I have also connected this website to Github at <a href=\"https://github.com/inthezone006/html5workspace\">https://github.com/inthezone006/html5workspace</a>. Feel free to help work on it.</p><br><br><br><p>You can visit me on my social media here:</p><br><a href=\"https://facebook.com/inthezone006\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png\" width=\"50\" height=\"50\"></a><a href=\"https://instagram.com/rahulmenon__\"><img src=\"https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png\" width=\"50\" height=\"50\"></a><p><br><br><br><br>You may contact me through email at <a href=\"mailto:rahul.menon85280@gmail.com\">rahul.menon85280@gmail.com</a></p></div></body>";
    }
    else if(mytext==browser+" about.html" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'about.html\' not found";
    }
    else if(mytext==browser+" index.html" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'index.html\' not found";
    }
    else if(mytext==browser+" webdemo.html" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'webdemo.html\' not found";
    }
    else if(mytext==browser){
        document.getElementById("commanddetail").innerHTML="Unknown command; view chrome/? for help";
    }
    else if(mytext=="sudo"){
        document.getElementById("commanddetail").innerHTML="Error: Already signed in as root";
    }
    else if(mytext=="whoami" || mytext=="ver"){
        document.getElementById("commanddetail").innerHTML=navigator.userAgent+"<br>"+browser;
    }
    else if(mytext=="?" || mytext=="/?"){
        document.getElementById("commanddetail").innerHTML=browser+"<br>ls<br>cat<br>eog<br>cd<br>sudo<br>whoami<br>exit";
    }
    else if(mytext=="cat checkthecode.js" && issecuritydemo==false){
        window.location.assign("checkthecode.js");
    }
    else if(mytext=="eog terminal-25.ico" && issecuritydemo==false){
        window.location.assign("terminal-25.ico");
    }
    else if(mytext=="eog terminal-25.ico" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'terminal-25.ico\' not found";
    }
    else if(mytext=="cat styles.css" && issecuritydemo==false){
        window.location.assign("styles.css");
    }
    else if(mytext=="cat useragent.js" && issecuritydemo==false){
        window.location.assign("useragent.js");
    }
    else if(mytext=="cat webdemo.js" && issecuritydemo==false){
        window.location.assign("webdemo.js");
    }
    else if(mytext=="cat checkthecode.js" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'checkthecode.js\' not found";
    }
    else if(mytext=="cat styles.css" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'styles.css\' not found";
    }
    else if(mytext=="cat useragent.js" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'useragent.js\' not found";
    }
    else if(mytext=="cat webdemo.js" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML="Error: \'webdemo.js\' not found";
    }
    else if(mytext=="cat .htaccess"){
        document.getElementById("commanddetail").innerHTML="Error: Access denied";
    }
    else if(mytext=="cat .htpasswd"){
        document.getElementById("commanddetail").innerHTML="Error: Access denied";
    }
    else if(mytext=="cat .htaccess"){
        document.getElementById("commanddetail").innerHTML="Error: \'.htaccess\' not found";
    }
    else if(mytext=="cat .htpasswd"){
        document.getElementById("commanddetail").innerHTML="Error: \'.htpasswd\' not found";
    }
    else if(mytext=="ls" && issecuritydemo==true){
        document.getElementById("commanddetail").innerHTML=".htaccess<br>.htpasswd";
    }
    else if(mytext=="ls" && issecuritydemo==false){
        document.getElementById("commanddetail").innerHTML="securitydemo<br>checkthecode.js<br>index.html<br>styles.css<br>terminal-25.ico<br>useragent.js<br>webdemo.js";
    }
    else if(mytext=="exit"){
        window.location.assign("about:blank");
    }
    else if(mytext==browser+" ?" || mytext==browser+" /?" || mytext==browser+"?" || mytext==browser+"/?" || mytext==browser+" --help" || mytext==browser+"--help"){
        document.getElementById("commanddetail").innerHTML="[ie, chrome, firefox, opera, safari] [<i>filename</i>]";
    }
    else if(mytext=="ls?" || mytext=="ls ?" || mytext=="ls/?" || mytext=="ls /?" || mytext=="ls --help" || mytext=="ls--help"){
        document.getElementById("commanddetail").innerHTML="ls lists the contents inside a folder";
    }
    else if(mytext=="cat?" || mytext=="cat ?" || mytext=="cat/?" || mytext=="cat /?" || mytext=="cat --help" || mytext=="cat--help"){
        document.getElementById("commanddetail").innerHTML="cat [<i>filename</i>] can be used to view text files (*.js, *.css)";
    }
    else if(mytext=="cd?" || mytext=="cd ?" || mytext=="cd/?" || mytext=="cd /?" || mytext=="cd --help" || mytext=="cd--help"){
        document.getElementById("commanddetail").innerHTML="cd [<i>directory</i>] changes to the specified directory";
    }
    else if(mytext=="sudo?" || mytext=="sudo ?" || mytext=="sudo/?" || mytext=="sudo /?" || mytext=="sudo --help" || mytext=="sudo--help"){
        document.getElementById("commanddetail").innerHTML="sudo lowers the terminal to the root level";
    }
    else if(mytext=="eog?" || mytext=="eog ?" || mytext=="eog/?" || mytext=="eog /?" || mytext=="eog --help" || mytext=="eog--help"){
        document.getElementById("commanddetail").innerHTML="eog [<i>filename</i>] opens an image";
    }
    else if(mytext=="whoami?" || mytext=="whoami ?" || mytext=="whoami/?" || mytext=="whoami /?" || mytext=="ver?" || mytext=="ver ?" || mytext=="ver/?" || mytext=="ver /?" || mytext=="ver --help" || mytext=="ver--help"  || mytext=="whoami --help" || mytext=="whoami--help"){
        document.getElementById("commanddetail").innerHTML="whoami/ver gives information on the user";
    }
    else if(mytext=="exit?" || mytext=="exit ?" || mytext=="exit/?" || mytext=="exit /?" || mytext=="exit --help" || mytext=="exit--help"){
        document.getElementById("commanddetail").innerHTML="exit exits the terminal";
    }
    else{
        document.getElementById("commanddetail").innerHTML="Unknown command \'"+mytext+"\'";
    }
}