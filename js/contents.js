// declare variable
var video__container = document.getElementById("video__container");
var video__container1 = document.getElementById("video__container1");
var contentvideo__loader1 = document.getElementById("contentvideo__loader-1");
var contentvideo__loader2 = document.getElementById("contentvideo__loader-2");

var video = document.querySelector(".video");
var video_InnerBar = document.querySelector(".video__innerBar");
var video_button = document.getElementById("video__play-pause");

var video1 = document.querySelector(".video1");
var video_InnerBar1 = document.querySelector(".video__innerBar1");
var video_button1 = document.getElementById("video__play-pause1");

var explore_button1 = document.getElementById("explore_button1");
var exploreHeader = document.getElementById("exploreHeader__wrapper");
var exploreBody = document.getElementById("exploreBody__wrapper");

var contentvideo_loadercontainer1 = document.getElementById(
  "contentvideo_loadercontainer1"
);
var contentvideo_loadercontainer2 = document.getElementById(
  "contentvideo_loadercontainer2"
);

// bottle 1
var bottleContent__courvoisierSub_1 = document.getElementById(
  "bottleContent__courvoisier-3-1"
);
var bottleContent__courvoisierSub_2 = document.getElementById(
  "bottleContent__courvoisier-3-2"
);
var bottleContent__courvoisierSub_3 = document.getElementById(
  "bottleContent__courvoisier-3-3"
);
var bottleContent__courvoisierSub_4 = document.getElementById(
  "bottleContent__courvoisier-3-4"
);
var mainButton__content = document.getElementById(
  "content-main-button__bottle1"
);
var bottleContent__courvoisierMain = document.getElementById(
  "bottleContent__courvoisier-3"
);

// bottle 2
var bottleContent1__courvoisierSub_1 = document.getElementById(
  "bottleContent1__courvoisier-3-1"
);
var bottleContent1__courvoisierSub_2 = document.getElementById(
  "bottleContent1__courvoisier-3-2"
);
var bottleContent1__courvoisierSub_3 = document.getElementById(
  "bottleContent1__courvoisier-3-3"
);
var bottleContent1__courvoisierSub_4 = document.getElementById(
  "bottleContent1__courvoisier-3-4"
);
var mainButton__content1 = document.getElementById(
  "content-main-button1__bottle1"
);
var bottleContent1__courvoisierMain = document.getElementById(
  "bottleContent1__courvoisier-3"
);

// bottle 3
var bottleContent2__courvoisierSub_1 = document.getElementById(
  "bottleContent2__courvoisier-3-1"
);
var bottleContent2__courvoisierSub_2 = document.getElementById(
  "bottleContent2__courvoisier-3-2"
);
var bottleContent2__courvoisierSub_3 = document.getElementById(
  "bottleContent2__courvoisier-3-3"
);
var bottleContent2__courvoisierSub_4 = document.getElementById(
  "bottleContent2__courvoisier-3-4"
);
var mainButton__content2 = document.getElementById(
  "content-main-button2__bottle1"
);
var bottleContent2__courvoisierMain = document.getElementById(
  "bottleContent2__courvoisier-3"
);

let contentPage = 0;

mainButton__content.addEventListener("touchstart", function(e) {
  contentPage = 1;
  nextPage(0, contentPage);
});

mainButton__content1.addEventListener("touchstart", function(e) {
  contentPage = 1;
  nextPage(1, contentPage);
});

mainButton__content2.addEventListener("touchstart", function(e) {
  contentPage = 1;
  nextPage(2, contentPage);
});

function nextPage(bottle, pages) {
  if (bottle == 0 && pages == 1) {
    bottleContent__courvoisierMain.style.display = `none`;
    bottleContent__courvoisierSub_1.style.display = `block`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 0 && pages == 2) {
    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `block`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 0 && pages == 3) {
    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `block`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 0 && pages == 4) {
    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `block`;
  } else if (bottle == 1 && pages == 1) {
    bottleContent1__courvoisierMain.style.display = `none`;
    bottleContent1__courvoisierSub_1.style.display = `block`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 1 && pages == 2) {
    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `block`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 1 && pages == 3) {
    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `block`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 1 && pages == 4) {
    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `block`;
  } else if (bottle == 2 && pages == 1) {
    bottleContent2__courvoisierMain.style.display = `none`;
    bottleContent2__courvoisierSub_1.style.display = `block`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 2 && pages == 2) {
    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `block`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 2 && pages == 3) {
    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `block`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 2 && pages == 4) {
    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `block`;
  }
}

