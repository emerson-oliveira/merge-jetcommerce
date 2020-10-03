
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
  $('.tela-personalizadas').find('.list').append('');

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

$(document).ready(function($){
  $('.tela-personalizadas').find('.list').append('<a id="fale-conosco-fotter" href="/fale-conosco" class="item" title="Fale Conosco"><h5>Fale Conosco</h5></a>');
  $('.tela-personalizadas').find('.list').append('<a id="rastreamento-fotter" href="https://fretaco.com.br/portal/solucoesusiminas" class="item" title="Rastreamento"><h5>Rastrear Pedido</h5></a>');
  $('div#GetShippping .ui.radio.checkbox input:first-child').click();
  $('div#GetShippping .ui.right.floated').css('font-weight','bold');


document.querySelector("#rastreamento-fotter").style.display = "none";
document.querySelector("#fale-conosco-fotter").style.display = "none";

});//end-function

