


$(function(){



    var width=0;
    var MaxWidth=0;
    var Highlight;

    window.matchMedia("(max-width: 799px)").addEventListener('change', event =>
  
    {

        if(event.matches)
        {
            var width= Number($(".sidefloating").width());
            $(".backgroundetails").css("left", width+10).width(600);
        }else{

            $(".backgroundetails").css("left", 0).css("width", "100%");
        }
      
    
    });

    if(window.matchMedia("(max-width: 799px)").matches)
  
    {

       
            var width= Number($(".sidefloating").width());
            $(".backgroundetails").css("left", width+10).width(600);
       

       
      
    
    }
       
   
  
   

    
    

$(window).resize(function()  //all i had to do was use this. Use $(window) tag :)
{
    GenerateFloating();
    


   
})

$("#navbar1, #navbar2, #navbar3").hover(function()  //if hover execute the first one, otherwise the second one
{
    $(this).css("background-color", "rgb(51, 83, 151)");  //the first hover condition

}, function()
{
      $(this).css("background-color", "white");  //iif not hover
});

$("#navbar1, #navbar2, #navbar3").click(function()
{
   $(".sideFloating").toggle();  //THIS IS WOW! it toggles between hide nad show
});

GenerateFloating();


$(".sideFloating > div").hover(function()
{
    Highlight =$(this).children()[1]; //first children
    $(this).css("background", "rgb(51, 83, 151)");
    timer=setInterval(function()
    {
            MaxWidth=$(".sideFloating > div").width();
            MaxWidth=MaxWidth-10;
            if(width<=MaxWidth)
            {
                width+=2;

            }
            $(Highlight).css("width", width);
  
    },10);
},function()
{
    width=0;
    $(Highlight).css("width", width);
    $(this).css("background", "rgb(33, 45, 71)");
    clearInterval(timer);

});

   

});

function GenerateFloating()
{
    var Height= $(".TopBar").offset().left + $(".TopBar").height();
    var BottomHeight= $(".footer-box").offset().top; 
    var ActualHeight= BottomHeight-Height;
    $(".sideFloating").css("top", Height);
    $(".sideFloating").height(ActualHeight);
}