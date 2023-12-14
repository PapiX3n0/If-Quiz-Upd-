document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let Q1 = document.getElementById("InputGreen").value.toLowerCase();
  let Q2 = document.getElementById("InputRainbow").value.toLowerCase();
  let Q3 = document.getElementById("InputGrass").value.toLowerCase();
  let Q4 = document.getElementById("InputSun").value.toLowerCase();
  let result = document.getElementById("Output");

  let = correctCount = 0;

  if (Q1 === "green" && "lime") {
    correctCount++;
    document.getElementById("Answer1").innerText = "Correct!";
  } else {
    document.getElementById("Answer1").innerText = "Incorrect!";
  }

  if (Q2 === "red") {
    correctCount++;
    document.getElementById("Answer2").innerText = "Correct!";
  } else {
    document.getElementById("Answer2").innerText = "Incorrect!";
  }

  if (Q3 === "green") {
    correctCount++;
    document.getElementById("Answer3").innerText = "Correct!";
  } else {
    document.getElementById("Answer3").innerText = "Incorrect!";
  }

  if (Q4 === "yellow") {
    correctCount++;
    document.getElementById("Answer4").innerText = "Correct!";
  } else {
    document.getElementById("Answer4").innerText = "Incorrect!";
  }

  result.innerText = `You got ${correctCount} out of 4 questions correct.`;

  if (correctCount === 4) {
    document.getElementById("Response").innerText = "Phenomenal Job!";
  } else if (correctCount === 3) {
    document.getElementById("Response").innerText = "Nice work!";
  } else if (correctCount === 2) {
    document.getElementById("Response").innerText = "Getting there...";
  } else if (correctCount === 1) {
    document.getElementById("Response").innerText = "You need to study.";
  } else {
    document.getElementById("Response").innerText = "Are you a toddler?";
  }
}
