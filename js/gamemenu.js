// declare variable
  var trigMenu__game = document.getElementById("trig-menu__game");
  var menu__gamelist = document.getElementById("menu__gamelist");
  var trigMenu__game1 = document.getElementById("trig-menu__game1");
  var trigMenu__game2 = document.getElementById("trig-menu__game2");
  var trigMenu__game3 = document.getElementById("trig-menu__game3");
  var game__popup = document.getElementById("game__Popup");
  var mainBottle__container1 = document.getElementById('mainBottle__container-1');
  var mainBottle__container2 = document.getElementById('mainBottle__container-2');
  var mainBottle__container1_OP = document.getElementById('mainBottle__container-1_OP');
  var mainBottle__container2_OP = document.getElementById('mainBottle__container-2_OP');

  var trigMenu__explore = document.getElementById("trig-menu__explore");
  var trigMenu__promotion = document.getElementById("trig-menu__promotion");


// Menu logo to screen saver
function toScreenSaver() {
  explore__container.style.display = "none";
  mainsceen__fireworks.style.display = `block`;
  menu__gamelist.style.display = `none`;
  tapgame__container.style.display = "none";
  dicegame__container.style.display = "none";
  flipgame__container.style.display = "none";
  promotion__container.style.display = "none";
}

// Menu explore
trigMenu__explore.addEventListener('touchstart', function(e){
      trigExplore();
    });


// trig explore
function trigExplore()
{
  if(isContentActive!=1){
  explore__container.style.display = "block";
  mainsceen__fireworks.style.display = `none`;
  menu__gamelist.style.display = `none`;
  tapgame__container.style.display = "none";
  dicegame__container.style.display = "none";
  flipgame__container.style.display = "none";
  promotion__container.style.display = "none";
  resetExplore();
  resetExploreOPS();
  // game__popup.classList.remove("show");

  var video = document.getElementById('video');
            video.style.display = "none";
}else {

  }
}

// Reset explore
function resetExplore () {
  mainBottle__container2.style.display = "none";
  mainBottle__container1.style.display = "none";
  mainBottle__container2_OP.style.display = "none";
  mainBottle__container1_OP.style.display = "none";
  exploreHeader.style.display = 'block';
  exploreBody.style.display = 'block';
  explore_button1.style.display = 'block';
  explore_button2.style.display = 'block';

  // bottle 1
  var bottleContent__courvoisier1 = document.getElementById('bottleContent__courvoisier-1');
  bottleContent__courvoisier1.style.display = `none`;
  var bottleContent__courvoisier2 = document.getElementById('bottleContent__courvoisier-2');
  bottleContent__courvoisier2.style.display = `none`;
  var bottleContent__courvoisier3 = document.getElementById('bottleContent__courvoisier-3');
  bottleContent__courvoisier3.style.display = `none`;
   var bottleContent__courvoisier3_1 = document.getElementById('bottleContent__courvoisier-3-1');
  bottleContent__courvoisier3_1.style.display = `none`;
   var bottleContent__courvoisier3_2 = document.getElementById('bottleContent__courvoisier-3-2');
  bottleContent__courvoisier3_2.style.display = `none`;
   var bottleContent__courvoisier3_3 = document.getElementById('bottleContent__courvoisier-3-3');
  bottleContent__courvoisier3_3.style.display = `none`;
   var bottleContent__courvoisier3_4 = document.getElementById('bottleContent__courvoisier-3-4');
  bottleContent__courvoisier3_4.style.display = `none`;

  var loader1_1 = document.getElementById('bottleButton__loader-1');
  loader1_1.style.animation =`none`;
  var loader1_2 = document.getElementById('bottleButton__loader-2');
  loader1_2.style.animation =`none`;
  var loader1_3 = document.getElementById('bottleButton__loader-3');
  loader1_3.style.animation =`none`;

  var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1');
  bottleLoaderContainer1.style.transform =`scale(0)`;
  bottleLoaderContainer1.style.transition =`0s`;
  var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2');
  bottleLoaderContainer2.style.transform =`scale(0)`;
  bottleLoaderContainer2.style.transition =`0s`;
  var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3');
  bottleLoaderContainer3.style.transform =`scale(0)`;
  bottleLoaderContainer3.style.transition =`0s`;

  // bottle 2
  var bottle1LoaderContainer1 = document.getElementById('bottle1_loadercontainer1');
  bottle1LoaderContainer1.style.transform =`scale(0)`;
  bottle1LoaderContainer1.style.transition =`0s`;
  var bottle1LoaderContainer2 = document.getElementById('bottle1_loadercontainer2');
  bottle1LoaderContainer2.style.transform =`scale(0)`;
  bottle1LoaderContainer2.style.transition =`0s`;
  var bottle1LoaderContainer3 = document.getElementById('bottle1_loadercontainer3');
  bottle1LoaderContainer3.style.transform =`scale(0)`;
  bottle1LoaderContainer3.style.transition =`0s`;
  bottleBaseImg_loadercontainer2.style.width = '100px';
  bottleBaseImg_loadercontainer2.style.transition = '3s';

  // content
  var bottleContent1__courvoisier1 = document.getElementById('bottleContent1__courvoisier-1');
  bottleContent1__courvoisier1.style.display = `none`;
  var bottleContent1__courvoisier2 = document.getElementById('bottleContent1__courvoisier-2');
  bottleContent1__courvoisier2.style.display = `none`;
  var bottleContent1__courvoisier3 = document.getElementById('bottleContent1__courvoisier-3');
  bottleContent1__courvoisier3.style.display = `none`;
   var bottleContent1__courvoisier3_1 = document.getElementById('bottleContent1__courvoisier-3-1');
  bottleContent1__courvoisier3_1.style.display = `none`;
   var bottleContent1__courvoisier3_2 = document.getElementById('bottleContent1__courvoisier-3-2');
  bottleContent1__courvoisier3_2.style.display = `none`;
   var bottleContent1__courvoisier3_3 = document.getElementById('bottleContent1__courvoisier-3-3');
  bottleContent1__courvoisier3_3.style.display = `none`;
   var bottleContent1__courvoisier3_4 = document.getElementById('bottleContent1__courvoisier-3-4');
  bottleContent1__courvoisier3_4.style.display = `none`;

  var loader2_1 = document.getElementById('bottleButton1__loader-1');
  loader2_1.style.animation =`none`;
  var loader2_1 = document.getElementById('bottleButton1__loader-2');
  loader2_1.style.animation =`none`;
  var loader2_1 = document.getElementById('bottleButton1__loader-3');
  loader2_1.style.animation =`none`;
}

