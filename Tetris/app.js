var config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    title: "OMOK",
    version: "0.0.1",
    backgroundColor: '#000000',
    scene: [GameScene,JoystickScene],
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser',
        width:1200,
        height: 2000,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
};
var game = new Phaser.Game(config);