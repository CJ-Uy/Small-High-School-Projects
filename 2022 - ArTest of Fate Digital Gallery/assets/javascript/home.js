var images = new Array()

function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}

preload(
    "assets/images/home_images/1.png",
    "assets/images/home_images/2.png",
    "assets/images/home_images/3.png",
    "assets/images/home_images/4.png",
    "assets/images/home_images/5.png",
    "assets/images/home_images/6.png",
    "assets/images/home_images/7.png",
    "assets/images/home_images/8.png",
    "assets/images/home_images/9.png",
    "assets/images/home_images/10.png",
    "assets/images/home_images/11.png",
    "assets/images/home_images/12.png",
    "assets/images/home_images/13.png",
    "assets/images/home_images/14.png",
    "assets/images/home_images/15.png",
    "assets/images/home_images/1b.PNG",
    "assets/images/home_images/2b.PNG",
    "assets/images/home_images/3b.PNG",
    "assets/images/home_images/4b.PNG",
    "assets/images/home_images/5b.PNG",
    "assets/images/home_images/6b.PNG",
    "assets/images/home_images/7b.PNG",
    "assets/images/home_images/8b.PNG",
    "assets/images/home_images/9b.PNG",
    "assets/images/home_images/10b.PNG",
    "assets/images/home_images/11b.PNG",
    "assets/images/home_images/12b.PNG",
    "assets/images/home_images/13b.PNG",
    "assets/images/home_images/14b.PNG",
    "assets/images/home_images/15b.PNG"
)

//Opening animation		
var title = $("#opening_title");
var botLeft = $("#botLeftOpening");
var topRight = $("#topRightOpening");
var content = $(".landing_page");

/* Opening animation w/ loading screen
window.setTimeout(function() {
    $("#cover").css("animation-name", "coverExit");
}, 3000);
window.setTimeout(function() {
    title.css("animation-name", "titleEnter");
    botLeft.css("animation-name", "botLeftEnter");
    topRight.css("animation-name", "topRightEnter");
    $("#cover").css("display", "none");
}, 3500);
window.setTimeout(function() {
    title.css("animation-name", "titleExit");
    botLeft.css("animation-name", "botLeftExit");
    topRight.css("animation-name", "topRightExit");
}, 6500);

window.setTimeout(function() {
    title.css("display", "none");
    content.css("animation-name", "titleEnter");
}, 7500);
*/

/*No loading screen*/
window.setTimeout(function() {
    title.css("animation-name", "titleEnter");
    botLeft.css("animation-name", "botLeftEnter");
    topRight.css("animation-name", "topRightEnter");
    $("#cover").css("display", "none");
}, 500);
window.setTimeout(function() {
    title.css("animation-name", "titleExit");
    botLeft.css("animation-name", "botLeftExit");
    topRight.css("animation-name", "topRightExit");
}, 3000);

window.setTimeout(function() {
    title.css("display", "none");
    content.css("animation-name", "titleEnter");
}, 4000);


//Cards moving
/*
var myInterval = setInterval(moveLeft, 5000);

function resetInterval() {
    clearInterval(myInterval);
    myInterval = setInterval(moveLeft, 5000);
}
*/

$(".card.left").on("click", moveRight);
$(".card.right").on("click", moveLeft);
$(".card.center").on("click", rotate);

var socials = [
    "Maxene Rhayne Paler",
    "Maxene Rhayne Paler",
    "Nikka Angela Naputo<br>Youtube: N Loreiv<br>Instagram: @nikedzky",
    "Nikki Tabaranza<br>Instagram: @syrr.upp_",
    "Phoemela Nardo<br>Hyacinth Claire",
    "Kyle Ravinn Nase<br>Twitter: @goobaiartz<br>Instagram: @goobaiartz",
    "Leila Noelle Sabando",
    "Lyka Lagera",
    "Faye Rhianna Avendaño<br>Instagram: @fayerhiii",
    "Faye Rhianna Avendaño<br>Instagram: @fayerhiii",
    "Ynnah Abellana",
    "Fiona Nadine Macalaglag<br>Instagram: @dein.nadine",
    "Frances Kate Sonon<br>Instagram: @kream.png",
    "Ivory dawn Castro<br>Instagram: @ivorydawn_",
    "Sophia Vincess Cabalona"
]

function rotate() {
	$(".card").off("click");
	$(".centerInner").css("transform", "rotateY(180deg");
	$(".block").css("display", "block");
	$(".block").on("click", rotateBack);
}

function rotateBack() {
	$(".card.left").on("click", moveRight);
	$(".card.right").on("click", moveLeft);
	$(".card.center").on("click", rotate);
	$(".centerInner").css("transform", "rotateY(0deg");
	$(".block").css("display", "none");
	$(".block").off("click");
}

