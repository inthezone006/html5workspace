function securitydemo(){
   window.alert("Both the username and password is \'test\'.");
   window.location.href="https://html5-workspace-inthezone006.c9users.io/main/securitydemo/testfile.txt";
}
function windowprompt(){
    var prompttext=window.prompt("What do you want the window to say?");
    var alertwindow=window.open("", "Alert Box", "width=500,height=500");
    alertwindow.document.write("<meta name=viewport content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\"><link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">");
    alertwindow.document.write(prompttext);
}