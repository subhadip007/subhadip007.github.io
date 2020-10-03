$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  });

function adjustWindow(){
winH=$window.height();
winW=$window.width();



if(winH<=550){
  winH=500
}

if(winW>=768){
  var s=skrolle.init({froceHight: false})
  $slide.hight(winH)
  s.refresh($('.homeSlide'))
}else{

 var s=skrollr.init()
 s.destroy()

}

if(Modernizr.touch){
var s=skrollr.init()
s.destroy();
}
}