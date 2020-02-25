var gameButton = document.getElementById("btn-roll");
var gameButton2 = document.getElementById("btn-roll-2");
var game__container = document.getElementById('tapgame__container');
var game__tableRow6 = document.getElementById("game__table-row6");
var game__tableRow5 = document.getElementById("game__table-row5");
var game__tableRow4 = document.getElementById("game__table-row4");
var game__tableRow3 = document.getElementById("game__table-row3");
var game__tableRow2 = document.getElementById("game__table-row2");
var game__tableRow1 = document.getElementById("game__table-row1");
var game__table2Row6 = document.getElementById("game__table2-row6");
var game__table2Row5 = document.getElementById("game__table2-row5");
var game__table2Row4 = document.getElementById("game__table2-row4");
var game__table2Row3 = document.getElementById("game__table2-row3");
var game__table2Row2 = document.getElementById("game__table2-row2");
var game__table2Row1 = document.getElementById("game__table2-row1");


gameButton.addEventListener('touchstart',function(){
	gamestart();
});

gameButton2.addEventListener('touchstart',function(){
	gamestart();
});

function gamestart () {
	gameButton.style.display= `none`;
	gameButton2.style.display= `none`;
	clearTable();

setTimeout(function(){
   // 1. Random number
	    let dice = Math.floor(Math.random() * 6) + 1;

	    // 2. Display the result
	    let diceDOM = document.querySelector(".dice");
	    diceDOM.style.display = "block";
	    diceDOM.src = "assets/games/dice/" + "dice-" + dice + ".png";
}, 100);
setTimeout(function(){
   // 1. Random number
	    let dice = Math.floor(Math.random() * 6) + 1;

	    // 2. Display the result
	    let diceDOM = document.querySelector(".dice");
	    diceDOM.style.display = "block";
	    diceDOM.src = "assets/games/dice/" + "dice-" + dice + ".png";
}, 300);
setTimeout(function(){
   // 1. Random number
	    let dice = Math.floor(Math.random() * 6) + 1;

	    // 2. Display the result
	    let diceDOM = document.querySelector(".dice");
	    diceDOM.style.display = "block";
	    diceDOM.src = "assets/games/dice/" + "dice-" + dice + ".png";
}, 500);
setTimeout(function(){
   // 1. Random number
	    let dice = Math.floor(Math.random() * 6) + 1;

	    // 2. Display the result
	    let diceDOM = document.querySelector(".dice");
	    diceDOM.style.display = "block";
	    diceDOM.src = "assets/games/dice/" + "dice-" + dice + ".png";
}, 700);
setTimeout(function(){
   // 1. Random number
	    let dice = Math.floor(Math.random() * 6) + 1;

	    // 2. Display the result
	    let diceDOM = document.querySelector(".dice");
	    diceDOM.style.display = "block";
	    diceDOM.src = "assets/games/dice/" + "dice-" + dice + ".png";
}, 900);

setTimeout(function(){
   // 1. Random number
	    let dice = Math.floor(Math.random() * 6) + 1;

	    // 2. Display the result
	    let diceDOM = document.querySelector(".dice");
	    diceDOM.style.display = "block";
	    diceDOM.src = "assets/games/dice/" + "dice-" + dice + ".png";

	    gameButton.style.display= `block`;
	    gameButton2.style.display= `block`;

	     switch(dice) {
	     	case 1:
	   		 game__tableRow6.style.background= `#2F605D`;
	   		 game__tableRow6.style.animation= `blinking 6s linear infinite`;
	   		 game__table2Row6.style.background= `#2F605D`;
	   		 game__table2Row6.style.animation= `blinking 6s linear infinite`;
	   		 break;
	   		 case 2:
	   		 game__tableRow5.style.background= `#2F605D`;
	   		 game__tableRow5.style.animation= `blinking 6s linear infinite`;
	   		 game__table2Row5.style.background= `#2F605D`;
	   		 game__table2Row5.style.animation= `blinking 6s linear infinite`;
	   		 break;
	   		 case 3:
	   		 game__tableRow4.style.background= `#2F605D`;
	   		 game__tableRow4.style.animation= `blinking 6s linear infinite`;
	   		 game__table2Row4.style.background= `#2F605D`;
	   		 game__table2Row4.style.animation= `blinking 6s linear infinite`;
	   		 break;
	   		 case 4:
	   		 game__tableRow3.style.background= `#2F605D`;
	   		 game__tableRow3.style.animation= `blinking 6s linear infinite`;
	   		 game__table2Row3.style.background= `#2F605D`;
	   		 game__table2Row3.style.animation= `blinking 6s linear infinite`;
	   		 break;
	   		 case 5:
	   		 game__tableRow2.style.background= `#2F605D`;
	   		 game__tableRow2.style.animation= `blinking 6s linear infinite`;
	   		 game__table2Row2.style.background= `#2F605D`;
	   		 game__table2Row2.style.animation= `blinking 6s linear infinite`;
	   		 break;
	   		 case 6:
	   		 game__tableRow1.style.background= `#2F605D`;
	   		 game__tableRow1.style.animation= `blinking 6s linear infinite`;
	   		 game__table2Row1.style.background= `#2F605D`;
	   		 game__table2Row1.style.animation= `blinking 6s linear infinite`;
	   		 break;
	     }
	    
}, 1100);

}

function clearTable() {

game__tableRow6.style.background= `transparent`;
game__tableRow6.style.animation= `none`;

game__tableRow5.style.background= `transparent`;
game__tableRow5.style.animation= `none`;

game__tableRow4.style.background= `transparent`;
game__tableRow4.style.animation= `none`;

game__tableRow3.style.background= `transparent`;
game__tableRow3.style.animation= `none`;

game__tableRow2.style.background= `transparent`;
game__tableRow2.style.animation= `none`;

game__tableRow1.style.background= `transparent`;
game__tableRow1.style.animation= `none`;

game__table2Row6.style.background= `transparent`;
game__table2Row6.style.animation= `none`;

game__table2Row5.style.background= `transparent`;
game__table2Row5.style.animation= `none`;

game__table2Row4.style.background= `transparent`;
game__table2Row4.style.animation= `none`;

game__table2Row3.style.background= `transparent`;
game__table2Row3.style.animation= `none`;

game__table2Row2.style.background= `transparent`;
game__table2Row2.style.animation= `none`;

game__table2Row1.style.background= `transparent`;
game__table2Row1.style.animation= `none`;
}