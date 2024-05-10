
function ToggleDis(){
    var x = document.getElementById("discription");
    var y = document.getElementById("reviews");
        x.style.display="none";
        y.style.transition-"0.5s ease";
        y.style.display="block";

}
function ToggleRev(){
    var x = document.getElementById("discription");
    var y = document.getElementById("reviews");
        x.style.transition-"0.5s ease";
        x.style.display="block";
        y.style.display="none";
}
function ToggleNavpa() {
    var a = document.getElementById("p1");
    var b = document.getElementById("p2");
    var c = document.getElementById("p3");
    var nav_b1 = document.getElementById("nav-b1");
    var nav_b2 = document.getElementById("nav-b2");
    var nav_b3 = document.getElementById("nav-b3");
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    nav_b1.style.color="#6373ef";
    nav_b2.style.color="black";
    nav_b3.style.color="black";
}
function ToggleNavpb() {
    var a = document.getElementById("p1");
    var b = document.getElementById("p2");
    var c = document.getElementById("p3");
    var nav_b1 = document.getElementById("nav-b1");
    var nav_b2 = document.getElementById("nav-b2");
    var nav_b3 = document.getElementById("nav-b3");
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    nav_b2.style.color="#6373ef";
    nav_b1.style.color="black";
    nav_b3.style.color="black";
}
function ToggleNavpc() {
    var a = document.getElementById("p1");
    var b = document.getElementById("p2");
    var c = document.getElementById("p3");
    var nav_b1 = document.getElementById("nav-b1");
    var nav_b2 = document.getElementById("nav-b2");
    var nav_b3 = document.getElementById("nav-b3");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    nav_b3.style.color="#6373ef";
    nav_b2.style.color="black";
    nav_b1.style.color="black";
}