function colors() {

    var green = document.querySelector(".green");
    var red = document.querySelector(".red");
    var yellow = document.querySelector(".yellow");

    green.style.opacity = 1;
    setTimeout(function () {
        green.style.opacity = .3;
        red.style.opacity = .3;
        yellow.style.opacity = 1;
    }, 800);

    setTimeout(function () {

        green.style.opacity = .3;
        red.style.opacity = 1;
        yellow.style.opacity = .3;
    }, 1600);

    setTimeout(function () {

        green.style.opacity = 1;
        red.style.opacity = .3;
        yellow.style.opacity = .3;
    }, 2500);


}
var looping = setInterval(function () {

    colors()
}, 2500);
