
$(document).ready(function(){

    $('.modal').modal();
    $('.sidenav').sidenav();
   $('.parallax').parallax();
   $('.slider').slider({full_width:true});
  });

  $(window).scroll(function(){
    if ($(window).scrollTop()>150){
      $('nav').addClass('sticky-nav')
    }else{
      $('nav').removeClass('sticky-nav')
    }
  })


// function toggleModal(){
//     var instance = M.Modal.getInstance($('#modal3'))
//     instance.open();
// }






const splash= document.querySelector('.splash');
document.addEventListener('DOMContentLoaded',(e)=>
setTimeout(()=>{
  splash.classList.add('display-none');
},2000)
)


gsap.from('.c1,.c3',{scrollTrigger:{trigger:'.c1,.c3',toggleActions: 'restart pause restart pause'},opacity:0,x:-300,duration: 2,});
gsap.from('.c2,.c4',{scrollTrigger:{trigger:'.c2,.c4',toggleActions: 'restart pause restart pause'},opacity:0,x:+300,duration: 2,});


gsap.from('.fabout',{scrollTrigger:'.about-cont',opacity:0,x: -250, duration: 2,marker: true})



