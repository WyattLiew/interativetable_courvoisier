
    // disable rightclick
    document.addEventListener('contextmenu', event => event.preventDefault());

    var isContentActive = 0;

//     function startTimer (duration) {
//       var timer = duration,minutes,seconds;
      
//       var startNow = setInterval(function () {
//         minutes = parseInt(timer / 60,10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes:minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
// console.log(timer);
//         // display.textContent = minutes + ":" + seconds;
//         if (--timer < 0) {
//           timer = duration;
//           console.log("timeup");
//           var video = document.getElementById('video');
//             video.style.display = "block";
//             clearInterval(startNow);
//         }

//       },1000);
//     }

    // timer declare
    var timeoutInMiliseconds = 120000;
    var timeoutId; 
      
    function startTimer() { 
        // window.setTimeout returns an Id that can be used to start and stop a timer
        timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
    }
      
    function doInactive() {
        // does whatever you need it to actually do - probably signs them out or stops polling the server for info
         // var video = document.getElementById('video');
         //    video.style.display = "block";

        // clear all the content
        var loader = document.getElementById('bottleButton__loader-2');
        loader.style.animation =`none`;
        var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-2');
        bottleContent__courvoisier.style.display = `none`;

        var loader = document.getElementById('bottleButton__loader-1');
        loader.style.animation =`none`;
        var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-1');
        bottleContent__courvoisier.style.display = `none`;

         var loader = document.getElementById('bottleButton__loader-3');
        loader.style.animation =`none`;
        var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-3');
        bottleContent__courvoisier.style.display = `none`;

        bottleContent__courvoisierSub_1.style.display = `none`;
        bottleContent__courvoisierSub_2.style.display = `none`;
        bottleContent__courvoisierSub_3.style.display = `none`;
        bottleContent__courvoisierSub_4.style.display = `none`;

        bottleContent1__courvoisierSub_1.style.display = `none`;
        bottleContent1__courvoisierSub_2.style.display = `none`;
        bottleContent1__courvoisierSub_3.style.display = `none`;
        bottleContent1__courvoisierSub_4.style.display = `none`;

        bottleContent2__courvoisierSub_1.style.display = `none`;
        bottleContent2__courvoisierSub_2.style.display = `none`;
        bottleContent2__courvoisierSub_3.style.display = `none`;
        bottleContent2__courvoisierSub_4.style.display = `none`;

        menu__gamelist.style.display = `none`;
        tapgame__container.style.display = "none";
        dicegame__container.style.display = "none";
        flipgame__container.style.display = "none";
        explore__container.style.display = "none";
        mainsceen__fireworks.style.display = `block`;

        isContentActive = 0;
        game__popup.classList.remove("show");
        window.human = false;
        autoClick();
    }
     
   function resetTimer() { 
    window.clearTimeout(timeoutId)
    if(isContentActive==0) {
      startTimer();
    }
    }

    function setupTimers () {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("keypress", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);
        document.addEventListener("touchend", resetTimer, false);
        document.addEventListener("touchstart", resetTimer, false);
         

        startTimer();
    }

    // start timer
    setupTimers();
          

    (function() {


    //   // define angles
    //    // var apexAngles = [18, 36, 54, 72, 90, 108, 126, 144];
    //    var apexAngles = [144,79];

    //   // // create headlines (Testing) here
    //   // for(var i = 0; i < apexAngles.length; i++) {
    //   //   document.getElementById('detect-' + i + '-head').innerHTML = ('#' + (i+1) + ' (' + apexAngles[i] + '&deg;)');
    //   // }

    //   // create recognizer instance
    //   var R = new tritra.Recognizer(apexAngles, {

    //     /*
    //       Apex angles have a distance of 18 degrees each therefore we choose
    //       18 / 2 = 9 degrees of tolerance to each side. You can go lower than
    //       that if your application doesn't require markers to be moved quickly.
    //     */
    //     maxAngleTolerance: 9,

    //     /*
    //       The maximum distance for two points to still be considered as part of
    //       the same triangle. You should adjust these according to your screen
    //       size and DPI. As a general rule, the larger the screen and the higher
    //       the DPI, the higher you should set this value.
    //       Do not set it too high though as this will cause two nearby markers to
    //       no longer be recognized. (170)
    //     */
    //     maxPointDistance: 50
    //   });

      var touchHandlerImpl = function(touches, eventType) {

    //     var points = [];
    //     for(var i = 0; i < touches.length; i++) {
    //       points.push(
    //         new tritra.Vector2d(touches[i].clientX, touches[i].clientY)
    //       );
    //     }

    //     // clear previous results (Testing) here
    //     // for(var i = 0; i < apexAngles.length; i++) {
    //     //   document.getElementById('detect-' + i + '-head').classList.remove('active');
    //     //   document.getElementById('detect-' + i).innerHTML = '';
    //     // }


    //     /*
    //       Find matching triangles

    //       IMPORTANT: For performance reasons you should NOT trigger this
    //       function directly from your touch events. Instead simply store the
    //       touch coordinates and synchronize the processing with the actual
    //       screen refresh rate (ex: 60hz) by using requestAnimationFrame()

    //       For achieving a really smooth user experience you should additionally
    //       outsource the triangle processing into a separate webworker process.
    //       This way you will be able to achieve a steady 60fps user experience.
    //     */
    //     var matches = R.findMatches(points);

    //     // clear all if not touch
    //     // if (matches.index!=="0" && matches.index !=="3" && matches.index !=="5") {
    //     //   // var mainBottle__container1 = document.getElementById('mainBottle__container-1');
    //     //   // mainBottle__container1.style.display = "none";
    //     //   // var mainBottle__container2 = document.getElementById('mainBottle__container-2');
    //     //   // mainBottle__container2.style.display = "none";
    //     //   // var mainBottle__container3 = document.getElementById('mainBottle__container-3');
    //     //   // mainBottle__container3.style.display = "none";
          
    //     //   // var testing2 = document.getElementById('testing2');
    //     //   // testing2.style.display = "none";
          
    //     //   isContentActive= 0;
    //     //   // var minutes = 60;
    //     //   // startTimer(minutes);
    //     // }
      
       
        
    //     // store match id
    //     var matchContainer  = [];
    //     let isBottle1Active =0, isBottle2Active =0;

    //     // highlight the new results
    //     matches.forEach(function(match) {

    //       var innerHtml = [];
    //       var center = match.getCenter();

    //       matchContainer.push(match.index);


    //         // (Testing) here
    //       // innerHtml.push('apex ang: ' + Math.round(match.getApexAngle()));
    //       // innerHtml.push('center pt: ' + Math.round(center.x) + ', ' + Math.round(center.y));
    //       // innerHtml.push('orient: ' + Math.round(match.getOrientation()) + '&deg;');
    //       // document.getElementById('detect-' + match.index + '-head').classList.add('active');
    //       // document.getElementById('detect-' + match.index).innerHTML = innerHtml.join('<br>');

          

    //       if(match.index == '1' && isTapGameActive == 0){
    //         if (Math.round(match.getOrientation()) >=0 && Math.round(match.getOrientation()) <=60) {

    //           var square__bottle1 = document.getElementById('square__bottle1');
    //       square__bottle1.style.transform =`rotate(0deg)`;

    //         isContentActive = 1;
    //         var video = document.getElementById('video');
    //         video.style.display = "none";
    //         menu__gamelist.style.display = `none`;
    //         var tapgame__container = document.getElementById('tapgame__container');
    //         tapgame__container.style.display = "none";
    //         var flipgame__container = document.getElementById('flipgame__container');
    //         flipgame__container.style.display = "none";
    //         var dicegame__container = document.getElementById('dicegame__container');
    //         dicegame__container.style.display = "none";
    //         var explore__container = document.getElementById('explore__container');
    //         explore__container.style.display = "none";

    //     var mainBottle__container1 = document.getElementById('mainBottle__container-1');
    //       mainBottle__container1.style.transform = `translate(${Math.round(center.x)-110}px,${Math.round(center.y)+20}px)`;
    //       mainBottle__container1.style.display = "block";

    //       setTimeout(function(){
    //      var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1');
    //       bottleLoaderContainer1.style.transform =`scale(1)`;
    //       bottleLoaderContainer1.style.transition =`2s`;
    //       var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2');
    //       bottleLoaderContainer2.style.transform =`scale(1)`;
    //       bottleLoaderContainer2.style.transition =`2s 0.5s`;
    //       var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3');
    //       bottleLoaderContainer3.style.transform =`scale(1)`;
    //       bottleLoaderContainer3.style.transition =`2s 1s`;
    //   },200)
           
    //        }else if (Math.round(match.getOrientation()) >60 && Math.round(match.getOrientation()) <=180) {

    //           var square__bottle1 = document.getElementById('square__bottle1');
    //       square__bottle1.style.transform =`rotate(0deg)`;

    //         isContentActive = 1;
    //         var video = document.getElementById('video');
    //         video.style.display = "none";
    //         menu__gamelist.style.display = `none`;
    //         var tapgame__container = document.getElementById('tapgame__container');
    //         tapgame__container.style.display = "none";
    //         var flipgame__container = document.getElementById('flipgame__container');
    //         flipgame__container.style.display = "none";
    //         var dicegame__container = document.getElementById('dicegame__container');
    //         dicegame__container.style.display = "none";
    //         var explore__container = document.getElementById('explore__container');
    //         explore__container.style.display = "none";

    //     var mainBottle__container1 = document.getElementById('mainBottle__container-1');
    //       mainBottle__container1.style.transform = `translate(${Math.round(center.x)-120}px,${Math.round(center.y)+60}px)`;
    //       mainBottle__container1.style.display = "block";

    //       setTimeout(function(){
    //      var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1');
    //       bottleLoaderContainer1.style.transform =`scale(1)`;
    //       bottleLoaderContainer1.style.transition =`2s`;
    //       var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2');
    //       bottleLoaderContainer2.style.transform =`scale(1)`;
    //       bottleLoaderContainer2.style.transition =`2s 0.5s`;
    //       var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3');
    //       bottleLoaderContainer3.style.transform =`scale(1)`;
    //       bottleLoaderContainer3.style.transition =`2s 1s`;
    //   },200)
           
    //     }else if (Math.round(match.getOrientation()) <0 && Math.round(match.getOrientation()) <=-100) {
    //       var square__bottle1 = document.getElementById('square__bottle1');
    //       square__bottle1.style.transform =`rotate(180deg)`;
          

    //       isContentActive = 1;
    //         var video = document.getElementById('video');
    //         video.style.display = "none";
    //         menu__gamelist.style.display = `none`;
    //         var tapgame__container = document.getElementById('tapgame__container');
    //         tapgame__container.style.display = "none";
    //         var flipgame__container = document.getElementById('flipgame__container');
    //         flipgame__container.style.display = "none";
    //         var dicegame__container = document.getElementById('dicegame__container');
    //         dicegame__container.style.display = "none";
    //         var explore__container = document.getElementById('explore__container');
    //         explore__container.style.display = "none";

    //     var mainBottle__container1 = document.getElementById('mainBottle__container-1');
    //       mainBottle__container1.style.transform = `translate(${Math.round(center.x)-180}px,${Math.round(center.y)-120}px)`;
    //       mainBottle__container1.style.display = "block";
        

    //      setTimeout(function(){
    //      var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1');
    //       bottleLoaderContainer1.style.transform =`scale(1)`;
    //       bottleLoaderContainer1.style.transition =`2s`;
    //       var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2');
    //       bottleLoaderContainer2.style.transform =`scale(1)`;
    //       bottleLoaderContainer2.style.transition =`2s 0.5s`;
    //       var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3');
    //       bottleLoaderContainer3.style.transform =`scale(1)`;
    //       bottleLoaderContainer3.style.transition =`2s 1s`;
    //   },200)

    //     }
    //     else{
    //       var square__bottle1 = document.getElementById('square__bottle1');
    //       square__bottle1.style.transform =`rotate(180deg)`;
          

    //       isContentActive = 1;
    //         var video = document.getElementById('video');
    //         video.style.display = "none";
    //         menu__gamelist.style.display = `none`;
    //         var tapgame__container = document.getElementById('tapgame__container');
    //         tapgame__container.style.display = "none";
    //         var flipgame__container = document.getElementById('flipgame__container');
    //         flipgame__container.style.display = "none";
    //         var dicegame__container = document.getElementById('dicegame__container');
    //         dicegame__container.style.display = "none";
    //         var explore__container = document.getElementById('explore__container');
    //         explore__container.style.display = "none";

    //     var mainBottle__container1 = document.getElementById('mainBottle__container-1');
    //       mainBottle__container1.style.transform = `translate(${Math.round(center.x)-180}px,${Math.round(center.y)-150}px)`;
    //       mainBottle__container1.style.display = "block";
    //     }

    //      setTimeout(function(){
    //      var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1');
    //       bottleLoaderContainer1.style.transform =`scale(1)`;
    //       bottleLoaderContainer1.style.transition =`2s`;
    //       var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2');
    //       bottleLoaderContainer2.style.transform =`scale(1)`;
    //       bottleLoaderContainer2.style.transition =`2s 0.5s`;
    //       var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3');
    //       bottleLoaderContainer3.style.transform =`scale(1)`;
    //       bottleLoaderContainer3.style.transition =`2s 1s`;
    //   },200)

    //     //     if (Math.round(center.x)<="230" && Math.round(center.y)<="330"){
    //     //   var mainBottle__container1 = document.getElementById('mainBottle__container-1');
    //     //   mainBottle__container1.style.transform = `translate(${Math.round(center.x)-200}px,${Math.round(center.y)-200}px)`;
    //     //   mainBottle__container1.style.display = "block";

    //     //   var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1');
    //     //   bottleLoaderContainer1.style.left = `400px`;
    //     //   bottleLoaderContainer1.style.bottom =`78px`;
    //     //   bottleLoaderContainer1.style.transition =`2s`;

    //     //   var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2');
    //     //   bottleLoaderContainer2.style.left = `220px`;
    //     //   bottleLoaderContainer2.style.bottom =`-180px`;
    //     //   bottleLoaderContainer2.style.transition =`2s`;

    //     //   var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3');
    //     //   bottleLoaderContainer3.style.left = `-100px`;
    //     //   bottleLoaderContainer3.style.top =`400px`;
    //     //   bottleLoaderContainer3.style.transition =`2s`;
          

    //     // }
    //     } 

    //    if(match.index == '0' && isTapGameActive == 0){

    //     if (Math.round(match.getOrientation()) >=0 && Math.round(match.getOrientation()) <=60) {

    //       var square__bottle2 = document.getElementById('square__bottle2');
    //       square__bottle2.style.transform =`rotate(0deg)`;

    //       isContentActive = 1;
    //       var video = document.getElementById('video');
    //       video.style.display = "none";
    //       menu__gamelist.style.display = `none`;
    //       var tapgame__container = document.getElementById('tapgame__container');
    //       tapgame__container.style.display = "none";
    //       var flipgame__container = document.getElementById('flipgame__container');
    //         flipgame__container.style.display = "none";
    //         var dicegame__container = document.getElementById('dicegame__container');
    //         dicegame__container.style.display = "none";
    //       var explore__container = document.getElementById('explore__container');
    //       explore__container.style.display = "none";

    //       var mainBottle__container2 = document.getElementById('mainBottle__container-2');
    //       mainBottle__container2.style.transform = `translate(${Math.round(center.x)-110}px,${Math.round(center.y)+20}px)`;//-340 -220
    //       mainBottle__container2.style.display = "block";

    //       setTimeout(function(){
    //      var bottleLoaderContainer1 = document.getElementById('bottle1_loadercontainer1');
    //       bottleLoaderContainer1.style.transform =`scale(1)`;
    //       bottleLoaderContainer1.style.transition =`2s`;
    //       var bottleLoaderContainer2 = document.getElementById('bottle1_loadercontainer2');
    //       bottleLoaderContainer2.style.transform =`scale(1)`;
    //       bottleLoaderContainer2.style.transition =`2s 0.5s`;
    //       var bottleLoaderContainer3 = document.getElementById('bottle1_loadercontainer3');
    //       bottleLoaderContainer3.style.transform =`scale(1)`;
    //       bottleLoaderContainer3.style.transition =`2s 1s`;
    //   },200)
    //     }else if (Math.round(match.getOrientation()) >60 && Math.round(match.getOrientation()) <=180) {

    //       var square__bottle2 = document.getElementById('square__bottle2');
    //       square__bottle2.style.transform =`rotate(0deg)`;

    //       isContentActive = 1;
    //       var video = document.getElementById('video');
    //       video.style.display = "none";
    //       menu__gamelist.style.display = `none`;
    //       var tapgame__container = document.getElementById('tapgame__container');
    //       tapgame__container.style.display = "none";
    //       var flipgame__container = document.getElementById('flipgame__container');
    //         flipgame__container.style.display = "none";
    //         var dicegame__container = document.getElementById('dicegame__container');
    //         dicegame__container.style.display = "none";
    //       var explore__container = document.getElementById('explore__container');
    //       explore__container.style.display = "none";

    //       var mainBottle__container2 = document.getElementById('mainBottle__container-2');
    //       mainBottle__container2.style.transform = `translate(${Math.round(center.x)-120}px,${Math.round(center.y)+60}px)`;//-340 -220
    //       mainBottle__container2.style.display = "block";

    //       setTimeout(function(){
    //      var bottleLoaderContainer1 = document.getElementById('bottle1_loadercontainer1');
    //       bottleLoaderContainer1.style.transform =`scale(1)`;
    //       bottleLoaderContainer1.style.transition =`2s`;
    //       var bottleLoaderContainer2 = document.getElementById('bottle1_loadercontainer2');
    //       bottleLoaderContainer2.style.transform =`scale(1)`;
    //       bottleLoaderContainer2.style.transition =`2s 0.5s`;
    //       var bottleLoaderContainer3 = document.getElementById('bottle1_loadercontainer3');
    //       bottleLoaderContainer3.style.transform =`scale(1)`;
    //       bottleLoaderContainer3.style.transition =`2s 1s`;
    //   },200)
             
    //       }else if (Math.round(match.getOrientation()) <0 && Math.round(match.getOrientation()) <=-100) {
    //           var square__bottle2 = document.getElementById('square__bottle2');
    //           square__bottle2.style.transform =`rotate(180deg)`;

    //             isContentActive = 1;
    //           var video = document.getElementById('video');
    //           video.style.display = "none";
    //           menu__gamelist.style.display = `none`;
    //           var tapgame__container = document.getElementById('tapgame__container');
    //           tapgame__container.style.display = "none";
    //           var flipgame__container = document.getElementById('flipgame__container');
    //         flipgame__container.style.display = "none";
    //         var dicegame__container = document.getElementById('dicegame__container');
    //         dicegame__container.style.display = "none";
    //           var explore__container = document.getElementById('explore__container');
    //           explore__container.style.display = "none";

    //           var mainBottle__container2 = document.getElementById('mainBottle__container-2');
    //           mainBottle__container2.style.transform = `translate(${Math.round(center.x)-180}px,${Math.round(center.y)-120}px)`;//-260 -390
    //           mainBottle__container2.style.display = "block";

    //           setTimeout(function(){
    //          var bottleLoaderContainer1 = document.getElementById('bottle1_loadercontainer1');
    //           bottleLoaderContainer1.style.transform =`scale(1)`;
    //           bottleLoaderContainer1.style.transition =`2s`;
    //           var bottleLoaderContainer2 = document.getElementById('bottle1_loadercontainer2');
    //           bottleLoaderContainer2.style.transform =`scale(1)`;
    //           bottleLoaderContainer2.style.transition =`2s 0.5s`;
    //           var bottleLoaderContainer3 = document.getElementById('bottle1_loadercontainer3');
    //           bottleLoaderContainer3.style.transform =`scale(1)`;
    //           bottleLoaderContainer3.style.transition =`2s 1s`;
    //       },200)

              
    //       }
    //       else {

    //       var square__bottle2 = document.getElementById('square__bottle2');
    //       square__bottle2.style.transform =`rotate(180deg)`;

    //         isContentActive = 1;
    //       var video = document.getElementById('video');
    //       video.style.display = "none";
    //       menu__gamelist.style.display = `none`;
    //       var tapgame__container = document.getElementById('tapgame__container');
    //       tapgame__container.style.display = "none";
    //      var flipgame__container = document.getElementById('flipgame__container');
    //         flipgame__container.style.display = "none";
    //         var dicegame__container = document.getElementById('dicegame__container');
    //         dicegame__container.style.display = "none";
    //       var explore__container = document.getElementById('explore__container');
    //       explore__container.style.display = "none";

    //       var mainBottle__container2 = document.getElementById('mainBottle__container-2');
    //       mainBottle__container2.style.transform = `translate(${Math.round(center.x)-180}px,${Math.round(center.y)-150}px)`;//-260 -390
    //       mainBottle__container2.style.display = "block";

    //       setTimeout(function(){
    //      var bottleLoaderContainer1 = document.getElementById('bottle1_loadercontainer1');
    //       bottleLoaderContainer1.style.transform =`scale(1)`;
    //       bottleLoaderContainer1.style.transition =`2s`;
    //       var bottleLoaderContainer2 = document.getElementById('bottle1_loadercontainer2');
    //       bottleLoaderContainer2.style.transform =`scale(1)`;
    //       bottleLoaderContainer2.style.transition =`2s 0.5s`;
    //       var bottleLoaderContainer3 = document.getElementById('bottle1_loadercontainer3');
    //       bottleLoaderContainer3.style.transform =`scale(1)`;
    //       bottleLoaderContainer3.style.transition =`2s 1s`;
    //   },200)

    //       }
    //     }

    //     // if(match.index == '3'){

    //     //   if (Math.round(match.getOrientation()) >=0) {
    //     //   var square__bottle3 = document.getElementById('square__bottle3');
    //     //   square__bottle3.style.transform =`rotate(0deg)`;

    //     //   isContentActive = 1;
    //     //   var video = document.getElementById('video');
    //     //   video.style.display = "none";
    //     //   var game__container = document.getElementById('game__container');
    //     //   game__container.style.display = "none";
    //     //   var explore__container = document.getElementById('explore__container');
    //     //   explore__container.style.display = "none";

    //     //   var mainBottle__container3 = document.getElementById('mainBottle__container-3');
    //     //   mainBottle__container3.style.transform = `translate(${Math.round(center.x)-340}px,${Math.round(center.y)-220}px)`;
    //     //   mainBottle__container3.style.display = "block";
    //     // } 
    //     // else {

    //     //   var square__bottle3 = document.getElementById('square__bottle3');
    //     //   square__bottle3.style.transform =`rotate(180deg)`;

    //     //   isContentActive = 1;
    //     //   var video = document.getElementById('video');
    //     //   video.style.display = "none";
    //     //   var game__container = document.getElementById('game__container');
    //     //   game__container.style.display = "none";
    //     //   var explore__container = document.getElementById('explore__container');
    //     //   explore__container.style.display = "none";

    //     //   var mainBottle__container3 = document.getElementById('mainBottle__container-3');
    //     //   mainBottle__container3.style.transform = `translate(${Math.round(center.x)-260}px,${Math.round(center.y)-390}px)`;
    //     //   mainBottle__container3.style.display = "block";
    //     // }
    //     // }

    //     });
    //       // clear all if not touch

    //       if (matchContainer.length>0) {
    //           for (i = 0; i < matchContainer.length; i++) {
    //          let matchID = matchContainer[i];
              
    //          if (matchID==0) {
    //           isBottle1Active=1;
    //          }
    //          else if(matchID==1) {
    //             isBottle2Active=1;
    //          }
    //        }

    //        if (isBottle1Active!==1) {
    //         var mainBottle__container2 = document.getElementById('mainBottle__container-2');
    //           mainBottle__container2.style.display = "none";

    //           var bottleContent1__courvoisier1 = document.getElementById('bottleContent1__courvoisier-1');
    //           bottleContent1__courvoisier1.style.display = `none`;
    //           var bottleContent1__courvoisier2 = document.getElementById('bottleContent1__courvoisier-2');
    //           bottleContent1__courvoisier2.style.display = `none`;
    //           var bottleContent1__courvoisier3 = document.getElementById('bottleContent1__courvoisier-3');
    //           bottleContent1__courvoisier3.style.display = `none`;

    //           // button selected animation
    //           var loader2_1 = document.getElementById('bottleButton1__loader-1');
    //           loader2_1.style.animation =`none`;
    //           var loader2_1 = document.getElementById('bottleButton1__loader-2');
    //           loader2_1.style.animation =`none`;
    //           var loader2_1 = document.getElementById('bottleButton1__loader-3');
    //           loader2_1.style.animation =`none`;

    //           var bottle1LoaderContainer1 = document.getElementById('bottle1_loadercontainer1');
    //           bottle1LoaderContainer1.style.transform =`scale(0)`;
    //           bottle1LoaderContainer1.style.transition =`0s`;
    //           var bottle1LoaderContainer2 = document.getElementById('bottle1_loadercontainer2');
    //           bottle1LoaderContainer2.style.transform =`scale(0)`;
    //           bottle1LoaderContainer2.style.transition =`0s`;
    //           var bottle1LoaderContainer3 = document.getElementById('bottle1_loadercontainer3');
    //           bottle1LoaderContainer3.style.transform =`scale(0)`;
    //           bottle1LoaderContainer3.style.transition =`0s`;
    //           isBottle1Active=0;
    //        }
    //        if (isBottle2Active!==1) {
    //         var mainBottle__container1 = document.getElementById('mainBottle__container-1');
    //           mainBottle__container1.style.display = "none";

    //           var bottleContent__courvoisier1 = document.getElementById('bottleContent__courvoisier-1');
    //           bottleContent__courvoisier1.style.display = `none`;
    //           bottleContent__courvoisier1.transition =`0s`;
    //           var bottleContent__courvoisier2 = document.getElementById('bottleContent__courvoisier-2');
    //           bottleContent__courvoisier2.style.display = `none`;
    //           bottleContent__courvoisier2.transition =`0s`;
    //           var bottleContent__courvoisier3 = document.getElementById('bottleContent__courvoisier-3');
    //           bottleContent__courvoisier3.style.display = `none`;
    //           bottleContent__courvoisier3.transition =`0s`;

    //           var loader1_1 = document.getElementById('bottleButton__loader-1');
    //           loader1_1.style.animation =`none`;
    //           var loader1_2 = document.getElementById('bottleButton__loader-2');
    //           loader1_2.style.animation =`none`;
    //           var loader1_3 = document.getElementById('bottleButton__loader-3');
    //           loader1_3.style.animation =`none`;

    //           var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1');
    //           bottleLoaderContainer1.style.transform =`scale(0)`;
    //           bottleLoaderContainer1.style.transition =`0s`;
    //           var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2');
    //           bottleLoaderContainer2.style.transform =`scale(0)`;
    //           bottleLoaderContainer2.style.transition =`0s`;
    //           var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3');
    //           bottleLoaderContainer3.style.transform =`scale(0)`;
    //           bottleLoaderContainer3.style.transition =`0s`;
    //           isBottle2Active=0;
    //        }

    //        console.log("final : ", matchContainer.length);
    //       } else if (matchContainer.length==0) {

    //         // bottle 1
    //         var mainBottle__container1 = document.getElementById('mainBottle__container-1');
    //         mainBottle__container1.style.display = "none";

    //         var bottleContent__courvoisier1 = document.getElementById('bottleContent__courvoisier-1');
    //           bottleContent__courvoisier1.style.display = `none`;
    //           var bottleContent__courvoisier2 = document.getElementById('bottleContent__courvoisier-2');
    //           bottleContent__courvoisier2.style.display = `none`;
    //           var bottleContent__courvoisier3 = document.getElementById('bottleContent__courvoisier-3');
    //           bottleContent__courvoisier3.style.display = `none`;

    //           var loader1_1 = document.getElementById('bottleButton__loader-1');
    //           loader1_1.style.animation =`none`;
    //           var loader1_2 = document.getElementById('bottleButton__loader-2');
    //           loader1_2.style.animation =`none`;
    //           var loader1_3 = document.getElementById('bottleButton__loader-3');
    //           loader1_3.style.animation =`none`;

    //           var bottleLoaderContainer1 = document.getElementById('bottle_loadercontainer1');
    //           bottleLoaderContainer1.style.transform =`scale(0)`;
    //           bottleLoaderContainer1.style.transition =`0s`;
    //           var bottleLoaderContainer2 = document.getElementById('bottle_loadercontainer2');
    //           bottleLoaderContainer2.style.transform =`scale(0)`;
    //           bottleLoaderContainer2.style.transition =`0s`;
    //           var bottleLoaderContainer3 = document.getElementById('bottle_loadercontainer3');
    //           bottleLoaderContainer3.style.transform =`scale(0)`;
    //           bottleLoaderContainer3.style.transition =`0s`;
    //           isBottle2Active=0;

    //           // bottle 2
    //           var mainBottle__container2 = document.getElementById('mainBottle__container-2');
    //           mainBottle__container2.style.display = "none";

    //           // content
    //           var bottleContent1__courvoisier1 = document.getElementById('bottleContent1__courvoisier-1');
    //           bottleContent1__courvoisier1.style.display = `none`;
    //           var bottleContent1__courvoisier2 = document.getElementById('bottleContent1__courvoisier-2');
    //           bottleContent1__courvoisier2.style.display = `none`;
    //           var bottleContent1__courvoisier3 = document.getElementById('bottleContent1__courvoisier-3');
    //           bottleContent1__courvoisier3.style.display = `none`;

    //           // button selected animation
    //           var loader2_1 = document.getElementById('bottleButton1__loader-1');
    //           loader2_1.style.animation =`none`;
    //           var loader2_1 = document.getElementById('bottleButton1__loader-2');
    //           loader2_1.style.animation =`none`;
    //           var loader2_1 = document.getElementById('bottleButton1__loader-3');
    //           loader2_1.style.animation =`none`;

    //           // button animation
    //           var bottle1LoaderContainer1 = document.getElementById('bottle1_loadercontainer1');
    //           bottle1LoaderContainer1.style.transform =`scale(0)`;
    //           bottle1LoaderContainer1.style.transition =`0s`;
    //           var bottle1LoaderContainer2 = document.getElementById('bottle1_loadercontainer2');
    //           bottle1LoaderContainer2.style.transform =`scale(0)`;
    //           bottle1LoaderContainer2.style.transition =`0s`;
    //           var bottle1LoaderContainer3 = document.getElementById('bottle1_loadercontainer3');
    //           bottle1LoaderContainer3.style.transform =`scale(0)`;
    //           bottle1LoaderContainer3.style.transition =`0s`;
    //           isBottle1Active=0;

    //           isContentActive= 0;
    //       }
      };

      var touchHandler = function(event, eventType) {
        touchHandlerImpl(event.touches, eventType);
        event.preventDefault();
      };

      var touchBox = document.getElementById('touchBox');

      // attach touch event handlers
      touchBox.addEventListener("touchstart", function(e) { touchHandler(e, 'start'); });
      touchBox.addEventListener("touchmove", function(e) { touchHandler(e, 'move'); });
      touchBox.addEventListener("touchend", function(e) { touchHandler(e, 'end'); });
      touchBox.addEventListener("touchcancel", function(e) { touchHandler(e, 'cancel'); });
    })();