function prevPage(bottle, pages) {
  if (bottle == 0 && pages == 1) {
    bottleContent__courvoisierSub_1.style.display = `block`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 0 && pages == 2) {
    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `block`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 0 && pages == 3) {
    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `block`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 0 && pages == 4) {
    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `block`;
  } else if (bottle == 1 && pages == 1) {
    bottleContent1__courvoisierSub_1.style.display = `block`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 1 && pages == 2) {
    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `block`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 1 && pages == 3) {
    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `block`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 1 && pages == 4) {
    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `block`;
  } else if (bottle == 2 && pages == 1) {
    bottleContent2__courvoisierSub_1.style.display = `block`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 2 && pages == 2) {
    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `block`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 2 && pages == 3) {
    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `block`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  } else if (bottle == 2 && pages == 4) {
    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `block`;
  }
}

// Trig Content from explore
function trigContent() {
  exploreHeader.style.display = "none";
  exploreBody.style.display = "none";
  explore_button1.style.display = "none";
  contentvideo_loadercontainer2.style.display = `none`;
  video__container1.style.display = `none`;

  mainBottle__container2 = document.getElementById("mainBottle__container-2");
  mainBottle__container2.style.display = "block";

  mainBottle__container1 = document.getElementById("mainBottle__container-1");
  mainBottle__container1.style.display = "none";

  resetBottle1();
  setTimeout(function() {
    var bottleLoaderContainer1 = document.getElementById(
      "bottle1_loadercontainer1"
    );
    bottleLoaderContainer1.style.transform = `scale(1)`;
    bottleLoaderContainer1.style.transition = `2s`;
    var bottleLoaderContainer2 = document.getElementById(
      "bottle1_loadercontainer2"
    );
    bottleLoaderContainer2.style.transform = `scale(1)`;
    bottleLoaderContainer2.style.transition = `2s 0.5s`;
    var bottleLoaderContainer3 = document.getElementById(
      "bottle1_loadercontainer3"
    );
    bottleLoaderContainer3.style.transform = `scale(1)`;
    bottleLoaderContainer3.style.transition = `2s 1s`;

    var bottleBaseImg_loadercontainer2 = document.getElementById(
      "bottleBaseImg_loadercontainer2"
    );
    bottleBaseImg_loadercontainer2.style.width = "250px";
    bottleBaseImg_loadercontainer2.style.transition = "1.5s";
  }, 200);
}

function trigContent2() {
  exploreHeader.style.display = "none";
  exploreBody.style.display = "none";
  explore_button1.style.display = "none";
  contentvideo_loadercontainer1.style.display = `none`;
  video__container.style.display = `none`;

  mainBottle__container2 = document.getElementById("mainBottle__container-2");
  mainBottle__container2.style.display = "none";

  mainBottle__container1 = document.getElementById("mainBottle__container-1");
  mainBottle__container1.style.display = "block";

  resetBottle2();
  setTimeout(function() {
    var bottleLoaderContainer1 = document.getElementById(
      "bottle_loadercontainer1"
    );
    bottleLoaderContainer1.style.transform = `scale(1)`;
    bottleLoaderContainer1.style.transition = `2s`;
    var bottleLoaderContainer2 = document.getElementById(
      "bottle_loadercontainer2"
    );
    bottleLoaderContainer2.style.transform = `scale(1)`;
    bottleLoaderContainer2.style.transition = `2s 0.5s`;
    var bottleLoaderContainer3 = document.getElementById(
      "bottle_loadercontainer3"
    );
    bottleLoaderContainer3.style.transform = `scale(1)`;
    bottleLoaderContainer3.style.transition = `2s 1s`;

    var bottleBaseImg_loadercontainer2 = document.getElementById(
      "bottleBaseImg_loadercontainer1"
    );
    bottleBaseImg_loadercontainer2.style.width = "250px";
    bottleBaseImg_loadercontainer2.style.transition = "1.5s";
  }, 200);
}

