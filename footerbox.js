$(function()
{

    var height= Number($("body").height());
    var newHeight=height-20;
    $(".copyright").css("top", newHeight);
    $(".footer-box").css("top", newHeight-$(".footer-box").height());


    
})