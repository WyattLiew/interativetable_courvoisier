// Flip game js
// Declare varible
var flip_array = ['0','0','0','0','1','0','2','0','0','0','0','0','0','0','2','0','0','0'];
var flip_values = [];
var flip_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.flip_tile_shuffle = function() {
	var i = this.length, j, temp;
	while(--i > 0) {
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}

function flipStartGame() {
	var output = '';

	output += `<video id="flipgame__video" autoplay loop muted><source src="assets/video/flipgame2.mp4" type="video/mp4">Your browser does not support HTML5 video.</video>
	<div class="buttonStart__board">
       <button id="flipgame_start" ontouchstart="startFlipGame()">Start Game</button>
     </div>`;
		
	document.getElementById('flip_board').innerHTML = output;
}

function startFlipGame() {
	newBoard();
}

function newBoard() {
	tiles_flipped = 0;
	var output = '';

	flip_array.flip_tile_shuffle();
		for (var i =0 ; i < flip_array.length; i++) {
			output += '<div id="tile_'+i+'"class="flipgame__bottle" ontouchstart="flipTile(this,\''+flip_array[i]+'\')"></div>';
		}
		document.getElementById('flip_board').innerHTML = output;

		 // randomNum = Math.floor(Math.random()*Math.floor(2)+1);
	// 	 randomNum =2;
	// 	 if (randomNum == 1) {
	// 	for (var i =0 ; i < flip_array.length; i++) {
	// 			document.getElementById(`tile_${i}`).style.background = `url(assets/games/flip/courvoisier-${2}.png) no-repeat`;
	// 			document.getElementById(`tile_${i}`).style.backgroundSize = `contain`;
	// 			document.getElementById(`tile_${i}`).style.backgroundPosition = `center`;
	// 	}
	// } else {
	// 	for (var i =0 ; i < flip_array.length; i++) {
	// 			document.getElementById(`tile_${i}`).style.background = `url(assets/games/flip/courvoisier-${1}.png) no-repeat`;
	// 			document.getElementById(`tile_${i}`).style.backgroundSize = `contain`;
	// 			document.getElementById(`tile_${i}`).style.backgroundPosition = `center`;
	// 	}
	// }
			

	}

let ended = 0;
function flipTile(tile,val) {
	if (tile.innerHTML=="") {
		if (val == '2') {
			tile.style.background = "transparent";
			tile.innerHTML = `<div class="flipgame__tile">drink up!</div><img class="flipgame__tileImg" src="assets/games/flip/beercup.png">`;
			tiles_flipped +=1;
		} else if (val == '1') {
			tile.style.background = "transparent";
			tile.innerHTML = `<div class="flipgame__tile2">drink up!</div><img class="flipgame__tileImg" src="assets/games/flip/beercup.png">`;
			tiles_flipped +=1;
		}
		else{
		tile.style.background = "transparent";
		tile.innerHTML ="";
		tiles_flipped +=1;
	}
	// setTimeout(checkIfFinished,1000);
	if(tiles_flipped == 18 && ended == 0){
	ended =1;
	checkIfFinished();
	}
	}
}

function checkIfFinished() {
		var timer = 500;
		
		var flipGameTimer = setInterval(function() {

			timer -= 100;
			if (timer<100) {
				clearInterval(flipGameTimer);
				document.getElementById('flip_board').innerHTML = "";
				newBoard();
				tiles_flipped =0;
				ended = 0;
			}
		},500);
}

// newBoard();
flipStartGame();