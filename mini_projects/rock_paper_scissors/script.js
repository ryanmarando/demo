const outputs = ["rock", "paper", "scissors"];
winner = "";

function showUserOutput(output) {
  let outputUserImage = document.getElementById("image-output-user");
  outputUserImage.src = output + ".jpg";
}

function showComputerOutput(botOutput) {
  let outputComputerImage = document.getElementById("image-output-computer");
  outputComputerImage.src = botOutput + ".jpg";
}

function whoWins(output) {
  winner = "";
  let winnerText = document.getElementById("win-or-lose");
  let botOutput = outputs[Math.round(Math.random() * 2)];
  showComputerOutput(botOutput);
  switch (output !== null) {
    case output === botOutput:
      winner = winnerText.innerHTML = "Tie!";
      break;
    case output === "rock" && botOutput === "paper":
      winner = winnerText.innerHTML = "You lose!";
      break;
    case output === "rock" && botOutput === "scissors":
      winner = winnerText.innerHTML = "You win!";
      break;
    case output === "paper" && botOutput === "rock":
      winner = winnerText.innerHTML = "You win!";
      break;
    case output === "paper" && botOutput === "scissors":
      winner = winnerText.innerHTML = "You lose!";
      break;
    case output === "scissors" && botOutput === "rock":
      winner = winnerText.innerHTML = "You lose!";
      break;
    case output === "scissors" && botOutput === "paper":
      winner = winnerText.innerHTML = "You win!";
      break;
  }
}

function changeBackColor(winner) {
  let outputColor = document.getElementById("win-or-lose");
  let outputUserColor = document.getElementById("image-output-user");
  let outputComputerColor = document.getElementById("image-output-computer");
  if (winner === "You win!") {
    outputColor.style.backgroundColor = "green";
    outputUserColor.style.backgroundColor = "green";
    outputComputerColor.style.backgroundColor = "red";
  } else if (winner === "You lose!") {
    outputColor.style.backgroundColor = "red";
    outputUserColor.style.backgroundColor = "red";
    outputComputerColor.style.backgroundColor = "green";
  } else {
    outputColor.style.backgroundColor = "gray";
    outputUserColor.style.backgroundColor = "gray";
    outputComputerColor.style.backgroundColor = "gray";
  }
}

function choseOutput(type) {
  let output = "";
  if (type === outputs[0]) {
    output = "rock";
    showUserOutput(output);
  } else if (type === outputs[1]) {
    output = "paper";
    showUserOutput(output);
  } else {
    output = "scissors";
    showUserOutput(output);
  }

  whoWins(output);
  changeBackColor(winner);
}
