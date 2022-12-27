


$(function(){

$(window).resize(function()  //all i had to do was use this. Use $(window) tag :)
{
    GenerateFloating();

})

$("#navbar1, #navbar2, #navbar3").hover(function()  //if hover execute the first one, otherwise the second one
{
    $(this).css("background-color", "red");  //the first hover condition

}, function()
{
      $(this).css("background-color", "white");  //iif not hover
});

$("#navBar").click(function()
{
   $(".sideFloating").toggle();  //THIS IS WOW! it toggles between hide nad show
});

GenerateFloating();


});

function GenerateFloating()
{
    var Height= $(".TopBar").offset().left + $(".TopBar").height();
    var BottomHeight= $(".footer-box").offset().top; 
    var ActualHeight= BottomHeight-Height;
    $(".sideFloating").css("top", Height);
    $(".sideFloating").height(ActualHeight);
}