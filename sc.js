function change() {
    if(document.getElementById("aud").paused){
        document.getElementById("bt").style="background-color: green;"
        document.getElementById("aud").play();
    }else{
        document.getElementById("bt").style="background-color: red;"
        document.getElementById("aud").pause();
    }
}