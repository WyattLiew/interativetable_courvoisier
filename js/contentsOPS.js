 // declare variable
    var explore_button2 = document.getElementById('explore_button2');
    
    

    // bottle 1
    var bottleContent__courvoisierSub_1_OP = document.getElementById('bottleContent__courvoisier-3-1_OP');
    var bottleContent__courvoisierSub_2_OP = document.getElementById('bottleContent__courvoisier-3-2_OP');
    var bottleContent__courvoisierSub_3_OP = document.getElementById('bottleContent__courvoisier-3-3_OP');
    var bottleContent__courvoisierSub_4_OP = document.getElementById('bottleContent__courvoisier-3-4_OP');
    var mainButton__content_OP = document.getElementById('content-main-button__bottle1_OP');
    var bottleContent__courvoisierMain_OP = document.getElementById('bottleContent__courvoisier-3_OP');

    // bottle 2
    var bottleContent1__courvoisierSub_1_OP = document.getElementById('bottleContent1__courvoisier-3-1_OP');
    var bottleContent1__courvoisierSub_2_OP = document.getElementById('bottleContent1__courvoisier-3-2_OP');
    var bottleContent1__courvoisierSub_3_OP = document.getElementById('bottleContent1__courvoisier-3-3_OP');
    var bottleContent1__courvoisierSub_4_OP = document.getElementById('bottleContent1__courvoisier-3-4_OP');
    var mainButton__content1_OP = document.getElementById('content-main-button1__bottle1_OP');
    var bottleContent1__courvoisierMain_OP = document.getElementById('bottleContent1__courvoisier-3_OP');
    
    

    mainButton__content_OP.addEventListener('touchstart',function(e){
      contentPage = 1;
      nextPage_OP(0,contentPage);
    });

    mainButton__content1_OP.addEventListener('touchstart',function(e){
      contentPage = 1;
      nextPage_OP(1,contentPage);
    });



    function nextPage_OP(bottle,pages){
      if (bottle == 0 && pages == 1) {
      bottleContent__courvoisierMain_OP.style.display = `none`;
      bottleContent__courvoisierSub_1_OP.style.display = `block`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 0 && pages ==2) {
      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `block`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 0 && pages ==3) {
      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `block`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
    }else if (bottle == 0 && pages ==4) {
      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `block`;
    }
    else if (bottle == 1 && pages == 1) {
      bottleContent1__courvoisierMain_OP.style.display = `none`;
      bottleContent1__courvoisierSub_1_OP.style.display = `block`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 1 && pages ==2) {
      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `block`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 1 && pages ==3) {
      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `block`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    }else if (bottle == 1 && pages ==4) {
      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `block`;
    }

     else if (bottle == 2 && pages == 1) {
      bottleContent2__courvoisierMain_OP.style.display = `none`;
      bottleContent2__courvoisierSub_1_OP.style.display = `block`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 2 && pages ==2) {
      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `block`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 2 && pages ==3) {
      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `block`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    }else if (bottle == 2 && pages ==4) {
      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `block`;
    }

    }

    function prevPage_OP(bottle,pages) {
      if (bottle == 0 && pages == 1) {
      bottleContent__courvoisierSub_1_OP.style.display = `block`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 0 && pages ==2) {
      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `block`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 0 && pages ==3) {
      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `block`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
    }else if (bottle == 0 && pages==4){
      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `block`;
    }
    else if (bottle == 1 && pages == 1) {
      bottleContent1__courvoisierSub_1_OP.style.display = `block`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 1 && pages ==2) {
      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `block`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 1 && pages ==3) {
      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `block`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    }else if (bottle == 1 && pages==4){
      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `block`;
    }

    else if (bottle == 2 && pages == 1) {
      bottleContent2__courvoisierSub_1_OP.style.display = `block`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 2 && pages ==2) {
      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `block`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    } else if (bottle == 2 && pages ==3) {
      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `block`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    }else if (bottle == 2 && pages==4){
      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `block`;
    }
    }


    // Trig Content from explore
    function trigContent_OP() {
      exploreHeader.style.display = 'none';
      exploreBody.style.display = 'none';
      explore_button2.style.display = 'none';

      mainBottle__container2_OP = document.getElementById('mainBottle__container-2_OP');
      mainBottle__container2_OP.style.display = "block";

      mainBottle__container1_OP = document.getElementById('mainBottle__container-1_OP');
      mainBottle__container1_OP.style.display = "none";

      resetBottle1_OP();
      setTimeout(function(){
     var bottleLoaderContainer1_OP = document.getElementById('bottle1_loadercontainer1_OP');
      bottleLoaderContainer1_OP.style.transform =`scale(1)`;
      bottleLoaderContainer1_OP.style.transition =`2s`;
      var bottleLoaderContainer2_OP = document.getElementById('bottle1_loadercontainer2_OP');
      bottleLoaderContainer2_OP.style.transform =`scale(1)`;
      bottleLoaderContainer2_OP.style.transition =`2s 0.5s`;
      var bottleLoaderContainer3_OP = document.getElementById('bottle1_loadercontainer3_OP');
      bottleLoaderContainer3_OP.style.transform =`scale(1)`;
      bottleLoaderContainer3_OP.style.transition =`2s 1s`;

      var bottleBaseImg_loadercontainer2_OP = document.getElementById('bottleBaseImg_loadercontainer2_OP');
      bottleBaseImg_loadercontainer2_OP.style.width = '250px';
      bottleBaseImg_loadercontainer2_OP.style.transition = '1.5s';
  },200)

    }

    function trigContent2_OP() {
      exploreHeader.style.display = 'none';
      exploreBody.style.display = 'none';
      explore_button2.style.display = 'none';

      mainBottle__container2_OP = document.getElementById('mainBottle__container-2_OP');
      mainBottle__container2_OP.style.display = "none";

      mainBottle__container1_OP = document.getElementById('mainBottle__container-1_OP');
      mainBottle__container1_OP.style.display = "block";

      resetBottle2_OP();
      setTimeout(function(){
     var bottleLoaderContainer1_OP = document.getElementById('bottle_loadercontainer1_OP');
      bottleLoaderContainer1_OP.style.transform =`scale(1)`;
      bottleLoaderContainer1_OP.style.transition =`2s`;
      var bottleLoaderContainer2_OP = document.getElementById('bottle_loadercontainer2_OP');
      bottleLoaderContainer2_OP.style.transform =`scale(1)`;
      bottleLoaderContainer2_OP.style.transition =`2s 0.5s`;
      var bottleLoaderContainer3_OP = document.getElementById('bottle_loadercontainer3_OP');
      bottleLoaderContainer3_OP.style.transform =`scale(1)`;
      bottleLoaderContainer3_OP.style.transition =`2s 1s`;

      var bottleBaseImg_loadercontainer2_OP = document.getElementById('bottleBaseImg_loadercontainer1_OP');
      bottleBaseImg_loadercontainer2_OP.style.width = '250px';
      bottleBaseImg_loadercontainer2_OP.style.transition = '1.5s';
  },200)

    }

    function resetBottle1_OP() {
      var bottleContent__courvoisier1_OP = document.getElementById('bottleContent__courvoisier-1_OP');
  bottleContent__courvoisier1_OP.style.display = `none`;
  var bottleContent__courvoisier2_OP = document.getElementById('bottleContent__courvoisier-2_OP');
  bottleContent__courvoisier2_OP.style.display = `none`;
  var bottleContent__courvoisier3_OP = document.getElementById('bottleContent__courvoisier-3_OP');
  bottleContent__courvoisier3_OP.style.display = `none`;
  var bottleContent__courvoisier3_1_OP = document.getElementById('bottleContent__courvoisier-3-1_OP');
  bottleContent__courvoisier3_1_OP.style.display = `none`;
   var bottleContent__courvoisier3_2_OP = document.getElementById('bottleContent__courvoisier-3-2_OP');
  bottleContent__courvoisier3_2_OP.style.display = `none`;
   var bottleContent__courvoisier3_3_OP = document.getElementById('bottleContent__courvoisier-3-3_OP');
  bottleContent__courvoisier3_3_OP.style.display = `none`;
   var bottleContent__courvoisier3_4_OP = document.getElementById('bottleContent__courvoisier-3-4_OP');
  bottleContent__courvoisier3_4_OP.style.display = `none`;

  var loader1_1_OP = document.getElementById('bottleButton__loader-1');
  loader1_1_OP.style.animation =`none`;
  var loader1_2_OP = document.getElementById('bottleButton__loader-2');
  loader1_2_OP.style.animation =`none`;
  var loader1_3_OP = document.getElementById('bottleButton__loader-3');
  loader1_3_OP.style.animation =`none`;

  var bottleLoaderContainer1_OP = document.getElementById('bottle_loadercontainer1_OP');
  bottleLoaderContainer1_OP.style.transform =`scale(0)`;
  bottleLoaderContainer1_OP.style.transition =`0s`;
  var bottleLoaderContainer2_OP = document.getElementById('bottle_loadercontainer2_OP');
  bottleLoaderContainer2_OP.style.transform =`scale(0)`;
  bottleLoaderContainer2_OP.style.transition =`0s`;
  var bottleLoaderContainer3_OP = document.getElementById('bottle_loadercontainer3_OP');
  bottleLoaderContainer3_OP.style.transform =`scale(0)`;
  bottleLoaderContainer3_OP.style.transition =`0s`;
  bottleBaseImg_loadercontainer1_OP.style.width = '100px';
  bottleBaseImg_loadercontainer1_OP.style.transition = '3s';
    }

    function resetBottle2_OP() {
      // bottle 2
  var bottle1LoaderContainer1_OP = document.getElementById('bottle1_loadercontainer1_OP');
  bottle1LoaderContainer1_OP.style.transform =`scale(0)`;
  bottle1LoaderContainer1_OP.style.transition =`0s`;
  var bottle1LoaderContainer2_OP = document.getElementById('bottle1_loadercontainer2_OP');
  bottle1LoaderContainer2_OP.style.transform =`scale(0)`;
  bottle1LoaderContainer2_OP.style.transition =`0s`;
  var bottle1LoaderContainer3_OP = document.getElementById('bottle1_loadercontainer3_OP');
  bottle1LoaderContainer3_OP.style.transform =`scale(0)`;
  bottle1LoaderContainer3_OP.style.transition =`0s`;
  bottleBaseImg_loadercontainer2_OP.style.width = '100px';
  bottleBaseImg_loadercontainer2_OP.style.transition = '3s';

  // content
  var bottleContent1__courvoisier1_OP = document.getElementById('bottleContent1__courvoisier-1_OP');
  bottleContent1__courvoisier1_OP.style.display = `none`;
  var bottleContent1__courvoisier2_OP = document.getElementById('bottleContent1__courvoisier-2_OP');
  bottleContent1__courvoisier2_OP.style.display = `none`;
  var bottleContent1__courvoisier3_OP = document.getElementById('bottleContent1__courvoisier-3_OP');
  bottleContent1__courvoisier3_OP.style.display = `none`;
  var bottleContent1__courvoisier3_1_OP = document.getElementById('bottleContent1__courvoisier-3-1_OP');
  bottleContent1__courvoisier3_1_OP.style.display = `none`;
   var bottleContent1__courvoisier3_2_OP = document.getElementById('bottleContent1__courvoisier-3-2_OP');
  bottleContent1__courvoisier3_2_OP.style.display = `none`;
   var bottleContent1__courvoisier3_3_OP = document.getElementById('bottleContent1__courvoisier-3-3_OP');
  bottleContent1__courvoisier3_3_OP.style.display = `none`;
   var bottleContent1__courvoisier3_4_OP = document.getElementById('bottleContent1__courvoisier-3-4_OP');
  bottleContent1__courvoisier3_4_OP.style.display = `none`;

  var loader2_1_OP = document.getElementById('bottleButton1__loader-1_OP');
  loader2_1_OP.style.animation =`none`;
  var loader2_1_OP = document.getElementById('bottleButton1__loader-2_OP');
  loader2_1_OP.style.animation =`none`;
  var loader2_1_OP = document.getElementById('bottleButton1__loader-3_OP');
  loader2_1_OP.style.animation =`none`;
    }

    // bottle button list (Courvoisier)
    function Courvoisier_OP(input) {
      if (input == 0) {
      var loader_OP = document.getElementById('bottleButton__loader-1_OP');
      loader_OP.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier_OP = document.getElementById('bottleContent__courvoisier-1_OP');
      bottleContent__courvoisier_OP.style.display = `block`;
      var contentDetail__bottle1_OP = document.getElementById("content-detail__bottle1_OP");
      var contentImg__bottle1_OP = document.getElementById("content-img__bottle1_OP");



      
      setTimeout(function(){
         contentDetail__bottle1_OP.style.display = `block`;
        contentImg__bottle1_OP.style.opacity = `0.3`;
      },1000)

      var loader_OP = document.getElementById('bottleButton__loader-2_OP');
      loader_OP.style.animation =`none`;
      var bottleContent__courvoisier_OP = document.getElementById('bottleContent__courvoisier-2_OP');
      bottleContent__courvoisier_OP.style.display = `none`;

      var loader_OP = document.getElementById('bottleButton__loader-3_OP');
      loader_OP.style.animation =`none`;
      var bottleContent__courvoisier_OP = document.getElementById('bottleContent__courvoisier-3_OP');
      bottleContent__courvoisier_OP.style.display = `none`;

      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
      } 

      else if (input == 1) {
      var loader = document.getElementById('bottleButton1__loader-2_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-2_OP');
      bottleContent__courvoisier.style.display = `none`;

       var contentDetail__bottle1 = document.getElementById("content-detail1__bottle1_OP");
      var contentImg__bottle1 = document.getElementById("content-img1__bottle1_OP");

      setTimeout(function(){
         contentDetail__bottle1.style.display = `block`;
        contentImg__bottle1.style.opacity = `0.3`;
      },1000)

      var loader = document.getElementById('bottleButton1__loader-1_OP');
      loader.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-1_OP');
      bottleContent__courvoisier.style.display = `block`;

       var loader = document.getElementById('bottleButton1__loader-3_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-3_OP');
      bottleContent__courvoisier.style.display = `none`;

      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    }

    else if (input == 2) {
      var loader = document.getElementById('bottleButton2__loader-2_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-2_OP');
      bottleContent__courvoisier.style.display = `none`;

       var contentDetail__bottle1 = document.getElementById("content-detail2__bottle1_OP");
      var contentImg__bottle1 = document.getElementById("content-img2__bottle1_OP");

      setTimeout(function(){
         contentDetail__bottle1.style.display = `block`;
        contentImg__bottle1.style.opacity = `0.3`;
      },1000)

      var loader = document.getElementById('bottleButton2__loader-1_OP');
      loader.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-1_OP');
      bottleContent__courvoisier.style.display = `block`;

       var loader = document.getElementById('bottleButton2__loader-3_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-3_OP');
      bottleContent__courvoisier.style.display = `none`;

      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    }
    }

    function Taste_OP(input) {
      if (input == 0) {
      var loader = document.getElementById('bottleButton__loader-2_OP');
      loader.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-2_OP');
      bottleContent__courvoisier.style.display = `block`;

      var loader = document.getElementById('bottleButton__loader-1_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-1_OP');
      bottleContent__courvoisier.style.display = `none`;

       var loader = document.getElementById('bottleButton__loader-3_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-3_OP');
      bottleContent__courvoisier.style.display = `none`;

      var contentDetail__bottle1 = document.getElementById("content-detail__bottle1_OP");
      var contentImg__bottle1 = document.getElementById("content-img__bottle1_OP");
      contentDetail__bottle1.style.display = `none`;
      contentImg__bottle1.style.opacity = `1`;

      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
    } else if (input == 1) {
      var loader = document.getElementById('bottleButton1__loader-2_OP');
      loader.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-2_OP');
      bottleContent__courvoisier.style.display = `block`;

      var loader = document.getElementById('bottleButton1__loader-1_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-1_OP');
      bottleContent__courvoisier.style.display = `none`;

       var loader = document.getElementById('bottleButton1__loader-3_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-3_OP');
      bottleContent__courvoisier.style.display = `none`;

      var contentDetail__bottle1 = document.getElementById("content-detail1__bottle1_OP");
      var contentImg__bottle1 = document.getElementById("content-img1__bottle1_OP");
      contentDetail__bottle1.style.display = `none`;
      contentImg__bottle1.style.opacity = `1`;

      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    }

    else if (input == 2) {
      var loader = document.getElementById('bottleButton2__loader-2_OP');
      loader.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-2_OP');
      bottleContent__courvoisier.style.display = `block`;

      var loader = document.getElementById('bottleButton2__loader-1_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-1_OP');
      bottleContent__courvoisier.style.display = `none`;

       var loader = document.getElementById('bottleButton2__loader-3_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-3_OP');
      bottleContent__courvoisier.style.display = `none`;

      var contentDetail__bottle1 = document.getElementById("content-detail2__bottle1_OP");
      var contentImg__bottle1 = document.getElementById("content-img2__bottle1_OP");
      contentDetail__bottle1.style.display = `none`;
      contentImg__bottle1.style.opacity = `1`;

      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    } 
    }

    function Artistry_OP(input) {
      if (input ==0) {
      var loader = document.getElementById('bottleButton__loader-3_OP');
      loader.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-3_OP');
      bottleContent__courvoisier.style.display = `block`;


      var loader = document.getElementById('bottleButton__loader-2_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-2_OP');
      bottleContent__courvoisier.style.display = `none`;

      var loader = document.getElementById('bottleButton__loader-1_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent__courvoisier-1_OP');
      bottleContent__courvoisier.style.display = `none`;

      var contentDetail__bottle1 = document.getElementById("content-detail__bottle1_OP");
      var contentImg__bottle1 = document.getElementById("content-img__bottle1_OP");
      contentDetail__bottle1.style.display = `none`;
      contentImg__bottle1.style.opacity = `1`;

      bottleContent__courvoisierSub_1_OP.style.display = `none`;
      bottleContent__courvoisierSub_2_OP.style.display = `none`;
      bottleContent__courvoisierSub_3_OP.style.display = `none`;
      bottleContent__courvoisierSub_4_OP.style.display = `none`;
    } else if (input == 1) {
      var loader = document.getElementById('bottleButton1__loader-2_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-2_OP');
      bottleContent__courvoisier.style.display = `none`;

      var loader = document.getElementById('bottleButton1__loader-1_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-1_OP');
      bottleContent__courvoisier.style.display = `none`;

       var loader = document.getElementById('bottleButton1__loader-3_OP');
      loader.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier = document.getElementById('bottleContent1__courvoisier-3_OP');
      bottleContent__courvoisier.style.display = `block`;

      var contentDetail__bottle1 = document.getElementById("content-detail1__bottle1_OP");
      var contentImg__bottle1 = document.getElementById("content-img1__bottle1_OP");
      contentDetail__bottle1.style.display = `none`;
      contentImg__bottle1.style.opacity = `1`;

      bottleContent1__courvoisierSub_1_OP.style.display = `none`;
      bottleContent1__courvoisierSub_2_OP.style.display = `none`;
      bottleContent1__courvoisierSub_3_OP.style.display = `none`;
      bottleContent1__courvoisierSub_4_OP.style.display = `none`;
    }
    else if (input == 2) {
      var loader = document.getElementById('bottleButton2__loader-2_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-2_OP');
      bottleContent__courvoisier.style.display = `none`;

      var loader = document.getElementById('bottleButton2__loader-1_OP');
      loader.style.animation =`none`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-1_OP');
      bottleContent__courvoisier.style.display = `none`;

       var loader = document.getElementById('bottleButton2__loader-3_OP');
      loader.style.animation =`loader 1s linear infinite`;
      var bottleContent__courvoisier = document.getElementById('bottleContent2__courvoisier-3_OP');
      bottleContent__courvoisier.style.display = `block`;

      var contentDetail__bottle1 = document.getElementById("content-detail2__bottle1_OP");
      var contentImg__bottle1 = document.getElementById("content-img2__bottle1_OP");
      contentDetail__bottle1.style.display = `none`;
      contentImg__bottle1.style.opacity = `1`;

      bottleContent2__courvoisierSub_1_OP.style.display = `none`;
      bottleContent2__courvoisierSub_2_OP.style.display = `none`;
      bottleContent2__courvoisierSub_3_OP.style.display = `none`;
      bottleContent2__courvoisierSub_4_OP.style.display = `none`;
    }
    }