function resetExploreOPS () {

  // bottle 1
  var bottleContent__courvoisier1 = document.getElementById('bottleContent__courvoisier-1_OP');
  bottleContent__courvoisier1.style.display = `none`;
  var bottleContent__courvoisier2 = document.getElementById('bottleContent__courvoisier-2_OP');
  bottleContent__courvoisier2.style.display = `none`;
  var bottleContent__courvoisier3 = document.getElementById('bottleContent__courvoisier-3_OP');
  bottleContent__courvoisier3.style.display = `none`;
  var bottleContent__courvoisier3_1_OP = document.getElementById('bottleContent__courvoisier-3-1_OP');
  bottleContent__courvoisier3_1_OP.style.display = `none`;
   var bottleContent__courvoisier3_2_OP = document.getElementById('bottleContent__courvoisier-3-2_OP');
  bottleContent__courvoisier3_2_OP.style.display = `none`;
   var bottleContent__courvoisier3_3_OP = document.getElementById('bottleContent__courvoisier-3-3_OP');
  bottleContent__courvoisier3_3_OP.style.display = `none`;
   var bottleContent__courvoisier3_4_OP = document.getElementById('bottleContent__courvoisier-3-4_OP');
  bottleContent__courvoisier3_4_OP.style.display = `none`;

  var loader1_1 = document.getElementById('bottleButton__loader-1_OP');
  loader1_1.style.animation =`none`;
  var loader1_2 = document.getElementById('bottleButton__loader-2_OP');
  loader1_2.style.animation =`none`;
  var loader1_3 = document.getElementById('bottleButton__loader-3_OP');
  loader1_3.style.animation =`none`;

  var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1_OP');
  bottleLoaderContainer1.style.transform =`scale(0)`;
  bottleLoaderContainer1.style.transition =`0s`;
  var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2_OP');
  bottleLoaderContainer2.style.transform =`scale(0)`;
  bottleLoaderContainer2.style.transition =`0s`;
  var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3_OP');
  bottleLoaderContainer3.style.transform =`scale(0)`;
  bottleLoaderContainer3.style.transition =`0s`;

  // bottle 2
  var bottle1LoaderContainer1 = document.getElementById('bottle1_loadercontainer1_OP');
  bottle1LoaderContainer1.style.transform =`scale(0)`;
  bottle1LoaderContainer1.style.transition =`0s`;
  var bottle1LoaderContainer2 = document.getElementById('bottle1_loadercontainer2_OP');
  bottle1LoaderContainer2.style.transform =`scale(0)`;
  bottle1LoaderContainer2.style.transition =`0s`;
  var bottle1LoaderContainer3 = document.getElementById('bottle1_loadercontainer3_OP');
  bottle1LoaderContainer3.style.transform =`scale(0)`;
  bottle1LoaderContainer3.style.transition =`0s`;
  bottleBaseImg_loadercontainer2_OP.style.width = '100px';
  bottleBaseImg_loadercontainer2_OP.style.transition = '3s';

  // content
  var bottleContent1__courvoisier1 = document.getElementById('bottleContent1__courvoisier-1_OP');
  bottleContent1__courvoisier1.style.display = `none`;
  var bottleContent1__courvoisier2 = document.getElementById('bottleContent1__courvoisier-2_OP');
  bottleContent1__courvoisier2.style.display = `none`;
  var bottleContent1__courvoisier3 = document.getElementById('bottleContent1__courvoisier-3_OP');
  bottleContent1__courvoisier3.style.display = `none`;
  var bottleContent1__courvoisier3_1_OP = document.getElementById('bottleContent1__courvoisier-3-1_OP');
  bottleContent1__courvoisier3_1_OP.style.display = `none`;
   var bottleContent1__courvoisier3_2_OP = document.getElementById('bottleContent1__courvoisier-3-2_OP');
  bottleContent1__courvoisier3_2_OP.style.display = `none`;
   var bottleContent1__courvoisier3_3_OP = document.getElementById('bottleContent1__courvoisier-3-3_OP');
  bottleContent1__courvoisier3_3_OP.style.display = `none`;
   var bottleContent1__courvoisier3_4_OP = document.getElementById('bottleContent1__courvoisier-3-4_OP');
  bottleContent1__courvoisier3_4_OP.style.display = `none`;

  var loader2_1 = document.getElementById('bottleButton1__loader-1_OP');
  loader2_1.style.animation =`none`;
  var loader2_1 = document.getElementById('bottleButton1__loader-2_OP');
  loader2_1.style.animation =`none`;
  var loader2_1 = document.getElementById('bottleButton1__loader-3_OP');
  loader2_1.style.animation =`none`;
}

