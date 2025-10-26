

let container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "640px";
container.style.height = "640px";
container.style.border = "1px solid black";




let squareColor = "blue";


function createsquare(){

let square = document.createElement("div");
square.style.width = "40px";
square.style.height = "40px";
square.style.backgroundColor = "white";
square.style.boxSizing = "border-box";
square.style.border = "1px solid #0f560aff";
container.appendChild(square);
square.addEventListener("mousemove", function(){
    square.style.backgroundColor = squareColor;
})

}




for(let i=0; i<256; i++){
createsquare();
}




///////////////////////////////////////////////////////////////////////////////


let Reset = document.createElement("button");
Reset.textContent = "Reset";

Reset.style.backgroundColor = "#0f560a";  
Reset.style.color = "white";               
Reset.style.fontSize = "18px";             
Reset.style.fontWeight = "bold";          
Reset.style.padding = "10px 25px";        
Reset.style.border = "none";               
Reset.style.borderRadius = "8px";          
Reset.style.cursor = "pointer";            
Reset.style.margin = "15px";               
Reset.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)"; 
Reset.style.transition = "0.3s";   






Reset.addEventListener("click", function(){
   let input = prompt("Enter number of squares per side:");

    if(!(input >= 1 && input <= 60)){
        alert("Please enter a number between 1 and 100.");
        return;


    }else{

    let numberOfSquares = parseInt(input); 

 container.innerHTML = "";

let squareSize = Math.floor(640 / numberOfSquares);
container.style.width = (squareSize * numberOfSquares) + "px";
container.style.height = (squareSize * numberOfSquares) + "px";

for(let i=0; i<(numberOfSquares*numberOfSquares); i++){


let square = document.createElement("div");
square.style.width = Math.floor(640/numberOfSquares) + "px";
square.style.height = Math.floor(640/numberOfSquares) + "px";
square.style.backgroundColor = "white";
square.style.boxSizing = "border-box";
square.style.border = "1px solid #0f560aff";


container.appendChild(square);


square.addEventListener("mousemove", function(){
    square.style.backgroundColor = squareColor;
})



}



    }




}
);






/////////////////////////////////////////////////////////////////////////////////////////


let choosColor = document.createElement("button");
choosColor.textContent = "choosColor";

choosColor.style.backgroundColor = "#0f560a";  
choosColor.style.color = "white";               
choosColor.style.fontSize = "18px";             
choosColor.style.fontWeight = "bold";          
choosColor.style.padding = "10px 25px";        
choosColor.style.border = "none";               
choosColor.style.borderRadius = "8px";          
choosColor.style.cursor = "pointer";            
choosColor.style.margin = "15px";               
choosColor.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)"; 
choosColor.style.transition = "0.3s";   


choosColor.addEventListener("click", function(){

    colorPicker.click(); 

});

document.querySelector("#colorPicker").addEventListener("input", ()=>{
    squareColor = document.querySelector("#colorPicker").value;
});
  


let buttons = document.querySelector(".buttons");

/////////////////////////////////////////////////////////////////////////////////////



 



let randomColor = document.createElement("button");
randomColor.textContent = "randomColor";

randomColor.style.backgroundColor = "#0f560a";  
randomColor.style.color = "white";               
randomColor.style.fontSize = "18px";             
randomColor.style.fontWeight = "bold";          
randomColor.style.padding = "10px 25px";        
randomColor.style.border = "none";               
randomColor.style.borderRadius = "8px";          
randomColor.style.cursor = "pointer";            
randomColor.style.margin = "15px";               
randomColor.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)"; 
randomColor.style.transition = "0.3s";   




  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }


  
randomColor.addEventListener("click", function(){

    squareColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

});


////////////////////////////////////////////////////////////////////////

buttons.appendChild(Reset);
buttons.appendChild(choosColor);
buttons.appendChild(randomColor);
