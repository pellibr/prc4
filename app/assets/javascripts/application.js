// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require formcond.js
//= require bootstrap-growl-ifightcrime/jquery.bootstrap-growl

$(document).ready(function(){

  $('.phone-cli').each(function(index){
    $(this).addClass('col-md-12').css('padding', '0');
    $('.client').css('margin', '0')
  });

  function timeFunctionLong(input) {
    setTimeout(function() {
      input.type = 'text';
    }, 60000);
  };

  function previdenciario(){
    $('#subject-fields').append("<div class='subject-append col-md-8'> <fieldset class='radio_buttons grid'> <legend class='col-form-label pt-0'><b>Previdenciário-Áreas</b></legend><input type='hidden' name='work[action]' value=''><label for='work_action_aposentadoria_por_tempo_de_contribuição'><input type='radio' value='Aposentadoria Por Tempo de Contribuição' name='work[action]' id='work_action_aposentadoria_por_tempo_de_contribuição'>Aposentadoria Por Tempo de Contribuição</label><label for='work_action_aposentadoria_por_idade'><input type='radio' value='Aposentadoria Por Idade' name='work[action]' id='work_action_aposentadoria_por_idade'>Aposentadoria Por Idade</label><label for='work_action_aposentadoria_rural'><input type='radio' value='Aposentadoria Rural' name='work[action]' id='work_action_aposentadoria_rural'>Aposentadoria Rural</label><label for='work_action_benefícios_por_incapacidade_-_auxílio_doença_ou_acidente_-_invalidez_-_loas'><input type='radio' value='Benefícios Por Incapacidade - Auxílio Doença ou Acidente - Invalidez - LOAS' name='work[action]' id='work_action_benefícios_por_incapacidade_-_auxílio_doença_ou_acidente_-_invalidez_-_loas'>Benefícios Por Incapacidade - Auxílio Doença ou Acidente - Invalidez - LOAS</label><label for='work_action_revisão_de_benefício_previdenciário'><input type='radio' value='Revisão de Benefício Previdenciário' name='work[action]' id='work_action_revisão_de_benefício_previdenciário'>Revisão de Benefício Previdenciário</label> <labelfor='work_action_reconhecimento_de_tempo_averbação_serviços_administrativos'> <input type='radio' value='Reconhecimento de Tempo, Averbação, Serviços Administrativos' name='work[action]' id='work_action_reconhecimento_de_tempo_averbação_serviços_administrativos'>Reconhecimento de Tempo, Averbação, Serviços Administrativos</label> </fieldset> </div>" );
  };

  function civel(){
      $('#subject-fields').append("<div class='subject-append col-md-8'> <fieldset class='radio_buttons grid'> <legend class='col-form-label pt-0'><b>Cível-Áreas</b></legend><input type='hidden' name='work[action]' value=''><label for='work_action_familia'><input type='radio' value='Família' name='work[action]' id='work_action_familia'>Família</label><label for='work_action_consumidor'><input type='radio' value='Consumidor' name='work[action]' id='work_action_consumidor'>Consumidor</label><label for='work_action_reparacao_civel'><input type='radio' value='Reparação Cível - Danos Materiais - Danos Morais' name='work[action]' id='work_action_reparacao_civel'>Reparação Cível - Danos Materiais - Danos Morais</label></fieldset> </div>" );
  };

  function trabalhista(){
    $('#subject-fields').append("<div class='subject-append col-md-8'> <fieldset class='radio_buttons grid'> <legend class='col-form-label pt-0'><b>Trabalhista-Áreas</b></legend><input type='hidden' name='work[action]' value=''><label for='work_action_trabalhista'><input type='radio' value='Reclamatória Trabalhista' name='work[action]' id='work_action_trabalhista'>Reclamatória Trabalhista</label></fieldset> </div>" );
  };

  function tributario(){
    $('#subject-fields').append("<div class='subject-append col-md-8'> <fieldset class='radio_buttons grid'> <legend class='col-form-label pt-0'><b>Tributário-Áreas</b></legend><input type='hidden' name='work[action]' value=''><label for='work_action_asfalto'><input type='radio' value='Asfalto' name='work[action]' id='work_action_asfalto'>Asfalto</label><label for='work_action_alvara'><input type='radio' value='Alvará' name='work[action]' id='work_action_alvara'>Alvará</label><label for='work_action_outros'><input type='radio' value='Outros' name='work[action]' id='work_action_outros'>Outros</label></fieldset> </div>" );
  };

  function outros(){
    $('#subject-fields').append("<div class='subject-append col-md-8'> <fieldset class='radio_buttons grid'> <legend class='col-form-label pt-0'><b>Outros-Áreas</b></legend><input type='hidden' name='work[action]' value=''><label for='work_action_outros'><input type='radio' value='Outros' name='work[action]' id='work_action_outros'>Outros</label></fieldset> </div>" );
  };

  function trabalho(){
    $("#rate-work-fields").append("<div class='rate-works-append col-md-6' data-cond-option='work[rate_work]' data-cond-value='Trabalho' style='display: block;'> <div class='form-group'><b><label for='work_Valor de Honorários Fixos'>Valor de honorários fixos</label></b> <input class='form-control field-work' type='text' name='work[rate_fixed_exfield]' id='work_rate_fixed_exfield'></div></div>" );
  };

  function exito(){
    $("#rate-work-fields").append("<div class='rate-works-append  col-md-6' data-cond-option='work[rate_work]' data-cond-value='Exito' style='display: block;'><div class='form-group'><b><label for='work_Valor de Honorários Percentuais'>Valor de honorários percentuais</label></b><input class='form-control field-work' type='text' name='work[rate_percentage_exfield]' id='work_rate_percentage_exfield'></div></div>");
  };

  function ambos(){
    $("#rate-work-fields").append("<div class='rate-works-append  col-md-6' data-cond-option='work[rate_work]' data-cond-value='Ambos' style='display: block;'> <div class='form-group'><b><label for='work_Valor de Honorários Fixos'>Valor de honorários fixos</label></b> <input class='form-control field-work' type='number' name='work[rate_fixed_exfield]' id='work_rate_fixed_exfield'><b><label for='work_Valor de Honorários Percentuais'>Valor de honorários percentuais</label></b><input class='form-control field-work' type='number' name='work[rate_percentage_exfield]' id='work_rate_percentage_exfield'></div> </div>");
  };

  function get_action(value){
    switch (value) {
      case 'Previdenciário': previdenciario(); break;
      case 'Cível':          civel();          break;
      case 'Trabalhista':    trabalhista();    break;
      case 'Tributário':     tributario();     break;
      case 'Outros':         outros();         break;
    };
  };

  function get_rate_work(value){
    switch (value) {
      case 'Trabalho': trabalho(); break;
      case 'Êxito':    exito();    break;
      case 'Ambos':    ambos();    break;
    };
  };

  $('.subject').click(function(){
    $('.subject-append').remove();
    get_action($(this).val());
  });

  $('.rate-works').click(function(){
    $('.rate-works-append').remove();
    get_rate_work($(this).val());
  });

  get_action($("input[name='work[subject]']:checked").val());

  get_rate_work($("input[name='work[rate_work]']:checked").val());

  $("input[name='work[action]']").each(function(){
    if($(this).val() == $('#subject-fields').data('action-for-subject')){
      $(this).prop("checked", true);
    };
  });

  $(".field-work").each(function(){
    if($(this).val() == $('#rate-work-fields').data('action-for-rate-work')){
      $(this).prop("checked", true);
    };
  });




});
