{
  const playGame = function (playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    };

    const displayResult = function (argComputerMove, argPlayerMove) {
      console.log("moves:", argComputerMove, argPlayerMove);

      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage("Remis!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Przegrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage("Remis!");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        printMessage("Przegrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        printMessage("Przegrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
        printMessage("Remis!");
      } else {
        printMessage(argPlayerMove);
      }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to (komputer): " + computerMove);

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage("Twój ruch to (gracz): " + playerMove);

    displayResult(computerMove, playerMove);
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });

  document.getElementById("play-scissors").addEventListener("click", function () {
    playGame(3);
  });
}
