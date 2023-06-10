
// Onload After the Login
var aftercontents = document.getElementById("afterthecontent");
aftercontents.style.opacity = 0;
// Onload Before the Login
var beforecontents = document.getElementById("beforethecontent");
beforecontents.style.opacity = 1;
// Onload Error message hidden by default
var Error = document.getElementById("error");
Error.style.display = "none";

// Check the password
function password(){
    var passw = document.getElementById("password").value;
    if (passw === "password"){
        var aftercontents = document.getElementById("afterthecontent");
        aftercontents.style.opacity = 1;
        var beforecontents = document.getElementById("beforethecontent");
        beforecontents.style.opacity = 0;
        
        document.getElementById("loadstartupsound").play();

        function loginwindow(){
            location.href = "../index.html";
        }

        let loginwindowtime = setTimeout(loginwindow, 3000);
    }
    else if (passw === "0"){
        var aftercontents = document.getElementById("afterthecontent");
        aftercontents.style.opacity = 1;
        var beforecontents = document.getElementById("beforethecontent");
        beforecontents.style.opacity = 0;

        document.getElementById("loadstartupsound").volume = 0.5;
        document.getElementById("loadstartupsound").play();

        function loginwindow(){
            location.href = "../index.html";
        }

        let loginwindowtime = setTimeout(loginwindow, 5000);
    }
    else {
        document.getElementById("password").value = "";
        document.getElementById("password").focus();
        var Error = document.getElementById("error");
        Error.style.display = "block";

        function errormsghide(){
            Error.style.display = "none";
        }

        let errortime = setTimeout(errormsghide, 3000);

    }
}

// Hide the Error Message when click other area
function normalMode(){
    var Error = document.getElementById("error");
    if (Error.style.display === "block"){
        Error.style.display = "none";
    }
}