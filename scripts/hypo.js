const sides = document.querySelectorAll(".input");
const calculateBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector(".output");



function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if(Number(sides[0].value)<=0)
  {
    console.log(sides[0].value);
    console.log(sides[1].value);
    outputEl.innerText='enter valid data';
  }else if(Number(sides[1].value)<=0)
  {
    console.log(sides[0].value);
    console.log(sides[1].value);
    outputEl.innerText='enter valid data';
  }
  else{
    const sumOfSquares = calculateSumOfSquare(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
}

calculateBtn.addEventListener("click", calculateHypotenuse);