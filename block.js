// jshint esversion:6
let clicks = -1;

const redBlock = document.querySelector('#red');
const greenBlock = document.querySelector('#green');
const blueBlock = document.querySelector('#blue');
const yellowBlock = document.querySelector('#yellow');

const blocks = {
  red: ['#f00', '#500'],
  green: ['#0f0', '#050'],
  blue: ['#00f', '#005'],
  yellow: ['#ff0', '#550'],
};

function activate(color, timeout) {
  let block;
  let color1 = blocks[color][0];
  let color2 = blocks[color][1];

  switch (color) {
    case 'red':
      block = redBlock;
      break;
    case "green":
      block = greenBlock;
      break;
    case "blue":
      block = blueBlock;
      break;
    case "yellow":
      block = yellowBlock;
      break;
  };

  lightUp(block, color1, color2, timeout);
}

function lightUp(block, color1, color2, timeout) {
  block.style.backgroundColor = color1;
  setTimeout(() => {
    block.style.backgroundColor = color2;
  }, timeout);
}
