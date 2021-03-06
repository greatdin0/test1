// import BGScene from "./scenes/BGScene.js";

var config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    title: "ARKABOID",
    version: "0.0.1",
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
        }
    },
    scene: [BGScene],
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser',
        width:177,
        height: 215,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
};
var game = new Phaser.Game(config);