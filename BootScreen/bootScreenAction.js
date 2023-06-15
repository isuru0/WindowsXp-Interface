// Get all Elements
var black_screen = document.getElementById("blackScreen");
var gray_screen = document.getElementById("grayScreen");
var gray_screen_p = document.getElementById("grayScreenP");
var home_boot = document.getElementById("homeBoot");
var cube_set = document.getElementById("cubeSet");

// Full Booting Action
function booting(){
    // First Black Screen Action
    black_screen.style.opacity = 1;

    // Gray Screen Action
    function graybooting(){
        black_screen.style.opacity = 0;
        gray_screen.style.opacity = 1;
        /// Gray Screen Loading Action
        function graybootingpout(){
            gray_screen_p.style.opacity = 0;
        }
        function graybootingpin(){
            gray_screen_p.style.opacity = 1;
        }
        var Tsec = 1000;
        for (let i = 0; i < 3; i++){
            let graybootingpouttime = setTimeout(graybootingpout, Tsec);
            let graybootingpintime = setTimeout(graybootingpin, Tsec+1000);
            Tsec = Tsec + 2000;
        }

        // Home Booting Action
        function homebooting(){
            black_screen.style.opacity = 0;
            gray_screen.style.opacity = 0;
            home_boot.style.opacity = 1;

            function cubemove(){
                function movecubemove(){
                    cube_set.style.transitionDuration = '3s';
                    cube_set.style.opacity = 1;
                    cube_set.style.right = '35vw';
                }
                function movecubereset(){
                    cube_set.style.transitionDuration = '0s';
                    cube_set.style.right = '59vw';
                    cube_set.style.opacity = 1;
                }
                var Tseccube = 0;
                for (let t = 0; t < 3; t++){
                    let movecubemovetime = setTimeout(movecubemove, Tseccube);
                    let movecuberesettime = setTimeout(movecubereset, Tseccube + 3000);
                    Tseccube = Tseccube + 4000;
                }

                // After the booting Black Screen Action
                function afterbootingblackscreen(){
                    black_screen.style.opacity = 1;

                    // After the booting Gray Screen Action
                    function afterbootinggrayscreen(){
                        black_screen.style.opacity = 0;
                        gray_screen.style.opacity = 1;
                        gray_screen_p.style.opacity = 0;

                        // Goto the Load Page
                        function loadpage(){
                            location.href = "../LoadPage/loadpage.html";
                        }
                        let loadpagetime = setTimeout(loadpage, 2000);
                    }
                    let afterbootinggrayscreentime = setTimeout(afterbootinggrayscreen, 2000);
                }
                let afterbootingblackscreentime = setTimeout(afterbootingblackscreen, 11000);
            }
            let cubemovetime = setTimeout(cubemove, 3000);
        }
        let homebootingtime = setTimeout(homebooting, 6000);
    }
    let graybootingtime = setTimeout(graybooting, 2000);   
}