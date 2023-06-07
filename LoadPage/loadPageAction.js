var Error = document.getElementById("error");
    Error.style.display = "none";

function password(){
    var passw = document.getElementById("password").value;
    if (passw === "password"){
        location.href = "file:///D:/OFFICIAL/Website/Project/04%20Windows%20XP/index.html";
    }
    else if (passw === "0"){
        location.href = "file:///D:/OFFICIAL/Website/Project/04%20Windows%20XP/index.html";
    }
    else {
        var Error = document.getElementById("error");
        Error.style.display = "block";
        setTimeout(() => {
            Error.style.display = "none";
            }, 3000);
    }
}

function normalMode(){
    var Error = document.getElementById("error");
    if (Error.style.display === "block"){
        Error.style.display = "none";
    }
}