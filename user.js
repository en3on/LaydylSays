// jshint esversion:6

redBlock.addEventListener("click", () => { validateBlock('red'); });
greenBlock.addEventListener("click", () => { validateBlock('green'); });

blueBlock.addEventListener("click", () => { validateBlock('blue'); });
yellowBlock.addEventListener("click", () => { validateBlock('yellow'); });

let pattern = computer.pattern;

function validateBlock(color) {
  if (clicks !== -1) {
    activate(color, 500);

    if (pattern[clicks++] == color) {
      if (clicks === pattern.length) {
        setTimeout(() => { computer.playRound(); }, 2000);
      }
    } else {
      console.log('FAILED!');
      clicks = -1;
    }
  }

}
