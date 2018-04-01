function alertbox(){
    var alertboxtext=window.prompt("What do you want the alert to say?");
    var myalertbox=window.open("", "Alert Box", "width=500,height=500");
    myalertbox.document.write("<meta name=viewport content=\"width=device-width, initial-scale=1\"><style type=\"text/css\">body{font-size:28px}</style><body bgcolor='#ADD8E6'>");
    myalertbox.document.write(alertboxtext);
}
function securitydemo(){
    window.alert("The username is \'test\' and the password is \'test\' \(without the quotations\)");
    window.open("https://html5-workspace-inthezone006.c9users.io/main/securitydemo/Success");
}