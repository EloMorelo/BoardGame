import Phaser from 'phaser';
import HexGridScene from './scenes/HexGridScene';

const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2b2b2b',
  scene: [HexGridScene],
};

const game = new Phaser.Game(gameConfig);

export default gameConfig;
