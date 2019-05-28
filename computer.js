// jshint esversion:6
let pattern;

class Computer {
  constructor() {
    this.pattern = [];
    this.roundNumber = 1;
  }

  playRound() {
    status.innerHTML = "Watch carefully";
    round.innerHTML = `Round ${this.roundNumber++}`;
    clicks = -1;

    this.addColor();

    let idx = 0;
    let items = this.pattern.length;

    const interval = setInterval(() => {
      activate(this.pattern[idx++], 600 / Math.log(this.roundNumber));
      if (idx === items) {
        clearInterval(interval);
        setTimeout(() => { 
          clicks = 0;
          status.innerHTML = "Your turn!";
        }, 1200);
      }
    }, 1000 / Math.log(this.roundNumber));
    pattern = this.pattern;
  }

  addColor() {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        this.pattern.push('red');
        break;
      case 1:
        this.pattern.push('green');
        break;
      case 2:
        this.pattern.push('blue');
        break;
      case 3:
        this.pattern.push('yellow');
        break;
    }
  }
}

const computer = new Computer();
