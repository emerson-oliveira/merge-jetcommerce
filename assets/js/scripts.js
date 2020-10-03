
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
  $('.menu .navigation ul').find('li').hover(function(){
    $(this).children('.submenu').addClass('open');
  }, function(){
    $(this).children('.submenu').removeClass('open');
  });

  $('.close-desconto-boleto').click(function(){
    $(this).parent().hide();
  });

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
      // console.log($(this).parents('#variations-container').find('.references').length());

      if($('#variations-container').children('.references').length == 3)
      {
        $('#variacao-preco').show();
      }

      $("#variations-container .references:nth-child(2) .alert-price-variations").hide();
      $("#variations-container .references:nth-child(3) .alert-price-variations").hide();
      $("#variations-container .references:nth-child(4) .alert-price-variations").css("display", "block");

    });
    //quarto click
    $("#variations-container .references:nth-child(4) .variations .variacao").click(function(){

      if($('#variations-container').children('.references').length == 4)
      {
        $('#variacao-preco').show();
      }
      // $('#variacao-preco').css("display", "block");
      $("#variations-container .references:nth-child(3) .alert-price-variations").hide();
      $("#variations-container .references:nth-child(4) .alert-price-variations").hide();



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
  var title3 = $("#variations-container .references:nth-child(4) .title").text();

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
    $("#variations-container .references:nth-child(4)")
    .append(
      '<span class="alert-price-variations">Selecione '+title3
      +' para visualizar o preço</span>'
      );
}
