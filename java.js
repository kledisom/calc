$(document).ready( function(){

   var v1, v2, op;

   $("#display").html('0'); //Display já inicia com o valor 0.

   //Eventos relacionados ao j_button.

  $(".j_button").click( function(){
    if ($("#display").html() == 0 ) {   // Relação com o botão clean.
      $("#display").html('');      
    }
    
      $("#display").html($("#display").html() + $(this).html());    

  });

  //Ponto separador.
  
  $(".separate").click( function(){
     $("#display").html($("#display").html() + '.' );
  });

 //CLEAN FUNCTION

  $("#toClean").click( function(){       // <-- Está função zera a o display e a label.
    if ($("#display").html() != '' || $("#signal").html()){
      $("#display").html('0');
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

          var valor = valor.replace(valor.charAt(capture - 1), ""); //Substitui o valor.
            if ($("#display").html() != 0){
              $("#display").html(valor);
            }                 
  });

  //HISTORIC FUNCTION

  $("#historic").click( function(){

        var result = $("#display").html();
        var h1 = v1 + '+' + v2 + '=' + result;
        var h2 = v1 + '-' + v2 + '=' + result;
        var h3 = v1 + '*' + v2 + '=' + result;
        var h4 = v1 + '/' + v2 + '=' + result;
        

      if (op == 'add') {
         $("#display").html(h1);
      } 
      
      else if(op == 'sub'){
        $("#display").html(h2);
      }

      else if(op == 'multiply'){
        $("#display").html(h3);
      }

      else if(op == 'division'){
        $("#display").html(h4);
      }

  });

 
});
