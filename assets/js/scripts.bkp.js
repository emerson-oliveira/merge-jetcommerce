
$(document).ready(function($){
  $('.navigation-todos-item').hover(function(){
    $(this).find('.submenu').addClass('open');
  },function(){
    $(this).find('.submenu').removeClass('open');
  });

  $('.menu-toggle').click(function(){
    $('.menu-mobile').addClass('open');
  })
  $('.close-menu').click(function(){
    $(this).parent().removeClass('open');
  })

  $('.menu-wrapper li .item').click(function(){
    $(this).children('svg').toggleClass('arrow');
    $(this).next().slideToggle();
  })
  $('.tela-personalizadas').find('.list').append('<a href="/fale-conosco" class="item" title="Fale Conosco"><h5>Fale Conosco</h5></a>');

  (function() {

    /** Get main variables on load. */
    let offset = $(window).scrollTop();

    /** Check for offset on load. */
    if (offset > 40) $('.cabecalho').addClass('sticky');

    /** Check for offset on scroll. */
    $(window).on('scroll', () => {

      /** Check current offset. */
      offset = $(window).scrollTop();
      if (offset > 40) {
        $('.cabecalho').addClass('sticky');
      } else {
        $('.cabecalho').removeClass('sticky');
      }
    });
  }());

})
