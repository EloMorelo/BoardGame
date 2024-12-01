import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

function preload() {
  this.load.image('board', '/game/assets/board.png'); 
}

function create() {
  this.add.image(400, 300, 'board');
}

function update() {}

export default config;
