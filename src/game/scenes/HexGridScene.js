import Phaser from 'phaser';

class HexGridScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HexGridScene' });
    }

    preload() {
        this.load.image('hex', '/assets/hex.png');
    }

    create() {
        const HEX_RADIUS = 50;
        const GRID_WIDTH = 5;
        const GRID_HEIGHT = 5;

        this.hexes = [];
        this.buildHexGrid(HEX_RADIUS, GRID_WIDTH, GRID_HEIGHT);
    }

    buildHexGrid(radius, cols, rows) {
        const hexWidth = radius * 2;
        const hexHeight = Math.sqrt(3) / 2 * radius;
        const xOffset = hexWidth * 0.75;
        const yOffset = hexHeight;

        for (let q = 0 ; q < cols; q++) {
            for (let r = 0; r < rows; r++) {
                const x = xOffset * q;
                const y = yOffset * r + (q % 2) * hexHeight / 2;
                const hex = this.add.image(x, y, 'hex').setDisplaySize(hexHeight, hexWidth);
                this.hexes.push({q, r, x , y});
                this.add.text(x, y, `${q},${r}`, { color: 'black', fontSize: '12px' }).setOrigin(0.5);
            }
        }
    }
}
export default HexGridScene;