// Menu promotion
trigMenu__promotion.addEventListener('touchstart', function(e){
      trigPromotion();
    });

// trig promotion
function trigPromotion()
{
  if(isContentActive!=1){
    mainBottle__container2.style.display = "none";
  mainBottle__container1.style.display = "none";
  mainBottle__container2_OP.style.display = "none";
  mainBottle__container1_OP.style.display = "none";
  explore__container.style.display = "none";
  mainsceen__fireworks.style.display = `none`;
  menu__gamelist.style.display = `none`;
  tapgame__container.style.display = "none";
  dicegame__container.style.display = "none";
  flipgame__container.style.display = "none";
  promotion__container.style.display = "block"
  // game__popup.classList.remove("show");

  var video = document.getElementById('video');
            video.style.display = "none";
}else {

  }
}

// Menu game
trigMenu__game.addEventListener('touchstart', function(e){
      trigGame();
    });


// trig game menu
function trigGame()
{
  if(isContentActive!=1){
    mainBottle__container2.style.display = "none";
  mainBottle__container1.style.display = "none";
  mainBottle__container2_OP.style.display = "none";
  mainBottle__container1_OP.style.display = "none";
  mainsceen__fireworks.style.display = `none`;
    game__popup.classList.remove("show");
    menu__gamelist.style.display = `block`;
    tapgame__container.style.display = "none";
  dicegame__container.style.display = "none";
  flipgame__container.style.display = "none";
  explore__container.style.display = "none";
  promotion__container.style.display = "none";
  // newBoard();
  clearTable();
  restartGame();
  var video = document.getElementById('video');
            video.style.display = "none";
}else {
    game__popup.classList.add("show");
  }
}

trigMenu__game1.addEventListener('touchstart', function(e){
      trigGame1();
    });

trigMenu__game2.addEventListener('touchstart', function(e){
      trigGame2();
    });

trigMenu__game3.addEventListener('touchstart', function(e){
      trigGame3();
    });

// trig games
function trigGame1()
{
  if(isContentActive!=1){
    menu__gamelist.style.display = `none`;
  dicegame__container.style.display = "block";
  explore__container.style.display = "none";
  var video = document.getElementById('video');
            video.style.display = "none";
}
}

function trigGame2()
{
  if(isContentActive!=1){
    flipStartGame();
    menu__gamelist.style.display = `none`;
  flipgame__container.style.display = "block";
  explore__container.style.display = "none";
  var video = document.getElementById('video');
            video.style.display = "none";
}
}

function trigGame3()
{
  restartGame();
  if(isContentActive!=1){
    tapgamerestart = 0;
    menu__gamelist.style.display = `none`;
  tapgame__container.style.display = "block";
  explore__container.style.display = "none";
  var video = document.getElementById('video');
            video.style.display = "none";
}
}