function resetBottle1() {
  var bottleContent__courvoisier1 = document.getElementById(
    "bottleContent__courvoisier-1"
  );
  bottleContent__courvoisier1.style.display = `none`;
  var bottleContent__courvoisier2 = document.getElementById(
    "bottleContent__courvoisier-2"
  );
  bottleContent__courvoisier2.style.display = `none`;
  var bottleContent__courvoisier3 = document.getElementById(
    "bottleContent__courvoisier-3"
  );
  bottleContent__courvoisier3.style.display = `none`;
  var bottleContent__courvoisier3_1 = document.getElementById(
    "bottleContent__courvoisier-3-1"
  );
  bottleContent__courvoisier3_1.style.display = `none`;
  var bottleContent__courvoisier3_2 = document.getElementById(
    "bottleContent__courvoisier-3-2"
  );
  bottleContent__courvoisier3_2.style.display = `none`;
  var bottleContent__courvoisier3_3 = document.getElementById(
    "bottleContent__courvoisier-3-3"
  );
  bottleContent__courvoisier3_3.style.display = `none`;
  var bottleContent__courvoisier3_4 = document.getElementById(
    "bottleContent__courvoisier-3-4"
  );
  bottleContent__courvoisier3_4.style.display = `none`;

  var loader1_1 = document.getElementById("bottleButton__loader-1");
  loader1_1.style.animation = `none`;
  var loader1_2 = document.getElementById("bottleButton__loader-2");
  loader1_2.style.animation = `none`;
  var loader1_3 = document.getElementById("bottleButton__loader-3");
  loader1_3.style.animation = `none`;

  var bottleLoaderContainer1 = document.getElementById(
    "bottle_loadercontainer1"
  );
  bottleLoaderContainer1.style.transform = `scale(0)`;
  bottleLoaderContainer1.style.transition = `0s`;
  var bottleLoaderContainer2 = document.getElementById(
    "bottle_loadercontainer2"
  );
  bottleLoaderContainer2.style.transform = `scale(0)`;
  bottleLoaderContainer2.style.transition = `0s`;
  var bottleLoaderContainer3 = document.getElementById(
    "bottle_loadercontainer3"
  );
  bottleLoaderContainer3.style.transform = `scale(0)`;
  bottleLoaderContainer3.style.transition = `0s`;
  bottleBaseImg_loadercontainer1.style.width = "100px";
  bottleBaseImg_loadercontainer1.style.transition = "3s";
}

function resetBottle2() {
  // bottle 2
  var bottle1LoaderContainer1 = document.getElementById(
    "bottle1_loadercontainer1"
  );
  bottle1LoaderContainer1.style.transform = `scale(0)`;
  bottle1LoaderContainer1.style.transition = `0s`;
  var bottle1LoaderContainer2 = document.getElementById(
    "bottle1_loadercontainer2"
  );
  bottle1LoaderContainer2.style.transform = `scale(0)`;
  bottle1LoaderContainer2.style.transition = `0s`;
  var bottle1LoaderContainer3 = document.getElementById(
    "bottle1_loadercontainer3"
  );
  bottle1LoaderContainer3.style.transform = `scale(0)`;
  bottle1LoaderContainer3.style.transition = `0s`;
  bottleBaseImg_loadercontainer2.style.width = "100px";
  bottleBaseImg_loadercontainer2.style.transition = "3s";

  // content
  var bottleContent1__courvoisier1 = document.getElementById(
    "bottleContent1__courvoisier-1"
  );
  bottleContent1__courvoisier1.style.display = `none`;
  var bottleContent1__courvoisier2 = document.getElementById(
    "bottleContent1__courvoisier-2"
  );
  bottleContent1__courvoisier2.style.display = `none`;
  var bottleContent1__courvoisier3 = document.getElementById(
    "bottleContent1__courvoisier-3"
  );
  bottleContent1__courvoisier3.style.display = `none`;
  var bottleContent1__courvoisier3_1 = document.getElementById(
    "bottleContent1__courvoisier-3-1"
  );
  bottleContent1__courvoisier3_1.style.display = `none`;
  var bottleContent1__courvoisier3_2 = document.getElementById(
    "bottleContent1__courvoisier-3-2"
  );
  bottleContent1__courvoisier3_2.style.display = `none`;
  var bottleContent1__courvoisier3_3 = document.getElementById(
    "bottleContent1__courvoisier-3-3"
  );
  bottleContent1__courvoisier3_3.style.display = `none`;
  var bottleContent1__courvoisier3_4 = document.getElementById(
    "bottleContent1__courvoisier-3-4"
  );
  bottleContent1__courvoisier3_4.style.display = `none`;

  var loader2_1 = document.getElementById("bottleButton1__loader-1");
  loader2_1.style.animation = `none`;
  var loader2_1 = document.getElementById("bottleButton1__loader-2");
  loader2_1.style.animation = `none`;
  var loader2_1 = document.getElementById("bottleButton1__loader-3");
  loader2_1.style.animation = `none`;
}

