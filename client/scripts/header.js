function burrito() {
  console.log("burrito is alive.")
}

burrito();

$(document).ready(function(){

// Load Nav
$('#cube-container').fadeIn(1000);

//Toggle the Cube Flip
var titleCube = document.getElementById('cube');
var top = $(window).scrollTop();
$(window).scroll(function(){
    var curtop = $(window).scrollTop();
    if(top < curtop)
    {
      titleCube.style.webkitTransform ="rotateX(180deg)";
      titleCube.style.MozTransform ="rotateX(180deg)";
    }
    else
    {
      titleCube.style.webkitTransform ="rotateX(0deg)";
      titleCube.style.MozTransform ="rotateX(0deg)";
    }
    top = curtop;
});


//Toggle The nav Menu
$('.menu-icon').click(function(){
    $('.menu-ops').fadeToggle();
});
var myWidth = $(window).width();
if(myWidth > 653) {
    $('.menu-ops').css('display', 'none');
}

//about page switch
$('.about-link').click(function(){
    $('.menu-ops').fadeOut(500);
    $('.about-page').fadeIn(500);
});
$('.ex-out').click(function(){
    $('.about-page').fadeOut(500);
    $('.menu-ops').fadeOut(500);
});
});
