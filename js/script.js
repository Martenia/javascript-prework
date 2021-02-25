let argButtonName,
    x = 0, 
    y = 0;

/** buttonTest = document.getElementById('button-test'); */
const buttonRock = document.getElementById('button-rock'), buttonPaper = document.getElementById('button-paper'), 
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) { 
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

    function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
      } 
    else if (argMoveId == 2) {
        return 'papier';
      }
    else if (argMoveId == 3) {
        return 'nożyce';
      }
    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
      }
    }

    function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      x++;      
      } 
    else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
      printMessage('Wygrywasz!');
      x++;          
      } 
    else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
      printMessage('Wygrywasz!');
      x++;         
      }  
    else if (argPlayerMove == argComputerMove){
      printMessage('Remis!');      
      }  
    else {
      printMessage('Przegrywasz :(');
      y++;    
      }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
    }

  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  printResult('<i class="fas fa-thumbs-up"></i> ' + x + ' - ' + y + ' <i class="fas fa-thumbs-down"></i>');
}

/** buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); }); */
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });