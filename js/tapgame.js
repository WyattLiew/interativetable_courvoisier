 // tap game declare varible
    var playerA_button = document.getElementById('playerA_button');
    var playerB_button = document.getElementById('playerB_button');
    var tapgame_start = document.getElementById('tapgame_start');
    var tapgame_guide = document.getElementById('tapgame__guide');
    var tapgame_playagain = document.getElementById('tapgame_playagain');

    let isTapGameActive = 0;
    let tapgamerestart = 0;

    var count = 38;
    var countB = 38;
    function playerA() {
      if(count > 73){

      } else {
        var playerA_board= document.getElementById('playerA_board');
        count+=1;
        playerA_board.style.width=`${count}%`;
        var playerB_board= document.getElementById('playerB_board');
        countB-=1;
        playerB_board.style.width=`${countB}%`;
      }
    }

    function playerB() {
      if(countB > 73){
        
      } else {
      var playerA_board= document.getElementById('playerA_board');
      count-=1;
      playerA_board.style.width=`${count}%`;
      var playerB_board= document.getElementById('playerB_board');
      countB+=1;
      playerB_board.style.width=`${countB}%`;
    }
    }

    function restartGame () {
      tapgame_start.style.display =`block`;
      tapgame_guide.style.display = `block`;
      tapgame_playagain.style.display = `none`;
       playerA_button.style.display = `none`;
      playerB_button.style.display = `none`;
      document.getElementById("tapgame__resultMode").style.display =`none`;
      document.getElementById("tapgame__readytime").innerHTML ="Ready";
      document.getElementById("tapgame__timeMode").style.display =`none`;
      var playerA_board= document.getElementById('playerA_board');
      playerA_board.style.width=`38%`;
      var playerB_board= document.getElementById('playerB_board');
      playerB_board.style.width=`38%`;
      count = 38;
      countB = 38;
      tapgamerestart = 1;
    }

    function startTapGame() {
      isTapGameActive = 1;
      tapgame_start.style.display =`none`;
      tapgame_guide.style.display = `none`;
      var playerA_board= document.getElementById('playerA_board');
      playerA_board.style.width=`38%`;
      var playerB_board= document.getElementById('playerB_board');
      playerB_board.style.width=`38%`;
      count = 38;
      countB = 38;
      countDownTime = 1000;
      countDownReadyTime = 400;
      startTapgameReadyTimer();
    }

    function playAgainTapGame() {
      isTapGameActive = 1;
      tapgame_playagain.style.display = `none`;
      var playerA_board= document.getElementById('playerA_board');
      playerA_board.style.width=`38%`;
      var playerB_board= document.getElementById('playerB_board');
      playerB_board.style.width=`38%`;
      count = 38;
      countB = 38;
      document.getElementById("tapgame__resultMode").style.display =`none`;
      document.getElementById("tapgame__readytime").innerHTML ="Ready";
      countDownReadyTime = 400;
      startTapgameReadyTimer();
    }

    // Set the date we're counting down to
    var countDownReadyTime = 400;

    function startTapgameReadyTimer() {

    document.getElementById("tapgame__readytimeMode").style.display =`block`;

    // Update the count down every 1 second
    var tapGameReadyTimer = setInterval(function() {

    // Get today's date and time
    var now = 100;
      
    // Find the distance between now and the count down date
    var distance = countDownReadyTime - now;
      
    // Time calculations for days, hours, minutes and seconds
   
    var seconds = Math.floor((distance % (100 * 60)) / 100);
      
    // Output the result in an element with id="demo"
    document.getElementById("tapgame__readytime").innerHTML = "&nbsp &nbsp" + seconds;
    
    countDownReadyTime -=100;
      
    // If the count down is over, write some text 
    if (distance < 1) {
      clearInterval(tapGameReadyTimer);
      document.getElementById("tapgame__readytimeMode").style.display =`none`;
      document.getElementById("tapgame__time").innerHTML = "Start";
      playerA_button.style.display = `block`;
      playerB_button.style.display = `block`;
      countDownTime = 1000;
      startTapgameTimer();
    }
    if (tapgamerestart==1) {
      clearInterval(tapGameReadyTimer);
      document.getElementById("tapgame__readytimeMode").style.display =`none`;
      document.getElementById("tapgame__readytime").innerHTML ="Ready";
      tapgamerestart = 0;
    }
  }, 1000);
}

    // Set the date we're counting down to
    var countDownTime = 1000;

    function startTapgameTimer() {

    document.getElementById("tapgame__timeMode").style.display =`block`;

    // Update the count down every 1 second
    var tapGameTimer = setInterval(function() {
      
    // Get today's date and time
    var secs = Math.floor(countDownTime/100);
    var tenth = countDownTime%100;
    
      countDownTime -=1;
    // Find the distance between now and the count down date

      
    // Time calculations for days, hours, minutes and seconds
  
    // Output the result in an element with id="demo"
    document.getElementById("tapgame__time").innerHTML = "0"+secs+ ":"+tenth;
    
    
      
    // If the count down is over, write some text 
    if (secs < 1) {
      isTapGameActive = 0;
      clearInterval(tapGameTimer);
      playerA_button.style.display = `none`;
      playerB_button.style.display = `none`;
      tapgame_playagain.style.display = `block`;
      document.getElementById("tapgame__timeMode").style.display =`none`;
      document.getElementById("tapgame__resultMode").style.display =`block`;
      if(count>countB) {
      document.getElementById("tapgame__result").innerHTML = "Player A Win!";
    }else if (count==countB) {
      document.getElementById("tapgame__result").innerHTML = `&nbsp &nbsp &nbsp Draw!`;
    }else {
      document.getElementById("tapgame__result").innerHTML = "Player B Win!";
    }
    }

    if (tapgamerestart==1) {
      clearInterval(tapGameTimer);
      tapgamerestart = 0;
      document.getElementById("tapgame__timeMode").style.display =`none`;
      document.getElementById("tapgame__readytime").innerHTML ="Ready";
    }
  }, 10);
}