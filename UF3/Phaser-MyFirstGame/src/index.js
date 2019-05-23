// START THE GAME

import Phaser from 'phaser';
import HomeScene from './scenes/HomeScene';
import GameScene from './scenes/GameScene';

const config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 360,
    height: 592,
    scale: {
        mode:Phaser.Scale.FIT
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:1000}
        }
    },
    scene: [
        HomeScene,
        GameScene
    ]

};

new Phaser.Game(config);