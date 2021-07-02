var canvas,database;
var gameState = 0;
var playerCount;
var player;
var form;
var game;



function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  
}



