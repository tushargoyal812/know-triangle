const inputs = document.querySelectorAll(".input");
const isTriangleBtn = document.querySelector("#triangle-btn");
const output = document.querySelector(".output");

function TotalAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function Triangle() {
  const sum = TotalAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if(sum<=0)
  {
      output.innerText='please! enter valid data'
  }
  if (sum === 180) {
    output.innerText = "Yuhu! these angles can make a triangle.";
  } else {
    output.innerText = "Oh! The angle doesn't form a triangle.Please enter right data for triangle";
  }
}

isTriangleBtn.addEventListener("click", Triangle);