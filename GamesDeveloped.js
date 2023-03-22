var count=0;
var StringLoc="";
var TextArray=["Escape The Nemesis","Kiwi Eater", "Angry Fish", "Box Runner", "Color Switch Clone", "Fighter Planes"]
var LinkArray=["https://github.com/YunoGasasi9862/2DPlatformer", "https://github.com/YunoGasasi9862/AngryBirdsSelf",
 "https://github.com/YunoGasasi9862?tab=repositories", "https://github.com/YunoGasasi9862/Color-Changer","https://github.com/YunoGasasi9862?tab=repositories"];

 $(function(){

  
     $("body").height(window.innerHeight);
   
     
if(count==0)
{
  document.getElementById("text"+`${5}`).style.display="none";

  
  $(".SlideShow").empty().append( `
  
  <button class="lt" type="button" name="LT" onclick="ChangePictureLeft()">
                      &lt;
                  </button>
                  </button>
                  <div class="first-Picture">
                  <video class="FP" width="640" height="300" controls>
                  <source src="P0.mp4" type="video/mp4">
                  </video>
                      <div class="description"><a id ="ds" href="https://github.com/YunoGasasi9862/2DPlatformer" target="_blank">Escape The Nemesis
                      </a>
                      </div>
                  </div>
                  <button class="gt" type="button" name="GT" onclick="ChangePicture()">
                      &gt;
                  </button>

            
  
  
`)
}
 
 
     
     
})
function ChangePicture()
{


  var elements=document.getElementsByClassName("FP"); //this returns an array
  console.log(count);
  //return array!!
  count++;
  

         if(count<6 && count >0) 
          {
            
            if(count>0)
            {
                      $(".SlideShow").empty().append(`<button class="lt" type="button" name="LT" onclick="ChangePictureLeft()">
                      &lt;
                  </button>
                  <div class="first-Picture">
                      <img class="FP" src="P5.jpg">
                      <div class="description"><a id ="ds" href="https://github.com/YunoGasasi9862/2DPlatformer" target="_blank">Kiwi Eater
                      </a>
                      </div>
                  </div>
          
          
                  <button class="gt" type="button" name="GT" onclick="ChangePicture()">
                      &gt;
                  </button>`)
                  document.getElementById("ds").innerHTML=TextArray[count];
                  document.getElementById("ds").setAttribute("href", LinkArray[count]);
          }
          
          
          
             ForLoop();
            StringLoc="P"+count+".jpg";
       
            
          }else
          {
            document.getElementById("text"+`${count-1}`).style.display="none";
            count=0;
            StringLoc="P"+count+".jpg";
            document.getElementById("text"+`${count}`).style.display="block";
            document.getElementById("ds").innerHTML=TextArray[count];
            document.getElementById("ds").setAttribute("href", LinkArray[count]);
            $(".SlideShow").empty().append( `
              
              <button class="lt" type="button" name="LT" onclick="ChangePictureLeft()">
                                  &lt;
                              </button>
                              </button>
                              <div class="first-Picture">
                              <video class="FP" width="640" height="300" controls>
                              <source src="P0.mp4" type="video/mp4">
                              </video>
                                  <div class="description"><a id ="ds" href="https://github.com/YunoGasasi9862/2DPlatformer" target="_blank">Escape The Nemesis
                                  </a>
                                  </div>
                              </div>
                              <button class="gt" type="button" name="GT" onclick="ChangePicture()">
                                  &gt;
                              </button>

            
  
  
`)
            
           
          }

    if(count!=0)
    {
      elements[0].src= StringLoc;

    }

   
 
    
  
    
}

function ForLoop()
{
  for(var i=0; i<6; i++)
    {
      
      

       if(i==count)
       {
        document.getElementById("text"+`${i}`).style.display="block";
        
       }else
       {
        document.getElementById("text"+`${i}`).style.display="none";
       }

    }
 


    StringLoc="P" + count + ".jpg";
    
}

function ChangePictureLeft()
{

  var elements1=document.getElementsByClassName("FP");
  count--;

   if(count<6 && count>=0)
   {
    if(count==0)
    {
      $(".SlideShow").empty().append( `
              
      <button class="lt" type="button" name="LT" onclick="ChangePictureLeft()">
                          &lt;
                      </button>
                      </button>
                      <div class="first-Picture">
                      <video class="FP" width="640" height="300" controls>
                      <source src="P0.mp4" type="video/mp4">
                      </video>
                          <div class="description"><a id ="ds" href="https://github.com/YunoGasasi9862/2DPlatformer" target="_blank">Escape The Nemesis
                          </a>
                          </div>
                      </div>
                      <button class="gt" type="button" name="GT" onclick="ChangePicture()">
                          &gt;
                      </button>

    


`)
    }
    if(count>0)
    {
              $(".SlideShow").empty().append(`<button class="lt" type="button" name="LT" onclick="ChangePictureLeft()">
              &lt;
          </button>
          <div class="first-Picture">
              <img class="FP" src="P5.jpg">
              <div class="description"><a id ="ds" href="https://github.com/YunoGasasi9862/2DPlatformer" target="_blank">Kiwi Eater
              </a>
              </div>
          </div>
  
  
          <button class="gt" type="button" name="GT" onclick="ChangePicture()">
              &gt;
          </button>`)
          document.getElementById("ds").innerHTML=TextArray[count];
          document.getElementById("ds").setAttribute("href", LinkArray[count]);
  }
    ForLoop();
    document.getElementById("ds").innerHTML=TextArray[count];
    document.getElementById("ds").setAttribute("href", LinkArray[count]);
    
   }
  if(count<0)
  {

      count=5;
      document.getElementById("text"+`${count}`).style.display="block";
      StringLoc="P" + count + ".jpg";
     
      document.getElementById("ds").innerHTML=TextArray[count];
      document.getElementById("ds").setAttribute("href", LinkArray[count]);
      $(".SlideShow").empty().append(`<button class="lt" type="button" name="LT" onclick="ChangePictureLeft()">
      &lt;
  </button>
  <div class="first-Picture">
      <img class="FP" src="P5.jpg">
      <div class="description"><a id ="ds" href="https://github.com/YunoGasasi9862/2DPlatformer" target="_blank">Kiwi Eater
      </a>
      </div>
  </div>


  <button class="gt" type="button" name="GT" onclick="ChangePicture()">
      &gt;
  </button>`)
  document.getElementById("text"+`${0}`).style.display="none";


    }
  
    if(count!=0 )
       elements1[0].src= StringLoc;

}
