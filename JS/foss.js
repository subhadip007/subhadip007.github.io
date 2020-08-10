
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


gsap.from('.c1,.c3',{scrollTrigger:{trigger:'.c1,.c3',toggleActions: 'restart pause restart pause'},opacity:0,ease:"elastic.out(1, 0.3)",x:-300,duration: 2,});
gsap.from('.c2,.c4',{scrollTrigger:{trigger:'.c2,.c4',toggleActions: 'restart pause restart pause'},opacity:0,ease:"elastic.out(1, 0.3)",x:+300,duration: 2,});


gsap.from('.fabout',{scrollTrigger:'.about-cont',opacity:0,ease: "back.out(1.7)",x: -250, duration: 2,marker: true})


let boxT = gsap.timeline()

boxT.to('.box',{duration:2,width:'27vw',delay:0.5,ease:"power4.inOut"})
.from('.openC',{duration:1,y:'7vw',ease:"power3.out"})
.to('.box',{opacity:0})



  
  
  
