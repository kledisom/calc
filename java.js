$(document).ready( function(){

   var v1, v2, op;

  $(".j_button").click( function(){
    $("#display").html($("#display").html() + $(this).html()); 
  });
  
 //CLEAN FUNCTION

  $("#toClean").click( function(){       // <-- Está função zera a o display e a label.
    if ($("#display").html() != '' || $("#signal").html()){
      $("#display").html('');
      $("#signal").html('');      
    }
  });

  // $("#toClean").click( function(){//
  //   $("#display").html('');       // Está FUNÇÃO foi melhorada logo acima!
  //   $("#signal").html('');        //
  // });                             //

  
 //ADDITION OPERATION

  $("#add").click( function(){
    if ($("display").html() != ''){  // <-- verificar se o display está vazio.
      v1 = parseFloat($("#display").html());   // Atribui um valor a variavel.
      $("#display").html('');                  //Limpa o campo de texto para o proximo valor ser digitado.
      op = "add";                              //Atribui a operação a variavel. 
      $("#signal").text($(this).html());       //Recupera a operação para dentro da label.
    } 
  });

 //SUBTRACTION OPERATION

  $("#sub").click( function(){
    if ($("display").html() != ''){  // <-- verificar se o display está vazio.
      v1 = parseFloat($("#display").html());   
      $("#display").html('');
      op = "sub";
      $("#signal").text($(this).html());
    } 
  });

  //MULTIPLICATION OPERATION

  $("#multiply").click( function(){
    if ($("display").html() != '') {  // <-- verificar se o display está vazio.
      v1 = parseFloat($("#display").html());
      $("#display").html('');
      op = "multiply";
      $("#signal").text($(this).html());
    }
  });

  //DIVISION OPERATION

  $("#division").click( function(){
    if ($("display").html() != '') {   // <-- verificar se o display está vazio.
     v1 = parseFloat($("#display").html());
     $("#display").html('');
     op = "division";
     $("#signal").text($(this).html());
    }
  });

 //RESULT FUNCTION

  $("#result").click( function teste(){

    if ($("#display").html() != '') { //Verifica se o display está vazio.
      v2 = parseFloat($("#display").html()); //Atribui o valor da 2º variavel.
      
       if (op == 'add') {
         $("#display").html(v1 + v2); //Executa a soma.
       }

       else if(op == 'sub') {
         $("#display").html(v1 - v2); //Executa a subtração
       }

       else if(op == 'multiply') {
         $("#display").html(v1 * v2); //Executa a multiplicação.
       }

       else if(op == 'division') {
         $("#display").html(v1 / v2); //Executa a divisão.
       }

    } else {alert("CAMPO VAZIO!");}
  });

 //BACKSPACE FUNCTION

  $("#bks").click( function(){

      var capture = $("#display").html().length; //Captura a quantidade de caracteres.

        var valor = $("#display").html();

           valor = valor.replace(valor.charAt(capture - 1), ""); //Substitui o valor.

              $("#display").html(valor);
                             
  });

  $("#historic").click( function(){
      if (op == 'add') {
        $("#display").html(v1 + '+' + v2 + '=' + $("#display").html());
      }

  });

 
});