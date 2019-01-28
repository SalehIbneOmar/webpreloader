function preLoader(){
    setTimeout(function(){
       document.getElementById("loading_screen").style.display = "none";
    }, 5000);
}
window.addEventListener("load", preLoader); 