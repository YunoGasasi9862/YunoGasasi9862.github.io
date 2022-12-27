var count=0;
var StringLoc="";
var TextArray=["Kiwi Eater", "Angry Fish", "Box Runner", "Color Switch Clone", "Fighter Planes"]
var LinkArray=["https://github.com/YunoGasasi9862/2DPlatformer", "https://github.com/YunoGasasi9862/AngryBirdsSelf",
 "https://github.com/YunoGasasi9862?tab=repositories", "https://github.com/YunoGasasi9862/Color-Changer","https://github.com/YunoGasasi9862?tab=repositories"];
function ChangePicture()
{
 
  var elements=document.getElementsByClassName("FP"); //this returns an array
  //return array!!

       


  
         if(count<5 && count >=0) 
          {
            document.getElementById("ds").innerHTML=TextArray[count];
            document.getElementById("ds").setAttribute("href", LinkArray[count]);
            for(var i=0; i<5; i++)
            {
              

               if(i==count)
               {
                document.getElementById("text"+`${i}`).style.display="block";
                
               }else
               {
                document.getElementById("text"+`${i}`).style.display="none";
               }

            }
            StringLoc="P"+count+".jpg";
            count++;
          }else
          {
            document.getElementById("text"+`${count-1}`).style.display="none";
            count=0;
            StringLoc="P"+count+".jpg";
            document.getElementById("text"+`${count}`).style.display="block";
            document.getElementById("ds").innerHTML=TextArray[count];
            document.getElementById("ds").setAttribute("href", LinkArray[count]);

            count++;
          }

    elements[0].src= StringLoc;


    
}

function ChangePictureLeft()
{

  var elements1=document.getElementsByClassName("FP");
 
   if(count<5 && count>=0)
   {
    count--;
    for(var i=0; i<5; i++)
    {
      

       if(i==count)
       {
        document.getElementById("text"+`${i}`).style.display="block";
        
       }else
       {
        document.getElementById("text"+`${i}`).style.display="none";
       }

    }
    document.getElementById("ds").innerHTML=TextArray[count];
    document.getElementById("ds").setAttribute("href", LinkArray[count]);


    StringLoc="P" + count + ".jpg";
    
   }
  if(count<0)
  {

      count=4;
      document.getElementById("text"+`${count}`).style.display="block";
      StringLoc="P" + count + ".jpg";
      document.getElementById("ds").innerHTML=TextArray[count];
      document.getElementById("ds").setAttribute("href", LinkArray[count]);

    }
  
    elements1[0].src= StringLoc;

}


