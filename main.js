/*global $*/
$(function(){
  let push_num = [],
  column_1 = "",
  column_2 = "",
  num_1 = "",
  num_2 = "",
  cal = "",
  answer = "",
  ope = "",
  operator = false,
  formula = "",
  dot = document.getElementById("#dot");
  dot= false;

/*数値を押した場合*/
  $(".number").on("click",function(){
    /*数値をpush_numの右に追加する*/
    push_num.push($(this).text());
    dot = true;
    /*もし演算子が押されていたらnum_2として、displayにnum_2を表示する*/
    if(operator == true){
      column_2 = push_num.join("");
      num_2 = Number(column_2);
      formula = ope + push_num.join("")
      $(".display").text(formula);
    }else{
    /*もし数値が押されていたらnum_1として、displayにnum_1を表示する*/
      column_1 = push_num.join("");
      num_1 = Number(column_1);
      $(".display").text(num_1);
    }
  })
  
/*演算子を押した場合*/
  $(".operator").on("click",function(){
    /*sum1の右に演算子を追加する*/
    push_num.push($(this).text());
    /*演算子のidを取得する*/
    cal = $(this).attr("id");
    operator = true;
    ope = num_1 + $(this).text();
    $(".display").text(ope);
     push_num = [];
  })

/*イコールを押した場合*/
  $(".equal").on("click",function(){
    switch(cal){
      case "plus":
        answer = num_1 + num_2;
        break;
      case "minus":
        answer = num_1 - num_2;
        break;
      case "multiply":
        answer = num_1 * num_2;
        break;
      case "divide":
        answer = num_1 / num_2;
        break;
    }
    $(".display").text(answer);
    num_1 = answer;
  })

/*リセットを押した場合*/
  $(".AC").on("click",function(){
    column_1 = "",
    column_2 = "",
    num_1 = "";
    num_2 = "";
    cal = "";
    answer = "";
    ope = "";
    operator = false;
    push_num = [];
    dot= false;
    formula = "";
    $(".display").text(0);
  })

});