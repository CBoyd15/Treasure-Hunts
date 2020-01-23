$( document ).ready(function() {
 
    $(".hide2").hide();
    $(".hide3").hide();
    $(".img1").fadeIn();
    $(".img2").hide();
    $(".img3").hide();
    $(".img4").hide();
});

$(".hide").click(function(){

    $(".img1").fadeOut();
});

$(".img1").click(function(){
   $(".img1").hide();
    $(".img2").show();
});
    
$(".img2").click(function(){
    $(".img2").hide();
    $(".hide2").show();
});
$(".hide2").dblclick(function(){
    $(".hide").show();
    $(".img3").show();
});
$(".img3").click(function(){
    $(".img3").hide();
    $(".hide3").show();
});
$(".hide3").click(function(){
    $(".hide").show();
    $(".img4").show();
    $("body").css("background-color","aqua");
});
