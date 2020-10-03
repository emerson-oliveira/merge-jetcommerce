
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

$(document).ready(function(){
  var navegador = GetBrowserInfo();
    if(navegador == 5)
    {
        $(".footer .footer-wrapper .right-column").css({"display": "block", "flex-grow": "8"});
        $(".img-certificado img").css("width", "20%");
        $(".menu-header .menu").css({"height": "80px", "margin-top": "15px"});
        $(".infoBar .infoBar-wrapper").css("margin-top", "100px");
        $(".infoBar .infoBar-wrapper .item .icon").css("margin-top", "-60px");
        $(".menu-header .menu .navigation ul:not(.submenu)").css("margin-top", "30px");
    }
});

$(document).ready(function(){

 if (location.pathname.toString().split('/')[1] === "produto"){

    insereMsgAlertaVariacao()    

    //primeiro click #preco
    $("#variations-container .references:nth-child(1) .variations .variacao").click(function(){
      $('#variacao-preco').hide();
      $("#variations-container .references:nth-child(2) .alert-price-variations").css("display", "block");
      $("#variations-container .references:nth-child(3) .alert-price-variations").hide();

        exibeMsgAlertaCep()
    });
    
    //segundo click
    $("#variations-container .references:nth-child(2) .variations .variacao").click(function(){
      $('#variacao-preco').hide();
      $("#variations-container .references:nth-child(2) .alert-price-variations").hide();
      $("#variations-container .references:nth-child(3) .alert-price-variations").css("display", "block");
    });

    //terceiro click
    $("#variations-container .references:nth-child(3) .variations .ui.variacao.check").click(function(){
      $('#variacao-preco').css("display", "block");
      $("#variations-container .references:nth-child(2) .alert-price-variations").hide();
      $("#variations-container .references:nth-child(3) .alert-price-variations").hide();

        escondeMsgAlertaCep()
        atualizaQuantidade()
    });

  }

});

function insereMsgAlertaCep(){

    var textoAlerta = document.createElement("p");
    $(textoAlerta).text("Selecione as variações para calcular o frete.").css('color', 'red');
    $(textoAlerta).toggleClass("alertaSelecao");
    $("#simular-frete-submit").parent().parent().append(textoAlerta);
}

function exibeMsgAlertaCep(){

    $("#simular-frete-submit").attr('disabled', true);
    $(".alertaSelecao").show();
}

function escondeMsgAlertaCep(){

    $("#simular-frete-submit").attr('disabled', false);
    $(".alertaSelecao").hide();
}

function atualizaQuantidade(){

  var quant = $("#quantidade").val();
  if (quant>1) {
    $("#quantidade").val(quant-1);
    $('#qtdplus-detalhes').click()
  }
}

function insereMsgAlertaVariacao(){

  var title1 = $("#variations-container .references:nth-child(2) .title").text();
  var title2 = $("#variations-container .references:nth-child(3) .title").text();

  $("#variations-container .references:nth-child(2)")
  .append(
    '<span class="alert-price-variations">Selecione '+title1
    +' para visualizar o preço</span>'
    );

  $("#variations-container .references:nth-child(3)")
  .append(
    '<span class="alert-price-variations">Selecione '+title2
    +' para visualizar o preço</span>'
    );
}