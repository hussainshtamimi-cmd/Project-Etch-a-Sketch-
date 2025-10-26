

let container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "640px";
container.style.height = "640px";
container.style.border = "1px solid black";






function createsquare(){

let square = document.createElement("div");
square.style.width = "40px";
square.style.height = "40px";
square.style.backgroundColor = "white";
square.style.boxSizing = "border-box";
square.style.border = "1px solid #0f560aff";
container.appendChild(square);
square.addEventListener("mousemove", function(){
    square.style.backgroundColor = "black";
})

}




for(let i=0; i<256; i++){
createsquare();
}




let button = document.createElement("button");
button.textContent = "Reset";

button.style.backgroundColor = "#0f560a";   // لون الخلفية
button.style.color = "white";               // لون النص
button.style.fontSize = "18px";             // حجم الخط
button.style.fontWeight = "bold";           // الخط عريض
button.style.padding = "10px 25px";         // مسافة داخلية
button.style.border = "none";               // بدون إطار
button.style.borderRadius = "8px";          // زوايا دائرية
button.style.cursor = "pointer";            // شكل اليد عند المرور
button.style.margin = "15px";               // مسافة حول الزر
button.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)"; // ظل خفيف
button.style.transition = "0.3s";   



button.addEventListener("click", function(){
   let input = prompt("Enter number of squares per side:");

    if(!(input >= 1 && input <= 100)){
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
    square.style.backgroundColor = "black";
})



}








    }




}
);
    
document.body.prepend(button);