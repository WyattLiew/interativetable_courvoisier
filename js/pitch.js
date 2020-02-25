// bottle image zoom in out size
    var width =0;

    // check element position (x,y)
    function getoffset(el) {
       const rect = el.getBoundingClientRect();
  return {
    left:rect.left + window.scrollX,
    top : rect.top + window.scrollY
  };
    }


// myElement.addEventListener('touchmove', function(e) {
//     // if(e.buttons>0) {
//     //  window.getSelection().empty();
//     //  image_x = image_x + zoom * (mouse_x - e.clientX);
//     //  image_y = image_y + zoom * (mouse_y - e.clientY);
//     // }
//     console.log(e.touches[0].clientX);
//     myElement.style.transform =`translate(${Math.round(e.touches[0].clientX)}px,${Math.round(e.touches[0].clientY)}px)`;
//    }, false);

// create a simple instance
// by default, it only adds horizontal recognizers

// image here !!!!

var mc = new Hammer(bottleImage__container1);

// enable pinch true/ false
mc.get('pinch').set({enable:true});


// listen to events...
mc.on("panmove pinchin pinchout", function(ev) {

    // bottleImage__container1.textContent = ev.type +" gesture detected.";

   if(ev.type == "panmove") {
      bottleImage__container1.style.transform =`translate(${Math.round(ev.changedPointers[0].clientX)}px,${Math.round(ev.changedPointers[0].clientY)}px)`;
    }

    if(ev.type == "pinchout") {
      
      var bottleImage__Img1 =document.getElementById("bottleImage__Img-1");
      
       // Keep picture in bounds
       if (width<=3) {
          bottleImage__Img1.style.transform = `scale(${width+0.5})`;
          width += 0.5 ;
        }
    }

    if(ev.type == "pinchin") {

      var bottleImage__Img1 =document.getElementById("bottleImage__Img-1");
      
       // Keep picture in bounds
       if (width>1) {
        bottleImage__Img1.style.transform = `scale(${width-0.5})`;
        width -= 0.5 ;
      }
    }
});