// bottle button list (Courvoisier)
function Courvoisier(input) {
  if (input == 0) {
    var loader = document.getElementById("bottleButton__loader-1");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `block`;
    var contentDetail__bottle1 = document.getElementById(
      "content-detail__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img__bottle1");

    setTimeout(function() {
      contentDetail__bottle1.style.display = `block`;
      contentImg__bottle1.style.opacity = `0.3`;
    }, 1000);

    var loader = document.getElementById("bottleButton__loader-2");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton__loader-3");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `none`;

    contentvideo_loadercontainer1.style.display = `none`;
    video__container.style.display = `none`;

    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (input == 1) {
    var loader = document.getElementById("bottleButton1__loader-2");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `none`;

    var contentDetail__bottle1 = document.getElementById(
      "content-detail1__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img1__bottle1");

    setTimeout(function() {
      contentDetail__bottle1.style.display = `block`;
      contentImg__bottle1.style.opacity = `0.3`;
    }, 1000);

    var loader = document.getElementById("bottleButton1__loader-1");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `block`;

    var loader = document.getElementById("bottleButton1__loader-3");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `none`;

    contentvideo_loadercontainer2.style.display = `none`;
    video__container1.style.display = `none`;

    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (input == 2) {
    var loader = document.getElementById("bottleButton2__loader-2");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `none`;

    var contentDetail__bottle1 = document.getElementById(
      "content-detail2__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img2__bottle1");

    setTimeout(function() {
      contentDetail__bottle1.style.display = `block`;
      contentImg__bottle1.style.opacity = `0.3`;
    }, 1000);

    var loader = document.getElementById("bottleButton2__loader-1");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `block`;

    var loader = document.getElementById("bottleButton2__loader-3");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `none`;

    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  }
}

function Taste(input) {
  if (input == 0) {
    var loader = document.getElementById("bottleButton__loader-2");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `block`;

    var loader = document.getElementById("bottleButton__loader-1");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton__loader-3");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `none`;

    var contentDetail__bottle1 = document.getElementById(
      "content-detail__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img__bottle1");
    contentDetail__bottle1.style.display = `none`;
    contentImg__bottle1.style.opacity = `1`;

    contentvideo_loadercontainer1.style.display = `none`;
    video__container.style.display = `none`;

    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (input == 1) {
    var loader = document.getElementById("bottleButton1__loader-2");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `block`;

    var loader = document.getElementById("bottleButton1__loader-1");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton1__loader-3");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `none`;

    var contentDetail__bottle1 = document.getElementById(
      "content-detail1__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img1__bottle1");
    contentDetail__bottle1.style.display = `none`;
    contentImg__bottle1.style.opacity = `1`;

    contentvideo_loadercontainer2.style.display = `none`;
    video__container1.style.display = `none`;

    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (input == 2) {
    var loader = document.getElementById("bottleButton2__loader-2");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `block`;

    var loader = document.getElementById("bottleButton2__loader-1");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton2__loader-3");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `none`;

    var contentDetail__bottle1 = document.getElementById(
      "content-detail2__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img2__bottle1");
    contentDetail__bottle1.style.display = `none`;
    contentImg__bottle1.style.opacity = `1`;

    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  }
}

function Artistry(input) {
  if (input == 0) {
    var loader = document.getElementById("bottleButton__loader-3");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `block`;

    var loader = document.getElementById("bottleButton__loader-2");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton__loader-1");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `none`;

    var contentDetail__bottle1 = document.getElementById(
      "content-detail__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img__bottle1");
    contentDetail__bottle1.style.display = `none`;
    contentImg__bottle1.style.opacity = `1`;

    contentvideo_loadercontainer1.style.display = `block`;
    video__container.style.display = `none`;
    contentvideo__loader1.style.animation = ``;

    bottleContent__courvoisierSub_1.style.display = `none`;
    bottleContent__courvoisierSub_2.style.display = `none`;
    bottleContent__courvoisierSub_3.style.display = `none`;
    bottleContent__courvoisierSub_4.style.display = `none`;
  } else if (input == 1) {
    var loader = document.getElementById("bottleButton1__loader-2");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton1__loader-1");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton1__loader-3");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent1__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `block`;

    var contentDetail__bottle1 = document.getElementById(
      "content-detail1__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img1__bottle1");
    contentDetail__bottle1.style.display = `none`;
    contentImg__bottle1.style.opacity = `1`;

    contentvideo_loadercontainer2.style.display = `block`;
    video__container1.style.display = `none`;
    contentvideo__loader2.style.animation = ``;

    bottleContent1__courvoisierSub_1.style.display = `none`;
    bottleContent1__courvoisierSub_2.style.display = `none`;
    bottleContent1__courvoisierSub_3.style.display = `none`;
    bottleContent1__courvoisierSub_4.style.display = `none`;
  } else if (input == 2) {
    var loader = document.getElementById("bottleButton2__loader-2");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-2"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton2__loader-1");
    loader.style.animation = `none`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-1"
    );
    bottleContent__courvoisier.style.display = `none`;

    var loader = document.getElementById("bottleButton2__loader-3");
    loader.style.animation = `loader 1s linear infinite`;
    var bottleContent__courvoisier = document.getElementById(
      "bottleContent2__courvoisier-3"
    );
    bottleContent__courvoisier.style.display = `block`;

    var contentDetail__bottle1 = document.getElementById(
      "content-detail2__bottle1"
    );
    var contentImg__bottle1 = document.getElementById("content-img2__bottle1");
    contentDetail__bottle1.style.display = `none`;
    contentImg__bottle1.style.opacity = `1`;

    bottleContent2__courvoisierSub_1.style.display = `none`;
    bottleContent2__courvoisierSub_2.style.display = `none`;
    bottleContent2__courvoisierSub_3.style.display = `none`;
    bottleContent2__courvoisierSub_4.style.display = `none`;
  }
}

function trigContentVideo(input) {
  if (input == 0) {
    video__container.style.display = `block`;
    contentvideo__loader1.style.animation = `loader 1s linear infinite`;
    video.load();
    play.style.display = `block`;
    pause.style.display = `none`;
  } else {
    video__container1.style.display = `block`;
    contentvideo__loader2.style.animation = `loader 1s linear infinite`;
    video1.load();
    play1.style.display = `block`;
    pause1.style.display = `none`;
  }
}

// Video start here
function togglePlayPause(input) {
  if (input == 0) {
    if (video.paused) {
      var play = document.getElementById("play");
      play.style.display = `none`;
      var pause = document.getElementById("pause");
      pause.style.display = `block`;
      video.play();
    } else {
      var play = document.getElementById("play");
      play.style.display = `block`;
      var pause = document.getElementById("pause");
      pause.style.display = `none`;
      video.pause();
    }
  } else {
    if (video1.paused) {
      var play1 = document.getElementById("play1");
      play1.style.display = `none`;
      var pause1 = document.getElementById("pause1");
      pause1.style.display = `block`;
      video1.play();
    } else {
      var play1 = document.getElementById("play1");
      play1.style.display = `block`;
      var pause1 = document.getElementById("pause1");
      pause1.style.display = `none`;
      video1.pause();
    }
  }
}

video_button.addEventListener("touchstart", function(e) {
  togglePlayPause(0);
});

video.addEventListener("timeupdate", function() {
  var innerbar__pos = video.currentTime / video.duration;
  video_InnerBar.style.width = innerbar__pos * 100 + "%";
  if (video.ended) {
    var play = document.getElementById("play");
    play.style.display = `block`;
    var pause = document.getElementById("pause");
    pause.style.display = `none`;
  }
});

video_button1.addEventListener("touchstart", function(e) {
  togglePlayPause(1);
});

video1.addEventListener("timeupdate", function() {
  var innerbar__pos = video1.currentTime / video1.duration;
  video_InnerBar1.style.width = innerbar__pos * 100 + "%";
  if (video1.ended) {
    var play1 = document.getElementById("play1");
    play1.style.display = `block`;
    var pause1 = document.getElementById("pause1");
    pause1.style.display = `none`;
  }
});
