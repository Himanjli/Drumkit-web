for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        // this keyword returns the whole html tag which is clicked so by referring this.html we will be able to access the text written on inside that tag in this very case
        //if there were other tags also inside this tag then innerhtml will return those too and we have to use different tag called text in order to just acess the text
        console.log(this.classList[0])
        var buttonClicked = this.classList[0];
        makesound(buttonClicked);
        buttonAnimation(buttonClicked);

    });

}

document.addEventListener("keydown", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(k) {
    var key = k.toLowerCase();
    console.log(key);
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(buttonClicked);
            break;
    }
}


function buttonAnimation(k) {
    var key = k.toLowerCase();
    var animate = document.querySelector("." + key);

    animate.classList.add("pressed");
    setTimeout(function() {
        animate.classList.remove("pressed")
    }, 100);
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();