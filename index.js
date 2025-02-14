
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , handleclick);
}

function handleclick(){
    var buttoninnerHTML = this.innerHTML;  
    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
}


document.addEventListener("keydown" , function(event){
   
    makeSound(event.key); //key property of event where it returns a key which is pressed 
    buttonAnimation(event.key);
})

function makeSound(key){

    switch(key){
        case 'w':
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
          // this.style.color="white";
           break;

           case 'a':
               var tom2 = new Audio("sounds/tom-2.mp3");
               tom2.play();
               //this.style.color="white";
               break;

               case 's':
                   var tom3 = new Audio("sounds/tom-3.mp3");
                   tom3.play();
                 //  this.style.color="white";
                   break;

                   case 'd':
                       var tom4 = new Audio("sounds/tom-4.mp3");
                       tom4.play();
                     //  this.style.color="white";
                       break;

                       case 'j':
                           var snare = new Audio("sounds/snare.mp3");
                           snare.play();
                        //   this.style.color="white";
                           break;

                           case 'k':
                               var crash = new Audio("sounds/crash.mp3");
                               crash.play();
                            //   this.style.color="white";
                               break;

                               case 'l':
                                   var kick_bass = new Audio("sounds/kick-bass.mp3");
                                   kick_bass.play();
                                //   this.style.color="white";
                                   break;

                                   default: console.log(buttoninnerHTML);
   }  
}

function buttonAnimation(currKey){

    var activeButton=document.querySelector("." + currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){  activeButton.classList.remove("pressed");} ,100);
  
}
