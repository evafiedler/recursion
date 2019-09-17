$(document).ready(function(){
  let funct = "";
  $("#button").click(function(){
    $("#container").empty();
    funct = $('#select').val();
    switch(funct){
      case "triangle":
        $("#container").append("<input type='text' id='rows'>");
        $("#container").append("<button id='button2' onclick='run(1)'>run</button>");
        break;
      case "fibonacci":
        $("#container").append("<input type='text' id='nfib'>");
        $("#container").append("<button id='button2' onclick='run(2)'>run</button>");
        break;
      case "countHi":
        $("#container").append("<input type='text' id='str'>");
        $("#container").append("<button id='button2' onclick='run(3)'>run</button>");
        break;
      case "sumDigits":
        $("#container").append("<input type='text' id='nsum'>");
        $("#container").append("<button id='button2' onclick='run(4)'>run</button>");
        break;
      case "count7":
        $("#container").append("<input type='text' id='nsev'>");
        $("#container").append("<button id='button2' onclick='run(5)'>run</button>");
        break;
      case "powerN":
        $("#container").append("<input type='text' id='base'>");
        $("#container").append("<input type='text' id='npow'>");
        $("#container").append("<button id='button2' onclick='run(6)'>run</button>");
        break;
      case "array6":
        $("#container").append("<input type='text' id='nums'>");
        $("#container").append("<input type='text' id='index'>");
        $("#container").append("<button id='button2' onclick='run(7)'>run</button>");
        break;
      case "count11":
        $("#container").append("<input type='text' id='str11'>");
        $("#container").append("<button id='button2' onclick='run(8)'>run</button>");
        break;
    }
        //$('body').append("<button id='button2' onclick='run(" + funct + ")'>run</button>");
  });
})

function run(funct){
  switch(funct){
    case 1:
      let rows = parseInt($("#rows").val());
      let tri = triangle(rows);
      $("#container").append("<div>" + tri + "</div>");
      break;
    case 2:
      let nfib = parseInt($("#nfib").val());
      let fib = fibonacci(nfib);
      $("#container").append("<div>" + fib + "</div>");
      break;
    case 3:
      let str = $("#str").val();
      let hi = countHi(str);
      $("#container").append("<div>" + hi + "</div>");
      break;
    case 4:
      let nsum = parseInt($("#nsum").val());
      let sum = sumDigits(nsum);
      $("#container").append("<div>" + sum + "</div>");
      break;
    case 5:
      let nsev = parseInt($("#nsev").val());
      let sev = count7(nsev);
      $("#container").append("<div>" + sev + "</div>");
      break;
    case 6:
      let base = parseInt($("#base").val());
      let npow = parseInt($("#npow").val());
      let pow = powerN(base, npow);
      $("#container").append("<div>" + pow + "</div>");
      break;
      //fix array6
    case 7:
      let nums = $("#nums").val();
      let numsStrArr = nums.split(",");
      let numsArr = [];
      for(let i = 0; i < numsStrArr.length; i++){
        numsArr[i] = parseInt(numsStrArr[i]);
      }
      let index = parseInt($("#index").val());
      let six = array6(numsArr, index);
      $("#container").append("<div>" + six + "</div>");
      break;
    case 8:
      let strElev = $("#str11").val();
      let elev = count11(strElev);
      $("#container").append("<div>" + elev + "</div>");
      break;
  }
}

function triangle(rows){
  if(rows == 0){
    return 0;
  }
  return rows + triangle(rows - 1);
}

function fibonacci(n){
  if(n == 0){
    return 0;
  }if(n == 1){
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function countHi(str){
  if(str.length < 2){
    return 0;
  }
  if(str[0] == "h" && str[1] == "i"){
    return 1 + countHi(str.substring(2));
  }else{
    return countHi(str.substring(1));
  }
}

function sumDigits(n){
  if(n < 10){
    return n;
  }
  return n % 10 + sumDigits(Math.floor(n/10));
}

function count7(n){
  if(n == 0){
    return 0;
  }
  if(n % 10 == 7){
    return 1 + count7(Math.floor(n/10));
  }else{
    return count7(Math.floor(n/10));
  }
}

function powerN(base, n){
  if(n == 0){
    return 1;
  }

  return base * powerN(base, n - 1);
}

function array6(nums, index){
  if(index >= nums.length){
    return false;
  }

  if(nums[index] == 6){
    return true;
  }else{
    return array6(nums, index + 1);
  }
}

function count11(str){
  if(str.length < 2){
    return 0;
  }

  if(str.substring(0, 2) == "11"){
    return 1 + count11(str.substring(2));
  }else{
    return count11(str.substring(1));
  }
}