function moveLeft() {
    //resetInterval();
	$(".card").off("click")
    var centerCard = parseInt($(".card.center .centerInner .centerFront").css("background-image").match(/\d+/));
    var leftCard = parseInt($(".card.left").css("background-image").match(/\d+/));
    var rightCard = parseInt($(".card.right").css("background-image").match(/\d+/));
    
    $(".card.center").css("animation-name", "moveLeftCenter");
    $(".card.left").css("animation-name", "moveLeftLeft");
    $(".card.right").css("animation-name", "moveLeftRight");
	
    window.setTimeout(function() {
        $(".card.right .centerInner").remove();
        $(".card.center .centerInner").remove();
        $(".card.left .centerInner").remove();
        $(".card.center").css("animation-name", "");
        $(".card.right").css("animation-name", "");
        $(".card.left").remove();
        
        var right = "<div class='card right'></div>";
        var left = $(".card.center");
            left.addClass("left");
            left.removeClass("center");
        var center = $(".card.right");
            center.addClass("center");
            center.removeClass("right");
            $(".card.center").append("<div class='centerInner'><div class='centerFront'></div><div class='centerBack'></div></div>");
        
        $("#card_display").append(right);
        
        if(rightCard == 15) {
            rightCard = 0;
        }
        if(rightCard == 1) {
            centerCard = 0;
        }
        if(rightCard == 2) {
            leftCard = 0;
        }
        
        $(".card.center .centerInner .centerFront").css("background-image", "url('assets/images/home_images/" + (centerCard + 1) + ".png')");
        $(".card.center .centerInner .centerBack").css("background-image", "url('assets/images/home_images/" + (centerCard + 1) + "b.PNG')");
        $(".card.left").css("background-image", "url('assets/images/home_images/" + (leftCard + 1) + ".png')");
        $(".card.right").css("background-image", "url('assets/images/home_images/" + (rightCard + 1) + ".png')");
        $(".card.center").css("background-image", "");
        $(".card.center .centerInner .centerBack").html(socials[centerCard]);
        
        
        $(".card.left").on("click", moveRight);
        $(".card.right").on("click", moveLeft);
		$(".card.center").on("click", rotate);
    }, 210);
}

function moveRight() {
    //resetInterval();
	$(".card").off("click")
    var centerCard = parseInt($(".card.center .centerInner .centerFront").css("background-image").match(/\d+/));
    var leftCard = parseInt($(".card.left").css("background-image").match(/\d+/));
    var rightCard = parseInt($(".card.right").css("background-image").match(/\d+/));
    
    $(".card.center").css("animation-name", "moveRightCenter");
    $(".card.left").css("animation-name", "moveRightLeft");
    $(".card.right").css("animation-name", "moveRightRight");
    $(".card").off("click");
    
    window.setTimeout(function() {
        $(".card.right .centerInner").remove();
        $(".card.center .centerInner").remove();
        $(".card.left .centerInner").remove();
        $(".card.center").css("animation-name", "");
        $(".card.left").css("animation-name", "");
        $(".card.right").remove();
        
        var left = "<div class='card left'></div>";
        var right = $(".card.center");
            right.addClass("right");
            right.removeClass("center");
        var center = $(".card.left");
            center.addClass("center");
            center.removeClass("left");
            $(".card.center").append("<div class='centerInner'><div class='centerFront'></div><div class='centerBack'></div></div>");
            
        $("#card_display").append(left);
        
        if(leftCard == 1) {
            leftCard = 16;
        }
        if(leftCard == 15) {
            centerCard = 16;
        }
        if(leftCard == 15) {
            rightCard = 2;
        }
        if(rightCard == 1) {
            rightCard = 16;
        }
        
        $(".card.center .centerInner .centerFront").css("background-image", "url('assets/images/home_images/" + (centerCard - 1) + ".png')");
        $(".card.center .centerInner .centerBack").css("background-image", "url('assets/images/home_images/" + (centerCard - 1) + "b.PNG')");
        $(".card.left").css("background-image", "url('assets/images/home_images/" + (leftCard - 1) + ".png')");
        $(".card.right").css("background-image", "url('assets/images/home_images/" + (rightCard - 1) + ".png')");
        $(".card.center").css("background-image", "");
        $(".card.center .centerInner .centerBack").html(socials[centerCard - 2]);
        
		
		
        $(".card.left").on("click", moveRight);
        $(".card.right").on("click", moveLeft);
		$(".card.center").on("click", rotate);
    }, 210);
}