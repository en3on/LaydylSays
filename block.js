// jshint esversion:6
const redBlock = document.querySelector('#red');
const greenBlock = document.querySelector('#green');
const blueBlock = document.querySelector('#blue');
const yellowBlock = document.querySelector('#yellow');

function redActivate() {
  redBlock.style.backgroundColor = 'red';
  setTimeout(() => {
    redBlock.style.backgroundColor = '#500';
  }, 1000);
}

function greenActivate() {
  greenBlock.style.backgroundColor = 'green';
  setTimeout(() => {
    greenBlock.style.backgroundColor = '#050';
  }, 1000);
}

function blueActivate() {
  blueBlock.style.backgroundColor = 'blue';
  setTimeout(() => {
    blueBlock.style.backgroundColor = '#005';
  }, 1000);
}

function yellowActivate() {
  yellowBlock.style.backgroundColor = 'yellow';
  setTimeout(() => {
    yellowBlock.style.backgroundColor = '#550';
  }, 1000);
}
