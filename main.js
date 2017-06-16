var btnAdd = document.getElementById("add");
var btnSub = document.getElementById("subtract");
var btnMul = document.getElementById("multiply");
var btnDiv = document.getElementById("divide");

btnAdd.addEventListener("click", add)
btnSub.addEventListener("click", subtract)
btnMul.addEventListener("click", multiply)
btnDiv.addEventListener("click", divide)

var firstNum = document.getElementById("firstNum");
var secondNum = document.getElementById("secondNum");

var input = {
    firstNum: "",
    secondNum: ""
};

function checkInput(){
  if (firstNum.value === "" || secondNum.value === ""){
    alert("please input 2 numbers");
  } else {
    buttonClick();
  }
};

function buttonClick () {
  input.firstNum = firstNum.value;
  input.secondNum = secondNum.value;
  console.log("click");
  console.log(input);
};



/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(input){
  checkInput();
  var product = firstNum.value * secondNum.value;
  document.getElementById("output").innerHTML += 
    `<p>${product}</p>`

  console.log(product);
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(input){
  checkInput();
  var product = firstNum.value + secondNum.value;
  document.getElementById("output").innerHTML +=
    `<p>${product}</p>`

  console.log(product);
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(input){
 checkInput();
  var product = firstNum.value - secondNum.value;
  document.getElementById("output").innerHTML += 
    `<p>${product}</p>`

  console.log(product);
};

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(input){
   checkInput();
  var product = firstNum.value / secondNum.value;
  document.getElementById("output").innerHTML += 
    `<p>${product}</p>`

  console.log(product);
};


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */