class HomeScene extends Phaser.Scene{ //extends significa herencia (en este caso de Phaser.Scene)
    constructor(){
        super({ // llamamos al contructor del padre
            key: 'Home' // Es una manera de poder referenciar
        });
    }

    // Sirve para cargar recursos graficos, sonidos, json, videos
    preload() { // metodo
        this.load.image('play', 'assets/images/playbutton.png');
        
    }
    
    // Crear los objetos sprite, grupos, sonidos y tilemaps.
    create() { // metodo
        
        this.cameras.main.setBackgroundColor('#0B6138');

        // añadimos un objeto de juego
        const playBtn = this.add.sprite(180, 296, 'play'); 
        playBtn.setInteractive();

        this.input.on('pointerdown', () => this.scene.start('GameScene'));

        this.tweens.add({
            targets: playBtn,
            scaleX: 1.1,
            scaleY: 1.1,
            durations: 500,
            yoyo: true,
            repeat: -1
        });
    }

    // Se llama por cada frame por segundo
    update() { // metodo

    }

}

export default HomeScene;