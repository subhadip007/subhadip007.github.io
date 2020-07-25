
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