// jshint esversion:6
class Computer {
  constructor() {
    this.pattern = [];
  }

  playRound() {
    clicks = -1;

    this.addColor();

    let idx = 0;
    let items = this.pattern.length;

    const interval = setInterval(() => {
      activate(this.pattern[idx++], 1000);
      if (idx === items) {
        clearInterval(interval);
        setTimeout(() => { clicks = 0; }, 1000);
      }
    }, 1500);
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

computer.playRound();
