//  Time Set
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    let situation;
    if(h > 12){situation = "pm"} else{situation = "am"}
    document.getElementById('realClock').innerHTML =  h + ":" + m + " " + situation;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  //  Onload hidden start
  var startshow = document.getElementById("menuBox");
  startshow.style.display = "none";
  // Onload hidden My Computer
  var mycomputershow = document.getElementById("myComputerWindow");
  mycomputershow.style.display = "none";
  // Onload hidden My Computer Shadow
  var mycomputershadowshow = document.getElementById("myComputerWindowShadow");
  mycomputershadowshow.style.display = "none";


  
  //  Start Button actions
  function startButton() {
    var startmenu = document.getElementById("menuBox");
    if (startmenu.style.display === "none") {
      startmenu.style.display = "block";
    } else if (startmenu.style.display === "block") {
      startmenu.style.display = "none";
   } else if (!startmemu.contains(startButton.target)) {  //  I want hidden the start when click other area.
      startmemu.style.display = "none";
   }
  }

  // Start Close Button action (when click the background)
  function startclose(){
    var startmenu = document.getElementById("menuBox");
    startmenu.style.display = "none";
  }

  // Start Log off Button action
  function logoff(){
    location.href = "./LoadPage/loadpage.html";
  }


  //  My Computer Button actions
  function mycomputer() {
    var mycomputerget = document.getElementById("myComputerWindow");
    var mycomputershadowget = document.getElementById("myComputerWindowShadow");
    var startmenu = document.getElementById("menuBox");
    if (mycomputerget.style.display === "none"){
      mycomputerget.style.display = "block";
      mycomputershadowget.style.display = "block";
      startmenu.style.display = "none";

    }
  }

  // My Computer Close Button actions
  function mycomputerclose(){
    var mycomputerclose = document.getElementById("myComputerWindow");
    mycomputerclose.style.display = "none";
    var mycomputershadowclose = document.getElementById("myComputerWindowShadow");
    mycomputershadowclose.style.display = "none";

  }

  //  My Computer Minimize Button actions
  function mycomputerminimize() {
    var mycomputermin = document.getElementById("myComputerWindow");
    if (mycomputermin.style.display === "none") {
      mycomputermin.style.display = "block";
    } else if (mycomputermin.style.display === "block") {
      mycomputermin.style.display = "none";
  }
}

  //  My Computer Resize Button actions
  function mycomputerresize() {
    console.log("My Computer Resize");
}