// jshint esversion:6

redBlock.addEventListener("click", () => { validateBlock('red'); });
greenBlock.addEventListener("click", () => { validateBlock('green'); });

blueBlock.addEventListener("click", () => { validateBlock('blue'); });
yellowBlock.addEventListener("click", () => { validateBlock('yellow'); });

function validateBlock(color) {
  if (clicks !== -1) {
    activate(color, 500);

    if (pattern[clicks++] == color) {
      if (clicks === pattern.length) {
        status.innerHTML = 'Well done!';
        setTimeout(() => { computer.playRound(); }, 2000);
      }
    } else {
      status.innerHTML = "Incorrect! You lose!";
      replayButton.style.display = "inline-block";
      clicks = -1;
    }
  }

}
